import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/lib/blog-data";

const categoryColors: Record<
  string,
  "cyan" | "ocean" | "teal" | "gray"
> = {
  Engineering: "ocean",
  Security:    "cyan",
  Compliance:  "teal",
  Product:     "gray",
  Changelog:   "gray",
};

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const badgeColor = categoryColors[post.category] ?? "gray";

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group col-span-full bg-midnight rounded-[12px] p-8 lg:p-10 border border-white/10 hover:border-island-cyan/30 transition-all duration-200 grid lg:grid-cols-2 gap-8 items-center"
      >
        <div>
          <Badge color={badgeColor}>{post.category}</Badge>
          <h2 className="text-[24px] lg:text-[28px] font-bold text-white mt-4 mb-3 group-hover:text-island-cyan transition-colors leading-tight">
            {post.title}
          </h2>
          <p className="text-white/60 leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-denim flex items-center justify-center text-white text-xs font-bold">
              {post.author.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                {post.author.name}
              </p>
              <p className="text-xs text-white/50">
                {post.publishedAt} · {post.readingTime}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex h-48 rounded-[8px] bg-denim/50 items-center justify-center border border-white/5">
          <span className="text-white/20 text-sm">Featured image</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white border border-light-gray rounded-[12px] p-6 flex flex-col hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
    >
      <Badge color={badgeColor}>{post.category}</Badge>
      <h2 className="text-[17px] font-semibold text-dark-text mt-4 mb-2 group-hover:text-ocean transition-colors leading-snug flex-1">
        {post.title}
      </h2>
      <p className="text-sm text-mid-gray leading-relaxed mb-5 line-clamp-3">
        {post.excerpt}
      </p>
      <div className="flex items-center gap-2.5 pt-4 border-t border-light-gray mt-auto">
        <div className="h-7 w-7 rounded-full bg-denim/20 flex items-center justify-center text-denim text-[10px] font-bold">
          {post.author.avatar}
        </div>
        <div>
          <p className="text-xs font-semibold text-dark-text">
            {post.author.name}
          </p>
          <p className="text-[11px] text-mid-gray">
            {post.publishedAt} · {post.readingTime}
          </p>
        </div>
      </div>
    </Link>
  );
}
