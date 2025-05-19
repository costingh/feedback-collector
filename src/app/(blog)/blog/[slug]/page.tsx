import { getAllSlugs, getPostBySlug } from "@/app/(blog)/_lib/getPosts";
import BlogPost from "@/app/(blog)/_components/BlogPost";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const slugs = getAllSlugs();
	return slugs.map((slug: string) => ({ slug }));
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
	const post = await getPostBySlug(params.slug);

	if (!post) return notFound();

	return (
		<main className="relative px-6 py-24 sm:py-32 lg:px-8 bg-[#050520]">
			<BlogPost post={post} />
		</main>
	);
}
