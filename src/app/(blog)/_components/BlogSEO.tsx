import Head from "next/head";

export default function BlogSEO({ post }: any) {
  return (
    <Head>
      <title>{post.title} | Your SaaS Name</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.image} />
      <meta property="og:type" content="article" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
