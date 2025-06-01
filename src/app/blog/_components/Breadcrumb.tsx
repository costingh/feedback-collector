import Link from 'next/link'
import StructuredData from '@/components/global/StructuredData'

interface BreadcrumbItem {
	label: string
	href: string
}

interface BreadcrumbProps {
	items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: items.map((item, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: item.label,
			item: `https://feedbackz.co${item.href}`,
		})),
	}

	return (
		<>
			<StructuredData type="BreadcrumbList" data={schemaData} />
			<nav className="mb-8" aria-label="Breadcrumb">
				<ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
					{items.map((item, index) => (
						<li key={item.href} className="flex items-center">
							{index > 0 && (
								<svg
									className="mx-2 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							)}
							{index === items.length - 1 ? (
								<span className="text-white">{item.label}</span>
							) : (
								<Link
									href={item.href}
									className="hover:text-white transition-colors"
								>
									{item.label}
								</Link>
							)}
						</li>
					))}
				</ol>
			</nav>
		</>
	)
}
