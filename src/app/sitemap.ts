import { MetadataRoute } from 'next'
import { getAllPosts } from './blog/_lib/getPosts'

interface BlogPost {
	slug: string
	date: string
	title: string
	excerpt: string
	content: string
	image?: string
	author?: {
		name: string
		avatar: string
	}
	categories?: string[]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const baseUrl = 'https://feedbackz.co'

	// Get all blog posts
	const posts = (await getAllPosts()) as BlogPost[]
	const blogUrls = posts.map((post) => ({
		url: `${baseUrl}/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: 'weekly' as const,
		priority: 0.8,
	}))

	// Static pages
	const staticPages = [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 1.0,
		},
		{
			url: `${baseUrl}/feedbackz-pricing`,
			lastModified: new Date(),
			changeFrequency: 'weekly' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'daily' as const,
			priority: 0.9,
		},
		{
			url: `${baseUrl}/tos`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.5,
		},
		{
			url: `${baseUrl}/privacy-policy`,
			lastModified: new Date(),
			changeFrequency: 'monthly' as const,
			priority: 0.5,
		},
	]

	return [...staticPages, ...blogUrls]
}
