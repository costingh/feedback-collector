import BlogAuthor from './BlogAuthor'
import BlogSEO from './BlogSEO'
import StructuredData from '@/components/global/StructuredData'
import OptimizedImage from '@/components/global/OptimizedImage'
import TableOfContents from './TableOfContents'
import SocialShare from './SocialShare'
import RelatedPosts from './RelatedPosts'
import Breadcrumb from './Breadcrumb'
import NewsletterSignup from './NewsletterSignup'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import MDXContent from './MDXContent'

interface Post {
	slug: string
	title: string
	excerpt: string
	content: string
	image: string
	date: string
	author: {
		name: string
		avatar: string
	}
	categories: string[]
}

interface BlogPostProps {
	post: Post
	allPosts: Post[]
}

export default async function BlogPost({ post, allPosts }: BlogPostProps) {
	// Calculate reading time (assuming average reading speed of 200 words per minute)
	const wordCount = post.content.split(/\s+/).length
	const readingTime = Math.ceil(wordCount / 200)

	const breadcrumbItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Blog', href: '/blog' },
		{ label: post.title, href: `/blog/${post.slug}` },
	]

	// Serialize the MDX content
	const mdxSource = await serialize(post.content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm],
			rehypePlugins: [rehypePrism],
		},
		parseFrontmatter: true,
	})

	return (
		<article
			className="px-5 py-16 max-w-4xl mx-auto"
			itemScope
			itemType="https://schema.org/BlogPosting"
		>
			<BlogSEO post={post} />
			<StructuredData
				type="BlogPosting"
				data={{
					headline: post.title,
					description: post.excerpt,
					image: post.image,
					datePublished: post.date,
					dateModified: post.date,
					author: {
						'@type': 'Person',
						name: post.author?.name,
						image: post.author?.avatar,
					},
					publisher: {
						'@type': 'Organization',
						name: 'Feedbackz',
						logo: {
							'@type': 'ImageObject',
							url: 'https://feedbackz.co/images/app-preview.png',
						},
					},
				}}
			/>

			<Breadcrumb items={breadcrumbItems} />

			<div className="flex gap-8">
				<div className="flex-1">
					<header className="mb-8">
						<h1
							className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
							itemProp="headline"
						>
							{post.title}
						</h1>
						<div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-400 text-sm">
							<div className="flex items-center gap-4">
								<time
									dateTime={post.date}
									itemProp="datePublished"
								>
									{new Date(post.date).toLocaleDateString()}
								</time>
								<span>•</span>
								<span>{readingTime} min read</span>
							</div>
							<div
								itemProp="author"
								itemScope
								itemType="https://schema.org/Person"
							>
								<BlogAuthor author={post.author} />
							</div>
						</div>
					</header>

					{post.image && (
						<div className="mb-10">
							<OptimizedImage
								src={post.image}
								alt={`Featured image for ${post.title}`}
								width={1000}
								height={600}
								className="w-full h-auto rounded-xl shadow-lg object-cover"
								itemProp="image"
								priority
							/>
						</div>
					)}

					<MDXContent source={mdxSource} />

					{post.categories && post.categories.length > 0 && (
						<div className="mt-8 flex flex-wrap gap-2">
							{post.categories.map((category: string) => (
								<span
									key={category}
									className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
									itemProp="keywords"
								>
									{category}
								</span>
							))}
						</div>
					)}

					<SocialShare
						url={`https://feedbackz.co/blog/${post.slug}`}
						title={post.title}
					/>

					<div className="mt-16">
						<NewsletterSignup />
					</div>

					<RelatedPosts currentPost={post} posts={allPosts} />
				</div>

				<div className="hidden lg:block w-64">
					<TableOfContents content={post.content} />
				</div>
			</div>
		</article>
	)
}
