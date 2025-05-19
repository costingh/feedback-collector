import Link from "next/link";
import Image from "next/image";
import BlogAuthor from "./BlogAuthor";

export default function BlogCard({ title, excerpt, slug, image, date, author }: any) {
	return (
		<article className="rounded-xl shadow p-4 hover:shadow-lg transition">
			<Link href={`/blog/${slug}`}>
				<Image src={image} alt={title} width={400} height={200} className="rounded-md" />
				<div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-400 text-sm">
					<span>{new Date(date).toLocaleDateString()}</span>
					<BlogAuthor author={author} />
				</div>
				<h2 className="text-xl font-bold mt-3">{title}</h2>
				<p className="text-sm text-gray-500">{new Date(date).toLocaleDateString()}</p>
				<p className="mt-2 text-gray-700">{excerpt}</p>
			</Link>
		</article>
	);
}
