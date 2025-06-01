import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Upload } from 'lucide-react'
import imageCompression from 'browser-image-compression'

interface UploadImageProps {
	text: string
	src: string
	alt: string
	width: number
	height: number
	isRequired?: boolean
	primaryColor?: string
	baseColor?: string
	setImages: any
	inputType: string
}

const UploadImage: React.FC<UploadImageProps> = ({
	text,
	src,
	alt,
	width,
	height,
	isRequired = false,
	primaryColor,
	baseColor,
	setImages,
	inputType,
}) => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null)

	const handleFileChange = async (
		event: React.ChangeEvent<HTMLInputElement>,
	) => {
		const file = event.target.files?.[0]
		if (file) {
			try {
				// Image compression options
				const options = {
					maxSizeMB: 1,
					maxWidthOrHeight: 300,
					useWebWorker: true,
				}

				// Compress image
				const compressedFile = await imageCompression(file, options)

				// Convert image to Base64
				const reader = new FileReader()
				reader.onloadend = () => {
					if (reader.result) {
						setSelectedImage(reader.result as string)
						// @ts-ignore
						setImages((prev) => ({ ...prev, [inputType]: file }))
					}
				}
				reader.readAsDataURL(compressedFile)
			} catch (error) {
				console.error('Error compressing or converting image', error)
			}
		}
	}

	const handleButtonClick = () => {
		// Trigger file input click
		document.getElementById('fileInput-' + inputType)?.click()
	}

	return (
		<div className="flex flex-col flex-1 items-center gap-2">
			<span className="font-[600] text-[13px] text-gray-400">
				{text}
				{isRequired && <span className="text-red-500">*</span>}
			</span>
			<Image
				src={selectedImage || src}
				width={width}
				height={height}
				alt={alt}
				className="rounded-[3px]"
			/>
			<button
				className="px-3 py-1 cursor-pointer rounded-lg text-gray-50 font-normal tracking-wide text-[12px] flex items-center gap-4 justify-center hover:opacity-[0.7]"
				style={{
					backgroundColor: primaryColor || baseColor,
				}}
				onClick={handleButtonClick}
			>
				<div>Upload</div> <Upload size={14} />
			</button>
			<input
				type="file"
				id={'fileInput-' + inputType}
				accept="image/jpeg, image/png, image/svg+xml"
				style={{ display: 'none' }}
				onChange={handleFileChange}
			/>
		</div>
	)
}

export default UploadImage
