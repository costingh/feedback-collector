import { getAllPosts } from '../../_lib/getPosts'
import Link from 'next/link'
import OptimizedImage from '@/components/global/OptimizedImage'
import StructuredData from '@/components/global/StructuredData'
import { Post } from '../../_lib/getPosts'

interface CategoryPageProps {
	params: {
		slug: string
	}
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const posts = await getAllPosts()
	const categoryPosts = posts.filter((post) =>
		post.categories.some(
			(category) =>
				category.toLowerCase().replace(/\s+/g, '-') === params.slug,
		),
	)

	if (categoryPosts.length === 0) {
		return (
			<div className="max-w-4xl mx-auto px-5 py-16">
				<h1 className="text-4xl font-bold text-white mb-4">
					Category Not Found
				</h1>
				<p className="text-gray-400">
					No posts found in this category.
				</p>
			</div>
		)
	}

	const categoryName = categoryPosts[0].categories.find(
		(category) =>
			category.toLowerCase().replace(/\s+/g, '-') === params.slug,
	)

	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		name: `${categoryName} - Feedbackz Blog`,
		description: `Articles about ${categoryName} on Feedbackz`,
		url: `https://feedbackz.co/blog/category/${params.slug}`,
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: categoryPosts.map((post, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'BlogPosting',
					headline: post.title,
					url: `https://feedbackz.co/blog/${post.slug}`,
					datePublished: post.date,
					author: {
						'@type': 'Person',
						name: post.author.name,
					},
				},
			})),
		},
	}

	return (
		<div className="max-w-4xl mx-auto px-5 py-16">
			<StructuredData type="CollectionPage" data={schemaData} />

			<header className="mb-12">
				<h1 className="text-4xl font-bold text-white mb-4">
					{categoryName}
				</h1>
				<p className="text-gray-400">
					{categoryPosts.length} article
					{categoryPosts.length !== 1 ? 's' : ''} in this category
				</p>
			</header>

			<div className="grid gap-8">
				{categoryPosts.map((post) => (
					<article key={post.slug} className="group">
						<Link href={`/blog/${post.slug}`} className="block">
							<div className="flex gap-6">
								<div className="relative w-48 h-32 flex-shrink-0">
									<OptimizedImage
										src={post.image}
										alt={post.title}
										width={192}
										height={128}
										className="object-cover rounded-lg"
									/>
								</div>
								<div className="flex-1">
									<h2 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
										{post.title}
									</h2>
									<p className="text-gray-400 text-sm line-clamp-2 mb-3">
										{post.excerpt}
									</p>
									<div className="flex items-center gap-4 text-sm text-gray-500">
										<time dateTime={post.date}>
											{new Date(
												post.date,
											).toLocaleDateString()}
										</time>
										<span>•</span>
										<div className="flex items-center gap-2">
											<img
												src={post.author.avatar}
												alt={post.author.name}
												className="w-5 h-5 rounded-full"
											/>
											<span>{post.author.name}</span>
										</div>
									</div>
								</div>
							</div>
						</Link>
					</article>
				))}
			</div>
		</div>
	)
}
