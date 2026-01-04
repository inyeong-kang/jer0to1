import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:shadow-lg">
      <Link href={`/posts/${post.slug}`}>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("ko-KR")}</time>
            <span>•</span>
            <span>{post.readTime}분 읽기</span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">{post.excerpt}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

