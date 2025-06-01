'use client'
import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
	src: string
	alt: string
	width?: number
	height?: number
	className?: string
	priority?: boolean
	itemProp?: string
}

export default function OptimizedImage({
	src,
	alt,
	width = 1000,
	height = 600,
	className = '',
	priority = false,
	itemProp,
}: OptimizedImageProps) {
	const [isLoading, setIsLoading] = useState(true)

	// Ensure the image URL is absolute
	const imageUrl = src.startsWith('http') ? src : `https://feedbackz.co${src}`

	return (
		<div className={`relative overflow-hidden ${className}`}>
			<Image
				src={imageUrl}
				alt={alt}
				width={width}
				height={height}
				className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
          ${className}
        `}
				onLoadingComplete={() => setIsLoading(false)}
				priority={priority}
				itemProp={itemProp}
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>
			{isLoading && (
				<div className="absolute inset-0 bg-gray-200 animate-pulse" />
			)}
		</div>
	)
}
