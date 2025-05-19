import { getAllPosts } from "@/app/(blog)/_lib/getPosts";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/(website)/_components/navbar";
import BlogAuthor from "../_components/BlogAuthor";

export default async function BlogPage() {
	const posts = await getAllPosts();

	return (
		<>
			<Navbar />
			<main className="relative px-6 py-24 sm:py-32 lg:px-8 bg-[#050520] min-h-screen">
				<div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 opacity-20 blur-3xl z-0" />
				<div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-violet-500 to-sky-400 opacity-20 blur-3xl z-0" />

				<div className="relative mx-auto max-w-4xl text-center z-10">
					<h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
						Our Blog
					</h1>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Discover strategies, insights, and stories from the Feedbackz team — to help you grow trust and conversions through testimonials.
					</p>
				</div>

				<div className="relative mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 z-10">
					{posts.map((post: any) => (
						<Link
							href={`/blog/${post.slug}`}
							key={post.slug}
							className="group rounded-xl border border-white/[0.05] bg-white/[0.02] hover:bg-white/[0.04] transition p-5 backdrop-blur-md shadow-md"
						>
							{post.image && (
								<div className="relative h-48 w-full overflow-hidden rounded-md mb-4">
									<Image
										src={post.image}
										alt={post.title}
										fill
										className="object-cover transition-transform group-hover:scale-105"
									/>
								</div>
							)}

							<div className="flex items-center justify-between mb-2">
								<div className="flex items-center">
									{post?.categories?.map((category: any) => (
										<span key={category} className="text-sm text-gray-400 bg-white/[0.2] px-2 py-1 rounded-full">
											{category}
										</span>
									))}
								</div>
								<span className="text-sm text-gray-400">{new Date(post.date).toLocaleDateString()}</span>
							</div>
							<h2 className="text-[17px] font-semibold text-white group-hover:text-blue-300 transition">
								{post.title}
							</h2>
							<p className="mt-2 text-sm text-gray-400">{post.excerpt}</p>
							<p className="mt-4 text-sm text-blue-400">Read more →</p>
							<div className="mt-4">
								<BlogAuthor author={post.author} />
							</div>
						</Link>
					))}
				</div>
			</main>
		</>
	);
}
