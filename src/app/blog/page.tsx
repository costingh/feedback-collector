import Link from 'next/link'
import OptimizedImage from '@/components/global/OptimizedImage'
import StructuredData from '@/components/global/StructuredData'
import { getAllPosts } from './_lib/getPosts'

interface Post {
	slug: string
	title: string
	excerpt: string
	image: string
	date: string
	categories: string[]
	author: {
		name: string
		avatar: string
	}
}

export default async function BlogPage() {
	const posts = (await getAllPosts()) as Post[]

	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'Blog',
		name: 'Feedbackz Blog',
		description: 'Latest insights, tutorials, and updates from Feedbackz',
		url: 'https://feedbackz.co/blog',
		publisher: {
			'@type': 'Organization',
			name: 'Feedbackz',
			logo: {
				'@type': 'ImageObject',
				url: 'https://feedbackz.co/logo.png',
			},
		},
		mainEntity: {
			'@type': 'ItemList',
			itemListElement: posts.map((post, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				item: {
					'@type': 'BlogPosting',
					headline: post.title,
					description: post.excerpt,
					image: post.image,
					datePublished: post.date,
					url: `https://feedbackz.co/blog/${post.slug}`,
					author: {
						'@type': 'Person',
						name: post.author.name,
						image: post.author.avatar,
					},
					publisher: {
						'@type': 'Organization',
						name: 'Feedbackz',
						logo: {
							'@type': 'ImageObject',
							url: 'https://feedbackz.co/logo.png',
						},
					},
				},
			})),
		},
	}

	return (
		<div className="max-w-4xl mx-auto px-5 py-16">
			<StructuredData type="Organization" data={schemaData} />

			<header className="mb-12">
				<h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
				<p className="text-gray-400">
					Latest insights, tutorials, and updates from Feedbackz
				</p>
			</header>

			<div className="grid gap-8">
				{posts.map((post) => (
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
										<span>•</span>
										<div className="flex gap-2">
											{post.categories.map((category) => (
												<Link
													key={category}
													href={`/blog/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
													className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs hover:bg-blue-500/20 transition-colors"
												>
													{category}
												</Link>
											))}
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
