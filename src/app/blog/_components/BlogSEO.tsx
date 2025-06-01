import Head from 'next/head'

interface Post {
	slug: string
	title: string
	excerpt: string
	image: string
	date: string
	author: {
		name: string
		avatar: string
	}
}

interface BlogSEOProps {
	post: Post
}

export default function BlogSEO({ post }: BlogSEOProps) {
	const canonicalUrl = `https://feedbackz.co/blog/${post.slug}`
	const imageUrl = post.image.startsWith('http')
		? post.image
		: `https://feedbackz.co${post.image}`

	return (
		<Head>
			<title>{`${post.title} | Feedbackz Blog`}</title>
			<meta name="description" content={post.excerpt} />
			<link rel="canonical" href={canonicalUrl} />

			{/* Open Graph */}
			<meta property="og:title" content={post.title} />
			<meta property="og:description" content={post.excerpt} />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="article" />
			<meta property="article:published_time" content={post.date} />
			<meta property="article:author" content={post.author.name} />

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={post.title} />
			<meta name="twitter:description" content={post.excerpt} />
			<meta name="twitter:image" content={imageUrl} />

			{/* Additional Meta Tags */}
			<meta name="author" content={post.author.name} />
			<meta name="robots" content="index, follow" />
		</Head>
	)
}
