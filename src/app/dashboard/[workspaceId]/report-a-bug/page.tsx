'use client'

import { useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { Textarea } from '@/components/ui/textarea'
import SpinnerButton from '@/components/global/loader/spinner-button'

const ReportBugPage = () => {
	const [description, setDescription] = useState<string>('')
	const [loading, setLoading] = useState<boolean>(false)

	const handleSubmit = async () => {
		if (!description.trim()) {
			toast.error('Bug description cannot be empty')
			return
		}

		setLoading(true)
		try {
			const response = await axios.post('/api/report-bug', {
				description,
			})
			if (response.status === 200) {
				toast.success('Bug report submitted successfully!')
				setDescription('')
			} else {
				toast.error('Failed to submit the bug report.')
			}
		} catch (error) {
			console.error(error)
			toast.error('Unexpected error occurred.')
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h1 className="text-[18px] font-semibold mb-4">Report a Bug</h1>
			<p className="mb-4 text-[14px] text-gray-600">
				If you&apos;ve encountered a bug, please provide as much detail
				as possible so we can address it quickly.
			</p>

			<Textarea
				placeholder="Describe the bug in detail"
				className="w-full mb-4 min-h-[200px]"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				disabled={loading}
			/>

			<SpinnerButton loading={loading} handleSubmit={handleSubmit} />
		</div>
	)
}

export default ReportBugPage
