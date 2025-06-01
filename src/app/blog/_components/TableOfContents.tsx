'use client'

import { useEffect, useState } from 'react'

interface TableOfContentsProps {
	content: string
}

export default function TableOfContents({ content }: TableOfContentsProps) {
	const [headings, setHeadings] = useState<
		{ id: string; text: string; level: number }[]
	>([])
	const [activeId, setActiveId] = useState<string>('')

	useEffect(() => {
		// Extract headings from content
		const parser = new DOMParser()
		const doc = parser.parseFromString(content, 'text/html')
		const headingElements = doc.querySelectorAll('h2, h3')

		const extractedHeadings = Array.from(headingElements).map(
			(heading) => ({
				id:
					heading.id ||
					heading.textContent?.toLowerCase().replace(/\s+/g, '-') ||
					'',
				text: heading.textContent || '',
				level: parseInt(heading.tagName[1]),
			}),
		)

		setHeadings(extractedHeadings)

		// Add IDs to headings if they don't exist
		headingElements.forEach((heading) => {
			if (!heading.id) {
				heading.id =
					heading.textContent?.toLowerCase().replace(/\s+/g, '-') ||
					''
			}
		})
	}, [content])

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id)
					}
				})
			},
			{ rootMargin: '-20% 0px -80% 0px' },
		)

		headings.forEach(({ id }) => {
			const element = document.getElementById(id)
			if (element) observer.observe(element)
		})

		return () => observer.disconnect()
	}, [headings])

	return (
		<nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
			<h2 className="text-lg font-semibold text-white mb-4">
				Table of Contents
			</h2>
			<ul className="space-y-2">
				{headings.map(({ id, text, level }) => (
					<li
						key={id}
						style={{ marginLeft: `${(level - 2) * 1}rem` }}
					>
						<a
							href={`#${id}`}
							className={`
                block text-sm text-gray-400 hover:text-white transition-colors
                ${activeId === id ? 'text-blue-400 font-medium' : ''}
              `}
							onClick={(e) => {
								e.preventDefault()
								document
									.getElementById(id)
									?.scrollIntoView({ behavior: 'smooth' })
							}}
						>
							{text}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}
