'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function SearchForm() {
	const router = useRouter()
	const [query, setQuery] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (query.trim()) {
			router.push(`/blog/search?q=${encodeURIComponent(query.trim())}`)
		}
	}

	return (
		<form onSubmit={handleSubmit} className="relative">
			<input
				type="search"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder="Search articles..."
				className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
			<button
				type="submit"
				className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-white"
				aria-label="Search"
			>
				<svg
					className="w-5 h-5"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					/>
				</svg>
			</button>
		</form>
	)
}
