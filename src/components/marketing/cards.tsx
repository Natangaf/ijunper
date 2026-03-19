import Link from "next/link";
import type { BlogPost, CaseStudy, Service } from "@/data/site-content";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="editorial-panel rounded-[2rem] p-7 sm:p-8">
      <div className="relative z-10">
        <span className="slanted-ribbon text-xs">{service.name}</span>
        <p className="mt-7 max-w-xl font-display text-3xl font-bold leading-[0.98] text-white">
          {service.short}
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-8 text-white/76">
          {service.description}
        </p>
        <Link
          href={`/servicos/${service.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:text-accent"
        >
          Ver detalhes
          <span aria-hidden>+</span>
        </Link>
      </div>
    </article>
  );
}

export function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 shadow-[0_20px_60px_rgba(32,11,70,0.16)]">
      <div className="mb-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
      <p className="text-lg leading-8 text-white/92">&ldquo;{quote}&rdquo;</p>
      <div className="mt-7 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-white/58">{role}</p>
      </div>
    </article>
  );
}

export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <article className="editorial-panel rounded-[2rem] p-7">
      <div className="relative z-10">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-accent">
              {item.segment}
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold text-white">
              {item.client}
            </h3>
          </div>
          <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
            Case
          </span>
        </div>
        <div className="mt-6 space-y-4 text-sm leading-7 text-white/74">
          <p>
            <span className="font-semibold text-white">Antes:</span> {item.before}
          </p>
          <p>
            <span className="font-semibold text-white">Estrategia:</span> {item.strategy}
          </p>
          <p>
            <span className="font-semibold text-white">Resultado:</span> {item.result}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {item.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/14 bg-white/8 px-3 py-1 text-xs font-medium text-white"
            >
              {metric}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-7 shadow-[0_18px_50px_rgba(32,11,70,0.14)]">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-accent">
        <span>{post.category}</span>
        <span className="h-1 w-1 rounded-full bg-white/40" />
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight text-white">
        {post.title}
      </h3>
      <p className="mt-4 text-sm leading-8 text-white/70">{post.excerpt}</p>
      <Link
        href={`/blog/${post.slug}`}
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white hover:text-accent"
      >
        Ler artigo
        <span aria-hidden>+</span>
      </Link>
    </article>
  );
}
