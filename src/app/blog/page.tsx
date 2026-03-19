import type { Metadata } from "next";
import { Reveal } from "@/components/animated/reveal";
import { BlogCard } from "@/components/marketing/cards";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conteúdos sobre estratégia, branding, marketing e empreendedorismo para empresas que querem crescer com clareza.",
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <div className="container-shell py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Blog"
          title="Conteúdo estratégico para marcas em movimento"
          description="Artigos pensados para fortalecer visão de negócio, posicionamento e tomada de decisão."
          align="center"
        />
      </Reveal>

      <Reveal className="mt-10">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-white/75"
            >
              {category}
            </span>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {blogPosts.map((post, index) => (
          <Reveal key={post.slug} delay={0.08 * index}>
            <BlogCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
