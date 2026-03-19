import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/animated/reveal";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/site-content";
import { getServiceBySlug } from "@/lib/content";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.name,
    description: service.short,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="container-shell py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Serviço"
          title={service.name}
          description={service.description}
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <article className="glass-panel rounded-[2rem] p-8">
            <h2 className="font-display text-3xl font-bold text-white">
              Problema que resolve
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted">{service.problem}</p>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <article className="glass-panel rounded-[2rem] p-8">
            <h2 className="font-display text-3xl font-bold text-white">Como funciona</h2>
            <div className="mt-6 space-y-4">
              {service.howItWorks.map((step, index) => (
                <div
                  key={step}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="text-xs uppercase tracking-[0.24em] text-accent">
                    Etapa {index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-muted">{step}</p>
                </div>
              ))}
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal className="mt-12">
        <article className="glass-panel rounded-[2rem] p-8">
          <h2 className="font-display text-3xl font-bold text-white">Benefícios</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-[1.5rem] border border-primary/20 bg-primary/10 p-5 text-sm text-white"
              >
                {benefit}
              </div>
            ))}
          </div>
        </article>
      </Reveal>

      <Reveal className="mt-12">
        <article className="glass-panel rounded-[2rem] p-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Hora de transformar estratégia em movimento
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-muted">
            {service.short}
          </p>
          <div className="mt-8">
            <LinkButton href="/contato">{service.cta}</LinkButton>
          </div>
        </article>
      </Reveal>
    </div>
  );
}
