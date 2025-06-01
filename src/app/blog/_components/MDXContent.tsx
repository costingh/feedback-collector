'use client'

import { MDXRemote } from 'next-mdx-remote'

interface MDXContentProps {
	source: any
}

export default function MDXContent({ source }: MDXContentProps) {
	return (
		<section
			className="
        prose prose-invert prose-lg max-w-none text-white
        prose-headings:font-semibold prose-headings:text-white
        prose-h2:mt-8 prose-h2:border-b-0
        prose-p:leading-relaxed prose-p:text-gray-300
        prose-ul:pl-6 prose-ul:marker:text-blue-400
        prose-a:text-blue-400 hover:prose-a:text-blue-300 no-underline prose-a:underline-offset-2
        prose-img:rounded-lg shadow-md
        prose-strong:text-white
        prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-lg
        prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
        prose-pre:rounded-lg prose-pre:shadow-lg
        prose-code:before:content-none prose-code:after:content-none
        prose-pre:before:content-none prose-pre:after:content-none"
			itemProp="articleBody"
		>
			<MDXRemote {...source} />
		</section>
	)
}
