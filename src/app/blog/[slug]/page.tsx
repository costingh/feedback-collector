import { getAllSlugs, getPostBySlug, getAllPosts } from '../_lib/getPosts'
import { notFound } from 'next/navigation'
import BlogPost from '../_components/BlogPost'

export async function generateStaticParams() {
	const slugs = getAllSlugs()
	return slugs.map((slug: string) => ({ slug }))
}

export default async function BlogPostPage({
	params,
}: {
	params: { slug: string }
}) {
	const post = await getPostBySlug(params.slug)
	const allPosts = await getAllPosts()

	if (!post) return notFound()

	return (
		<main className="relative px-6 py-24 sm:py-32 lg:px-8">
			<BlogPost post={post} allPosts={allPosts} />
		</main>
	)
}
