import Link from 'next/link'
import OptimizedImage from '@/components/global/OptimizedImage'

interface Post {
	slug: string
	title: string
	excerpt: string
	image: string
	date: string
	categories: string[]
}

interface RelatedPostsProps {
	currentPost: Post
	posts: Post[]
}

export default function RelatedPosts({
	currentPost,
	posts,
}: RelatedPostsProps) {
	// Find related posts based on shared categories
	const relatedPosts = posts
		.filter(
			(post) =>
				post.slug !== currentPost.slug &&
				post.categories.some((category) =>
					currentPost.categories.includes(category),
				),
		)
		.slice(0, 3)

	if (relatedPosts.length === 0) return null

	return (
		<section className="mt-16 pt-16 border-t border-gray-800">
			<h2 className="text-2xl font-bold text-white mb-8">
				Related Articles
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{relatedPosts.map((post) => (
					<article key={post.slug} className="group">
						<Link href={`/blog/${post.slug}`} className="block">
							<div className="relative aspect-[16/9] mb-4 rounded-lg overflow-hidden">
								<OptimizedImage
									src={post.image}
									alt={post.title}
									width={400}
									height={225}
									className="object-cover transition-transform group-hover:scale-105"
								/>
							</div>
							<h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
								{post.title}
							</h3>
							<p className="mt-2 text-sm text-gray-400 line-clamp-2">
								{post.excerpt}
							</p>
							<time className="mt-2 text-sm text-gray-500 block">
								{new Date(post.date).toLocaleDateString()}
							</time>
						</Link>
					</article>
				))}
			</div>
		</section>
	)
}
