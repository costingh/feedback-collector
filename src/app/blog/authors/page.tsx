import { getAllPosts } from '../_lib/getPosts'
import Link from 'next/link'
import Image from 'next/image'

export default async function AuthorsPage() {
	const posts = await getAllPosts()
	const authors = Array.from(
		new Map(posts.map((post) => [post.author.name, post.author])).values(),
	)

	return (
		<div className="max-w-4xl mx-auto px-5 py-16">
			<h1 className="text-4xl font-bold text-white mb-8">Authors</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{authors.map((author) => {
					const authorPosts = posts.filter(
						(post) => post.author.name === author.name,
					)
					return (
						<Link
							key={author.name}
							href={`/blog/author/${author.name.toLowerCase().replace(/\s+/g, '-')}`}
							className="flex items-center gap-4 p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors"
						>
							<div className="relative w-16 h-16 rounded-full overflow-hidden">
								<Image
									src={author.avatar}
									alt={author.name}
									fill
									className="object-cover"
								/>
							</div>
							<div>
								<h2 className="text-xl font-semibold text-white">
									{author.name}
								</h2>
								<p className="text-gray-400">
									{authorPosts.length} articles
								</p>
							</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
