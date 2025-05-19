import BlogCard from "./BlogCard";

export default function BlogList({ posts }: any) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {posts.map((post: any) => (
        <BlogCard key={post.slug} {...post} />
      ))}
    </div>
  );
}
