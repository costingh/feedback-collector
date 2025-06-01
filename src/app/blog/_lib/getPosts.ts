import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface Post {
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

export function getAllSlugs(): string[] {
	const fileNames = fs.readdirSync(postsDirectory)
	return fileNames.map((fileName) => fileName.replace(/\.mdx$/, ''))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const fullPath = path.join(postsDirectory, `${slug}.mdx`)
		const fileContents = fs.readFileSync(fullPath, 'utf8')
		const { data, content } = matter(fileContents)

		return {
			slug,
			title: data.title,
			excerpt: data.excerpt,
			content,
			image: data.image,
			date: data.date,
			author: {
				name: data.author.name,
				avatar: data.author.avatar,
			},
			categories: data.categories || [],
		}
	} catch (error) {
		return null
	}
}

export async function getAllPosts(): Promise<Post[]> {
	const slugs = getAllSlugs()
	const posts = await Promise.all(
		slugs.map(async (slug) => {
			const post = await getPostBySlug(slug)
			if (!post) throw new Error(`Post not found: ${slug}`)
			return post
		}),
	)

	return posts.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	)
}
