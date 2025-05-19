import Image from "next/image";
import BlogAuthor from "./BlogAuthor";
import BlogSEO from "./BlogSEO";

export default function BlogPost({ post }: any) {
  return (
    <article className="px-5 py-16 max-w-4xl mx-auto">
      <BlogSEO post={post} />

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
          {post.title}
        </h1>
        <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-400 text-sm">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <BlogAuthor author={post.author} />
        </div>
      </header>

      {post.image && (
        <div className="mb-10">
          <Image
            src={post.image}
            alt={post.title}
            width={1000}
            height={600}
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      )}

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
          prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded-lg"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

    </article>

  );
}
