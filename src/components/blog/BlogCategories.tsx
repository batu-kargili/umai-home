"use client";

import { BLOG_CATEGORIES, type BlogCategory } from "@/lib/blog-data";
import { Container } from "@/components/ui/Container";

interface BlogCategoriesProps {
  active: BlogCategory;
  onChange: (cat: BlogCategory) => void;
}

export function BlogCategories({ active, onChange }: BlogCategoriesProps) {
  return (
    <div className="border-b border-light-gray bg-white sticky top-[68px] z-40">
      <Container>
        <div className="flex items-center gap-1 overflow-x-auto py-3">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-150 ${
                active === cat
                  ? "bg-ocean text-white"
                  : "text-mid-gray hover:text-dark-text hover:bg-off-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </Container>
    </div>
  );
}
