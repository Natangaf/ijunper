import Link from "next/link";
import { Reveal } from "@/components/animated/reveal";
import { BlogCard, CaseCard, ServiceCard, TestimonialCard } from "@/components/marketing/cards";
import { LeadForm } from "@/components/marketing/forms";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  blogPosts,
  caseStudies,
  pains,
  services,
  solutionPillars,
  stats,
  testimonials,
} from "@/data/site-content";

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="container-shell pb-18 pt-10 sm:pb-24 sm:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative">
            <div className="editorial-panel cut-card rounded-[2rem] px-6 py-8 sm:px-10 sm:py-12">
              <div className="diagonal-lines absolute inset-0 opacity-30" />
              <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-accent/30 blur-3xl" />
              <div className="absolute bottom-6 left-8 h-24 w-24 rounded-full bg-primary/35 blur-3xl" />

              <div className="relative max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-white/70">
                  Marketing, branding e consultoria
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <span className="slanted-ribbon">Chegou o impulso</span>
                  <span className="starburst h-14 w-14 border-2 border-[#ff6b37] bg-transparent" />
                </div>
                <h1 className="mt-8 max-w-4xl font-display text-5xl font-bold leading-[0.94] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.4rem]">
                  O impulso que sua marca precisa
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
                  Posicionamento claro, marketing com direção e crescimento com
                  propósito para empresas que querem sair da estagnação e ganhar valor
                  percebido.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <LinkButton href="/lp" className="min-w-60">
                    Quero crescer minha empresa
                  </LinkButton>
                  <LinkButton href="/contato" variant="secondary" className="min-w-60">
                    Falar com especialista
                  </LinkButton>
                </div>

                <div className="mt-12 grid gap-4 md:grid-cols-3">
                  {stats.map((stat, index) => (
                    <Reveal
                      key={stat.label}
                      delay={0.08 * index}
                      className="rounded-[1.4rem] border border-white/12 bg-white/8 p-5 backdrop-blur-sm"
                    >
                      <p className="font-display text-3xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/70">{stat.label}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="grid gap-5">
              <article className="editorial-panel diagonal-lines cut-card-soft rounded-[2rem] p-6 sm:p-8">
                <div className="relative">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                    Saltamos com voce.
                  </p>
                  <h2 className="mt-6 max-w-md font-display text-4xl font-bold leading-[0.95] text-white sm:text-5xl">
                    Planejamos com visao.
                    <span className="text-[#ff8add]"> Executamos com alma.</span>
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-7 text-white/74">
                    Mistura de pensamento estrategico com energia criativa para marcas
                    que precisam parecer maiores, mais fortes e mais preparadas.
                  </p>
                </div>
              </article>

              <div className="grid gap-5 sm:grid-cols-[0.95fr_1.05fr]">
                <article className="editorial-panel rounded-[2rem] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                    Sua empresa esta travada?
                  </p>
                  <div className="mt-6 space-y-4">
                    {pains.map((pain, index) => (
                      <div
                        key={pain}
                        className="border-l-2 border-accent/70 pl-4 text-sm leading-7 text-white/76"
                      >
                        <span className="mr-2 text-accent">0{index + 1}</span>
                        {pain}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="cut-card-soft paper-rip-bottom rounded-[2rem] border border-white/12 bg-[#ff7bd5] px-6 py-8 text-[#160a2e] shadow-[0_30px_80px_rgba(255,79,203,0.22)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#351069]">
                    Proximo nivel
                  </p>
                  <h3 className="mt-4 font-display text-3xl font-bold leading-tight">
                    Estrategia com proposito para transformar percepcao em conversao.
                  </h3>
                  <p className="mt-5 text-base leading-7 text-[#2b0a5b]">
                    Nao vendemos apenas marketing. Vendemos clareza, posicionamento e
                    crescimento com intencao.
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-22">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Como a I Jumper resolve"
              title="Estrategia, execucao e crescimento sem cara de formula pronta"
              description="A leitura de negocio vem primeiro. A criacao entra para amplificar o posicionamento. E a execucao acontece com foco em resultado."
            />
          </Reveal>
          <div className="grid gap-5">
            {solutionPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={0.08 * index}>
                <article className="editorial-panel rounded-[1.8rem] p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-3xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <span className="slanted-ribbon text-xs">0{index + 1}</span>
                  </div>
                  <p className="mt-5 max-w-2xl text-sm leading-8 text-white/76">
                    {pillar.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-22">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Servicos"
              title="Frentes pensadas para posicionar, vender e escalar"
              description="Uma arquitetura de servicos para momentos diferentes do crescimento."
            />
            <LinkButton href="/servicos" variant="secondary">
              Ver todos os servicos
            </LinkButton>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ServiceCard service={services[0]} />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.08}>
            <ServiceCard service={services[1]} />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.12}>
            <ServiceCard service={services[2]} />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={0.16}>
            <ServiceCard service={services[3]} />
          </Reveal>
        </div>
      </section>

      <section className="container-shell py-16 sm:py-22">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <article className="editorial-panel cut-card rounded-[2rem] p-7 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                Prova social
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-none text-white sm:text-5xl">
                Transformamos curtidas em clientes.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
                Quando a mensagem fica mais forte, a marca para de disputar atencao e
                comeca a disputar preferencia.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="cut-card-soft rounded-[2rem] bg-[#120814] p-7 text-white shadow-[0_28px_80px_rgba(0,0,0,0.22)]">
              <p className="text-sm uppercase tracking-[0.24em] text-[#ff8add]">
                Resultado percebido
              </p>
              <p className="mt-6 font-display text-5xl font-bold leading-none text-[#9a70ff]">
                + valor
              </p>
              <p className="mt-3 text-lg text-white/88">+ clareza</p>
              <p className="mt-2 text-lg text-white/88">+ conversao</p>
              <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
                O efeito mais forte nao e o volume de posts. E a mudanca de percepcao
                sobre a empresa.
              </p>
            </article>
          </Reveal>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={0.08 * index}>
              <TestimonialCard {...testimonial} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-16 sm:py-22">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Cases"
              title="Antes, estrategia aplicada e resultado"
              description="Estudos de caso para mostrar a evolucao de percepcao, posicionamento e performance."
            />
            <Link
              href="/cases"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-white hover:text-accent"
            >
              Ver mais resultados
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((item, index) => (
            <Reveal key={item.slug} delay={0.08 * index}>
              <CaseCard item={item} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell py-16 sm:py-22">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Blog"
              title="Conteudo com visao de negocio"
              description="Artigos para lideres que precisam tomar decisoes melhores em marketing, branding e crescimento."
            />
            <LinkButton href="/blog" variant="secondary">
              Ir para o blog
            </LinkButton>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {blogPosts.slice(0, 4).map((post, index) => (
            <Reveal key={post.slug} delay={0.08 * index}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell pt-16 sm:pt-22">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <article className="editorial-panel paper-rip-top cut-card rounded-[2rem] px-7 py-8 sm:px-10 sm:py-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
                CTA
              </p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-bold leading-[0.95] text-white sm:text-5xl">
                Seu proximo salto comeca agora.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-white/78">
                Se a sua empresa precisa crescer com mais direcao, autoridade e
                intencao, a proxima etapa e conversar com quem enxerga negocio e nao
                apenas post.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <LinkButton href="/lp">Quero dar meu proximo salto</LinkButton>
                <LinkButton href="/contato" variant="secondary">
                  Falar com especialista
                </LinkButton>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12}>
            <LeadForm
              title="Receba uma analise inicial"
              description="Preencha seus dados para iniciar uma conversa consultiva e entender por onde a sua marca pode crescer com mais forca."
              buttonLabel="Quero dar meu proximo salto"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
