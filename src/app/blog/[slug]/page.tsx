import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/site-content";
import { getPostBySlug } from "@/lib/content";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container-shell py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
          {post.category}
        </p>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-5 flex items-center gap-3 text-sm text-white/55">
          <span>{post.readTime}</span>
          <span className="h-1 w-1 rounded-full bg-white/35" />
          <time dateTime={post.publishedAt}>
            {new Intl.DateTimeFormat("pt-BR", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            }).format(new Date(post.publishedAt))}
          </time>
        </div>
        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/4 p-8">
          <div className="space-y-6 text-base leading-8 text-muted">
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
