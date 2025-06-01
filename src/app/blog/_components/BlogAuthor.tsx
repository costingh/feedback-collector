import Image from 'next/image'
import Link from 'next/link'

interface Author {
	name: string
	avatar: string
}

interface BlogAuthorProps {
	author: Author
}

export default function BlogAuthor({ author }: BlogAuthorProps) {
	return (
		<Link
			href={`/blog/author/${author.name.toLowerCase().replace(/\s+/g, '-')}`}
			className="flex items-center gap-2 hover:text-white transition-colors"
		>
			<div className="relative w-8 h-8 rounded-full overflow-hidden">
				<Image
					src={author.avatar}
					alt={author.name}
					fill
					className="object-cover"
				/>
			</div>
			<span itemProp="name">{author.name}</span>
		</Link>
	)
}
