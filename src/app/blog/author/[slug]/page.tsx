import { getAllPosts } from '../../_lib/getPosts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import OptimizedImage from '@/components/global/OptimizedImage'
import StructuredData from '@/components/global/StructuredData'

interface AuthorPageProps {
	params: {
		slug: string
	}
}

export default async function AuthorPage({ params }: AuthorPageProps) {
	const posts = await getAllPosts()
	const authorSlug = params.slug

	// Find the author's posts
	const authorPosts = posts.filter(
		(post) =>
			post.author.name.toLowerCase().replace(/\s+/g, '-') === authorSlug,
	)

	if (authorPosts.length === 0) return notFound()

	const author = authorPosts[0].author

	const schemaData = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: author.name,
		image: author.avatar,
		description: `Articles by ${author.name}`,
		url: `https://feedbackz.co/blog/author/${authorSlug}`,
		author: {
			'@type': 'Person',
			name: author.name,
			image: author.avatar,
		},
	}

	return (
		<div className="max-w-4xl mx-auto px-5 py-16">
			<StructuredData type="Person" data={schemaData} />

			<div className="flex items-center gap-6 mb-12">
				<div className="relative w-24 h-24 rounded-full overflow-hidden">
					<Image
						src={author.avatar}
						alt={author.name}
						fill
						className="object-cover"
					/>
				</div>
				<div>
					<h1 className="text-4xl font-bold text-white mb-2">
						{author.name}
					</h1>
					<p className="text-gray-400">
						{authorPosts.length} articles
					</p>
				</div>
			</div>

			<div className="space-y-8">
				{authorPosts.map((post) => (
					<article key={post.slug} className="flex gap-6">
						<div className="relative w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
							<OptimizedImage
								src={post.image}
								alt={post.title}
								width={192}
								height={128}
								className="object-cover"
							/>
						</div>
						<div>
							<Link
								href={`/blog/${post.slug}`}
								className="text-xl font-semibold text-white hover:text-blue-400 transition-colors"
							>
								{post.title}
							</Link>
							<p className="mt-2 text-gray-400 line-clamp-2">
								{post.excerpt}
							</p>
							<div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
								<time dateTime={post.date}>
									{new Date(post.date).toLocaleDateString()}
								</time>
								{post.categories.map((category) => (
									<Link
										key={category}
										href={`/blog/category/${category.toLowerCase()}`}
										className="text-blue-400 hover:text-blue-300"
									>
										{category}
									</Link>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	)
}
