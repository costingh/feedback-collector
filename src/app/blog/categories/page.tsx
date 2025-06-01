import { getAllPosts } from '../_lib/getPosts'
import Link from 'next/link'

export default async function CategoriesPage() {
	const posts = await getAllPosts()
	const categories = Array.from(
		new Set(posts.flatMap((post) => post.categories)),
	)

	return (
		<div className="max-w-4xl mx-auto px-5 py-16">
			<h1 className="text-4xl font-bold text-white mb-8">Categories</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{categories.map((category) => {
					const categoryPosts = posts.filter((post) =>
						post.categories.includes(category),
					)
					return (
						<Link
							key={category}
							href={`/blog/category/${category.toLowerCase()}`}
							className="block p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-500 transition-colors"
						>
							<h2 className="text-xl font-semibold text-white mb-2">
								{category}
							</h2>
							<p className="text-gray-400">
								{categoryPosts.length} articles
							</p>
						</Link>
					)
				})}
			</div>
		</div>
	)
}
