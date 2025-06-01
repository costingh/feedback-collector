import { NextResponse } from 'next/server'
import { getAllPosts } from '../blog/_lib/getPosts'

interface Author {
	name: string
	avatar: string
}

interface Post {
	slug: string
	title: string
	excerpt: string
	content: string
	date: string
	categories: string[]
	author?: Author
}

export async function GET() {
	const posts = (await getAllPosts()) as Post[]

	const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Feedbackz Blog</title>
    <link>https://feedbackz.co</link>
    <description>Latest articles and insights from Feedbackz</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://feedbackz.co/feed.xml" rel="self" type="application/rss+xml" />
    ${posts
		.map(
			(post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://feedbackz.co/blog/${post.slug}</link>
      <guid>https://feedbackz.co/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      ${post.categories.map((category: string) => `<category><![CDATA[${category}]]></category>`).join('\n      ')}
      <dc:creator><![CDATA[${post.author?.name || 'Feedbackz Team'}]]></dc:creator>
    </item>
    `,
		)
		.join('\n    ')}
  </channel>
</rss>`

	return new NextResponse(feed, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600, s-maxage=3600',
		},
	})
}
