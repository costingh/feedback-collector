import { getAllPosts } from '../_lib/getPosts'
import Link from 'next/link'
import OptimizedImage from '@/components/global/OptimizedImage'

export default async function ArchivePage() {
	const posts = await getAllPosts()

	// Group posts by year and month
	const postsByDate = posts.reduce(
		(acc, post) => {
			const date = new Date(post.date)
			const year = date.getFullYear()
			const month = date.toLocaleString('default', { month: 'long' })

			if (!acc[year]) acc[year] = {}
			if (!acc[year][month]) acc[year][month] = []

			acc[year][month].push(post)
			return acc
		},
		{} as Record<number, Record<string, typeof posts>>,
	)

	return (
		<div className="max-w-4xl mx-auto px-5 py-16">
			<h1 className="text-4xl font-bold text-white mb-8">Archive</h1>
			{Object.entries(postsByDate)
				.sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
				.map(([year, months]) => (
					<div key={year} className="mb-12">
						<h2 className="text-2xl font-bold text-white mb-6">
							{year}
						</h2>
						{Object.entries(months)
							.sort(
								([monthA], [monthB]) =>
									new Date(`${monthA} 1, ${year}`).getTime() -
									new Date(`${monthB} 1, ${year}`).getTime(),
							)
							.map(([month, posts]) => (
								<div key={month} className="mb-8">
									<h3 className="text-xl font-semibold text-white mb-4">
										{month}
									</h3>
									<div className="space-y-6">
										{posts.map((post) => (
											<article
												key={post.slug}
												className="flex gap-6"
											>
												<div className="relative w-32 h-24 rounded-lg overflow-hidden flex-shrink-0">
													<OptimizedImage
														src={post.image}
														alt={post.title}
														width={128}
														height={96}
														className="object-cover"
													/>
												</div>
												<div>
													<Link
														href={`/blog/${post.slug}`}
														className="text-lg font-medium text-white hover:text-blue-400 transition-colors"
													>
														{post.title}
													</Link>
													<p className="mt-1 text-sm text-gray-400 line-clamp-2">
														{post.excerpt}
													</p>
													<time className="mt-2 text-sm text-gray-500 block">
														{new Date(
															post.date,
														).toLocaleDateString()}
													</time>
												</div>
											</article>
										))}
									</div>
								</div>
							))}
					</div>
				))}
		</div>
	)
}
