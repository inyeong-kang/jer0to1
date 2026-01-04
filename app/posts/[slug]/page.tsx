import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllPosts } from "@/data/posts";
import { BlogPost } from "@/types/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        href="/"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
      >
        ← 목록으로 돌아가기
      </Link>

      <header className="mb-8">
        <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("ko-KR")}</time>
          <span>•</span>
          <span>{post.readTime}분 읽기</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{post.title}</h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <div className="whitespace-pre-wrap text-gray-700 dark:text-gray-300 leading-relaxed">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("# ")) {
              return (
                <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">
                  {paragraph.substring(2)}
                </h1>
              );
            }
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-gray-900 dark:text-white">
                  {paragraph.substring(3)}
                </h2>
              );
            }
            if (paragraph.startsWith("### ")) {
              return (
                <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-gray-900 dark:text-white">
                  {paragraph.substring(4)}
                </h3>
              );
            }
            if (paragraph.startsWith("- ") || paragraph.startsWith("* ")) {
              return (
                <li key={index} className="ml-6 list-disc mb-2">
                  {paragraph.substring(2)}
                </li>
              );
            }
            if (paragraph.trim() === "") {
              return <br key={index} />;
            }
            return (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>
    </article>
  );
}

