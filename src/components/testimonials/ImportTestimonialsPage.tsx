'use client'

import { useState } from 'react'
import { CheckCircle, Globe, Router, Upload, XCircle } from 'lucide-react'
import axios from 'axios'
import { toast } from 'sonner'
import TestimonialsFromOtherSources from './TestimonialsFromOtherSources'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { sources } from '@/constants/testimonials-sources'
import { getUserTestiImportCounter } from '@/actions/workspace'
import { useQuery } from '@tanstack/react-query'

type Props = {
	workspaceId: string
}

const ImportTestimonialsPage = ({ workspaceId }: Props) => {
	const [showSources, setShowSources] = useState(false)
	const [selectedSource, setSelectedSource] = useState<string | null>(null)
	const [url, setUrl] = useState('')
	const [testimonialsToImport, setTestimonialsToImport] = useState<any[]>([])
	const source = sources.find((s) => s.id === selectedSource)
	const isValid = source?.pattern.test(url) ?? false
	const [isChoosingSources, setIsChoosingSources] = useState(true)
	const [checkedItems, setChecked] = useState(new Set<number>())
	const [isUploadingFile, setIsUploadingFile] = useState(false)
	const [file, setFile] = useState<File | null>(null)
	const router = useRouter()

	const { data: testiImportCounter } = useQuery({
		queryKey: ['user-testi-import-counter', workspaceId],
		queryFn: () => getUserTestiImportCounter(workspaceId),
	})

	const handleImportTestimonials = async (url: string, source: string) => {
		if(source === 'g2') {
			await handleImportG2Testimonials(url, source)
		} else if (source === 'capterra') {
			await handleImportCapterraTestimonials(url, source)
		}
	}
	
	const handleImportCapterraTestimonials = async (url: string, source: string) => {
		try {
			setIsChoosingSources(false)
			console.log(`Importing testimonials from ${url} using ${source}`)

			if (!url.trim()) {
				toast.error('Url cannot be empty')
				return
			}

			// You may want to dynamically select API path based on source param
			const response = await axios.post(
				'/api/import-testimonials/capterra-testimonials',
				{
					url,
					workspaceId
				},
			)

			const data = response?.data?.result
			const reviews = data?.highlighted_reviews

			const testimonials = reviews?.map((review: any) => ({
				id: review?.review_id,
				name: review?.reviewer?.full_name,
				message: review?.overall,
				jobTitle: review?.reviewer?.job_title,
				website: review?.link,
				createdAt: review?.published_at,
				video: '',
				link: review?.link,
				source: 'capterra',
				company: review?.industry,
				stars: review?.rating,
				email: '',
				avatar: '',
				tags: []
			}))

			// console.log(reviews[0]);
			setTestimonialsToImport(testimonials)
		} catch (error) {
			setIsChoosingSources(true)
			console.error(error)
			toast.error('Failed to import testimonials. You reached your limit')
		}
	}

	const handleImportG2Testimonials = async (url: string, source: string) => {
		try {
			setIsChoosingSources(false)
			console.log(`Importing testimonials from ${url} using ${source}`)

			if (!url.trim()) {
				toast.error('Url cannot be empty')
				return
			}

			// You may want to dynamically select API path based on source param
			const response = await axios.post(
				'/api/import-testimonials/g2-testimonials',
				{
					url,
					workspaceId
				},
			)

			const data = response?.data?.result
			const reviews = data?.all_reviews

			const testimonials = reviews?.map((review: any) => ({
				id: review?.review_id,
				name: review?.reviewer?.reviewer_name,
				message: review?.review_content,
				jobTitle: review?.reviewer?.reviewer_job_title,
				website: review?.reviewer?.reviewer_link,
				createdAt: review?.publish_date,
				video: review?.video_link,
				// logo: review?.product_logo,
				link: review?.review_link,
				source: 'G2',
				company: review?.product_name,
				stars: review?.review_rating,
				email: review?.reviewer?.reviewer_email,
				avatar: review?.reviewer?.reviewer_avatar,
				tags: review?.review_question_answers?.map(
					(answer: any) => answer?.question,
				),
			}))

			// console.log(reviews[0]);
			setTestimonialsToImport(testimonials)
		} catch (error) {
			setIsChoosingSources(true)
			console.error(error)
			toast.error('Failed to import testimonials. You reached your limit')
		}
	}

	const isChecked = (id: number) => {
		return checkedItems.has(id)
	}

	const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0]
		if (!selectedFile) return

		if (selectedFile.size > 5 * 1024 * 1024) {
			toast.error('File is too large. Max 5MB.')
			return
		}

		const fileExtension = selectedFile.name.split('.').pop()?.toLowerCase()
		const reader = new FileReader()

		reader.onload = async (event) => {
			const text = event.target?.result
			let testimonials = []

			try {
				if (fileExtension === 'json') {
					testimonials = JSON.parse(text as string)
				} else if (fileExtension === 'csv') {
					testimonials = parseCSV(text as string)
				} else {
					toast.error('Unsupported file format')
					return
				}

				await axios.post(
					'/api/import-testimonials/bulk-import-from-file',
					{
						workspaceId,
						testimonials,
					},
				)

				toast.success('Testimonials uploaded successfully!')
				setIsUploadingFile(false)
				router.push(`/dashboard/${workspaceId}/testimonials`)
			} catch (error) {
				console.error(error)
				toast.error('Failed to parse and upload file.')
			}
		}

		if (fileExtension === 'json' || fileExtension === 'csv') {
			reader.readAsText(selectedFile)
		}
	}

	const parseCSV = (csvText: string) => {
		const lines = csvText.split('\n').filter(Boolean)
		const headers = lines[0].split(',').map((h) => h.trim())
		return lines.slice(1).map((line) => {
			const values = line.split(',').map((v) => v.trim())
			return headers.reduce(
				(acc, header, idx) => {
					acc[header] = values[idx]
					return acc
				},
				{} as Record<string, string>,
			)
		})
	}

	return (
		<div className="flex px-8 py-5 w-full">
			<div className="w-full space-y-6">
				<div className="flex items-center justify-between">
					<h2 className="text-xl font-semibold">
						Import Testimonials ✨
					</h2>
					<p className="text-sm text-gray-500">
						Current imports: {testiImportCounter?.data}
					</p>
				</div>

				{(isChoosingSources || isUploadingFile) && (
					<>
						{/* Trigger */}
						<div className="space-y-4">
							{/* Import from Website */}
							<div
								onClick={() => setShowSources(!showSources)}
								className="relative w-full flex items-start gap-4 border border-gray-300 rounded-md p-4 cursor-pointer hover:bg-gray-50 transition"
							>
								{/* Badge */}
								{/* <span className="absolute top-2 right-2 bg-red-100 text-red-700 text-xs font-semibold px-2 py-0.5 rounded-full select-none">
									Not Supported Yet
								</span> */}

								<div className="text-blue-500 mt-1">
									<Globe className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-gray-800 font-semibold text-sm sm:text-base">
										Import from a Website
									</h3>
									<p className="text-gray-500 text-sm">
										Bring in testimonials from platforms
										like G2, Trustpilot, or Capterra.
									</p>
								</div>
							</div>

							{/* Import from File */}
							<div
								onClick={() => {
									setIsUploadingFile(true)
									setIsChoosingSources(false)
								}}
								className="w-full flex items-start gap-4 border border-gray-300 rounded-md p-4 cursor-pointer hover:bg-gray-50 transition"
							>
								<div className="text-green-500 mt-1">
									<Upload className="w-6 h-6" />
								</div>
								<div>
									<h3 className="text-gray-800 font-semibold text-sm sm:text-base">
										Import from a File
									</h3>
									<p className="text-gray-500 text-sm">
										Upload testimonials via CSV or JSON
										file.
									</p>
								</div>
							</div>
						</div>

						{showSources && (
							<div className="space-y-6">
								<div className="flex gap-4 pt-2">
									{sources.map((src) => (
										<div
											key={src.id}
											onClick={() => {
												setSelectedSource(src.id)
												setUrl('')
											}}
											className={`w-[80px] h-[80px] flex flex-col items-center justify-center border rounded-md cursor-pointer hover:bg-gray-100 transition ${selectedSource === src.id
												? 'border-black'
												: 'border-gray-300'
												}`}
										>
											<div>{src.logo}</div>
											<div className="mt-2 text-sm text-center font-medium">
												{src.name}
											</div>
										</div>
									))}
								</div>

								{selectedSource && (
									<div className="space-y-3 flex flex-col">
										<label className="text-sm font-medium text-gray-700">
											Paste the {source?.name} URL
										</label>
										<div className="relative">
											<input
												type="text"
												value={url}
												onChange={(e) =>
													setUrl(e.target.value)
												}
												placeholder={
													source?.placeholder
												}
												className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10"
											/>
											<div className="absolute right-3 top-1/2 transform -translate-y-1/2">
												{url.length > 0 &&
													(isValid ? (
														<CheckCircle className="text-green-500 w-5 h-5" />
													) : (
														<XCircle className="text-red-500 w-5 h-5" />
													))}
											</div>
										</div>
										<span className="text-sm text-gray-500">
											{source?.example}
										</span>

										<div>
											<button
												onClick={() =>
													handleImportTestimonials(
														url,
														selectedSource!,
													)
												}
												disabled={!isValid}
												className={`px-4 py-2 text-white rounded-md transition ${isValid
													? 'bg-black hover:bg-gray-800'
													: 'bg-gray-300 cursor-not-allowed'
													}`}
											>
												Import Testimonials
											</button>
										</div>
									</div>
								)}
							</div>
						)}
					</>
				)}

				{showSources && selectedSource && testimonialsToImport?.length > 0 && <TestimonialsFromOtherSources
					testimonials={testimonialsToImport}
					isChecked={isChecked}
					setChecked={setChecked}
					tags={[]}
					checkedItems={checkedItems}
					workspaceId={workspaceId}
					source={selectedSource}
				/>}

				{isUploadingFile && (
					<div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8 border border-gray-200">
						<h2 className="text-2xl font-semibold text-gray-900 mb-4">
							Upload a Structured File
						</h2>
						<p className="text-gray-600 mb-6">
							Upload a CSV or JSON file to import testimonials.
							See a sample template{' '}
							<Link
								href="/example_csv_import_testimonials.csv"
								download="/example_csv_import_testimonials.csv"
								className="text-blue-600 hover:underline"
							>
								here
							</Link>
							.
						</p>

						<label
							htmlFor="file-upload"
							className="flex items-center justify-center w-full h-40 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 transition-colors bg-gray-50"
						>
							<svg
								className="w-10 h-10 text-blue-500 mr-3"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M7 16v4h10v-4m-5-12v12m-5-5l5-5 5 5"
								></path>
							</svg>
							<span className="text-gray-600 font-medium">
								Click to upload or drag and drop your file
							</span>
							<input
								type="file"
								id="file-upload"
								accept=".csv,.json"
								onChange={handleFileChange}
								className="hidden"
							/>
						</label>

						<div className="flex justify-between mt-4 text-sm text-gray-500">
							<span>
								Supported formats:{' '}
								<span className="font-semibold text-gray-700">
									CSV, XLSX, XLS, JSON
								</span>
							</span>
							<span>
								Max size:{' '}
								<span className="font-semibold text-gray-700">
									5MB
								</span>
							</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default ImportTestimonialsPage
