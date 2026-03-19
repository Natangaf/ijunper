import Image from "next/image";
import { Button } from "@/components/fintech/button";
import { ChartCard } from "@/components/fintech/chart-card";
import  logoJumbo  from "@/assets/icon-ijumper-jumbo.png";

const trustLogos = [
  "Boltshift",
  "Lightbox",
  "FeatherDev",
  "Spherule",
  "GlobalBank",
  "Nietzsche",
];

const metrics = [
  {
    value: "R$1B+",
    title: "em potencial movimentado",
    text: "Estruturamos marcas, posicionamentos e operacoes com foco em escala e valor percebido.",
  },
  {
    value: "95%",
    title: "de retencao consultiva",
    text: "A relacao continua quando a estrategia gera clareza e a execucao passa a ter direcao real.",
  },
  {
    value: "24/7",
    title: "visao de crescimento",
    text: "Acompanhamento estrategico para empresas que precisam responder rapido ao mercado.",
  },
];

const audiences = [
  { index: "01", label: "Pequenas empresas" },
  { index: "02", label: "Negocios em expansao" },
  { index: "03", label: "Marcas em reposicionamento" },
];

const services = [
  {
    title: "Planejamento estrategico",
    text: "Definimos direcao, posicionamento, mensagem central e prioridades para sustentar crescimento.",
    accent: "cube",
  },
  {
    title: "Consultoria de marketing",
    text: "Transformamos comunicacao solta em processo, narrativa e acao com objetivo comercial.",
    accent: "ring",
  },
  {
    title: "Branding e autoridade",
    text: "Ajustamos percepcao de valor, identidade verbal e presenca digital para diferenciar a marca.",
    accent: "wave",
  },
  {
    title: "Estrutura para lancamentos",
    text: "Criamos campanhas, aquecimento, paginas e esteiras para lancar com clareza e conversao.",
    accent: "stack",
  },
];

const team = [
  {
    name: "Marina Souza",
    role: "Estrategia e Posicionamento",
  },
  {
    name: "Thiago Alves",
    role: "Consultoria de Crescimento",
  },
  {
    name: "Camila Rocha",
    role: "Branding e Narrativa",
  },
  {
    name: "Lucas Mendes",
    role: "Marketing e Performance",
  },
  {
    name: "Beatriz Nunes",
    role: "Conteudo e Comunicacao",
  },
  {
    name: "Rafael Lima",
    role: "Projetos e Operacao",
  },
];

function AccentShape({ accent }: { accent: string }) {
  if (accent === "cube") {
    return (
      <div className="relative h-28 w-28">
        <div className="absolute inset-0 rotate-12 rounded-[1.75rem] bg-[linear-gradient(135deg,#c7ff7d_0%,#9a70ff_58%,#6c3bff_100%)] opacity-90" />
        <div className="absolute left-4 top-4 h-12 w-12 rounded-2xl bg-white/18" />
      </div>
    );
  }

  if (accent === "ring") {
    return (
      <div className="h-28 w-28 rounded-full border-[18px] border-[#c7ff7d] border-r-[#8df0a4] border-b-[#9a70ff]" />
    );
  }

  if (accent === "wave") {
    return (
      <div className="flex items-end gap-2">
        <div className="h-16 w-6 rounded-t-full bg-[#d8ff9d]" />
        <div className="h-24 w-6 rounded-t-full bg-[#baff76]" />
        <div className="h-12 w-6 rounded-t-full bg-[#9a70ff]" />
        <div className="h-20 w-6 rounded-t-full bg-[#ff4fcb]" />
      </div>
    );
  }

  return (
    <div className="grid h-28 w-28 grid-cols-2 gap-3">
      <div className="rounded-2xl bg-[#c7ff7d]" />
      <div className="rounded-2xl bg-[#9a70ff]" />
      <div className="rounded-2xl bg-[#ff4fcb]" />
      <div className="rounded-2xl bg-white/14" />
    </div>
  );
}

function TeamCard({ name, role }: { name: string; role: string }) {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-lg shadow-black/10">
      <div className="h-72 rounded-[1.6rem] bg-[radial-gradient(circle_at_50%_20%,rgba(199,255,125,0.24),transparent_28%),linear-gradient(180deg,#2c115a_0%,#5a24b5_48%,#8c5cff_100%)]" />
      <div className="px-2 pb-2 pt-5">
        <p className="text-2xl font-semibold text-white">{name}</p>
        <p className="mt-1 text-sm text-white/62">{role}</p>
        <div className="mt-4 flex gap-3 text-white/72">
          <span>in</span>
          <span>x</span>
          <span>@</span>
        </div>
      </div>
    </article>
  );
}

export default function HomePage() {
  return (
    <div className="pb-24">
      <section className="container-shell pt-10 sm:pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/72 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#c7ff7d]" />
              Crescimento inteligente, estrategia clara
            </div>

            <h1 className="mt-8 font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.3rem]">
              A melhor estrategica vem sem amarras
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Estrutura consultiva moderna para marcas que precisam decidir
              melhor, comunicar com mais clareza e crescer com consistencia.
              Visual de alta conversao, conteudo em portugues e identidade
              alinhada a I Jumper.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/lp" className="min-w-44">
                Quero comecar
              </Button>
              <Button href="/servicos" variant="secondary" className="min-w-44">
                Ver servicos
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
              <div className="flex items-center gap-1 text-[#d8ff9d]">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <div className="text-sm text-white/72">
                Trustpilot <span className="font-semibold text-white">4,8</span>{" "}
                com mais de 2.400 avaliacoes
              </div>
            </div>

            <p className="mt-4 text-sm text-white/42">
              Dados do dashboard e indicadores abaixo sao mockados para
              composicao visual.
            </p>
          </div>

          <div className="relative pb-20 sm:pb-12">
            <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-[#c7ff7d]/10 blur-3xl" />
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#9a70ff]/20 blur-3xl" />
            <ChartCard />
          </div>
        </div>
      </section>

      <section className="container-shell pt-24 sm:pt-28">
        <div className="flex items-center gap-5">
          <div className="h-px flex-1 bg-white/10" />
          <Image
            src={logoJumbo}
            alt="I Jumper Marketing & Consultoria"
            width={110}
            height={28}
            className="h-7 w-auto object-contain"
          />
          <div className="h-px flex-1 bg-white/10" />
        </div>
      </section>

      <section className="container-shell pt-14 sm:pt-16">
        <div className="grid gap-8 border-y border-white/8 py-10 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <article
              key={metric.value}
              className={`${index < 2 ? "md:border-r md:border-white/10 md:pr-8" : ""}`}
            >
              <div className="flex items-center gap-3">
                <p className="font-display text-6xl font-bold tracking-[-0.05em] text-[#d8ff7d] sm:text-7xl">
                  {metric.value}
                </p>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-sm text-[#d8ff7d]">
                  +
                </span>
              </div>
              <p className="mt-4 text-lg font-medium text-white">
                {metric.title}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-7 text-white/62">
                {metric.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pt-20 sm:pt-24">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Quem atendemos
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {audiences.map((audience) => (
                <article
                  key={audience.label}
                  className="flex min-h-[28rem] flex-col justify-between rounded-[1.7rem] bg-[linear-gradient(180deg,#dfff7f_0%,#c7ff7d_100%)] px-4 py-5 text-[#1a1132] shadow-lg"
                >
                  <span className="text-4xl font-medium tracking-[-0.04em]">
                    {audience.index}
                  </span>
                  <div className="flex flex-col items-center gap-5">
                    <div className="h-20 w-px bg-[#1a1132]/50" />
                    <p className="[writing-mode:vertical-rl] rotate-180 text-[1.05rem] font-medium">
                      {audience.label}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-2">
            <p className="max-w-2xl text-base leading-8 text-white/68">
              A I Jumper atua com negocios que precisam crescer com direcao.
              Isso inclui empresas que querem sair da estagnacao, marcas que
              precisam reposicionar a propria imagem e operacoes que buscam mais
              clareza na forma de vender, comunicar e escalar.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/68">
              Nosso processo consultivo prioriza leitura de negocio, mensagem
              forte, estrutura comercial e comunicacao com intencao. O objetivo
              nao e apenas parecer melhor, mas se tornar mais competitivo e mais
              desejado pelo mercado.
            </p>

            <div className="mt-10">
              <Button href="/contato" variant="login">
                Agendar uma consultoria
              </Button>
            </div>

            <div className="mt-12 rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4 shadow-lg">
              <div className="h-[26rem] rounded-[1.5rem] bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.28),transparent_14%),linear-gradient(135deg,#f3d4ff_0%,#b38eff_35%,#6c3bff_100%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-shell pt-20 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Servicos estrategicos para sustentar o seu proximo salto
          </h2>
          <p className="mt-5 text-base leading-8 text-white/66">
            Uma estrutura de servicos inspirada na clareza visual do SaaS, mas
            aplicada ao posicionamento, marketing e consultoria da I Jumper.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 shadow-lg"
            >
              <div className="relative z-10 max-w-sm">
                <h3 className="font-display text-3xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-white/64">
                  {service.text}
                </p>
                <button className="mt-8 inline-flex items-center gap-2 border-b border-[#d8ff7d] pb-1 text-sm font-semibold text-[#d8ff7d]">
                  Saiba mais
                  <span>+</span>
                </button>
              </div>
              <div className="absolute bottom-6 right-6 opacity-95">
                <AccentShape accent={service.accent} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-shell pt-20 sm:pt-24">
        <div className="text-center text-sm text-white/48">
          Mais de 4.000 empresas ja crescendo com mais estrutura
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-lg font-semibold text-white/46">
          {trustLogos.concat(trustLogos).map((logo, index) => (
            <span key={`${logo}-${index}`}>{logo}</span>
          ))}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
              Impulsionamos a jornada da marca com estrutura, visao e
              consistencia
            </h2>
            <p className="mt-6 text-base leading-8 text-white/66">
              Entramos para organizar o que esta disperso. Isso significa
              transformar narrativa, posicionamento, marketing e consultoria em
              um sistema mais claro de crescimento.
            </p>
            <div className="mt-8">
              <Button href="/lp" variant="login">
                Quero comecar
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.42fr_0.58fr]">
            <div className="grid gap-4">
              <article className="rounded-[1.7rem] bg-[#b7a7ff] p-5 text-[#211143] shadow-lg">
                <p className="text-sm">Planejamento</p>
                <p className="mt-1 text-2xl font-bold">Mensal</p>
              </article>
              <article className="rounded-[1.7rem] bg-[#ffb1cb] p-5 text-[#2f1124] shadow-lg">
                <p className="text-xl font-semibold">Reducao de gargalos</p>
                <div className="mt-6 flex items-end gap-3">
                  {[70, 92, 76, 88, 84, 100].map((height) => (
                    <div
                      key={height}
                      className="w-3 rounded-t-full bg-[#2f1124]"
                      style={{ height }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-xs uppercase">
                  <span>Jan</span>
                  <span>Fev</span>
                  <span>Mar</span>
                  <span>Abr</span>
                  <span>Mai</span>
                  <span>Jun</span>
                </div>
              </article>
              <article className="rounded-[1.7rem] bg-[#c5d2ff] p-5 text-[#17234b] shadow-lg">
                <p className="text-sm">Meta</p>
                <p className="mt-1 text-2xl font-bold">Planejada</p>
              </article>
            </div>

            <article className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(135deg,#f8dfff_0%,#c7b0ff_35%,#6c3bff_100%)] p-3 shadow-lg">
              <div className="relative h-full min-h-[28rem] rounded-[1.4rem] bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.32),transparent_16%),linear-gradient(135deg,#ffffff_0%,#ece6ff_20%,#d8c7ff_46%,#6c3bff_100%)]">
                <div className="absolute bottom-5 left-5 rounded-2xl bg-black/32 px-4 py-3 text-white backdrop-blur-sm">
                  <p className="text-lg font-semibold">Gerencie com clareza</p>
                  <p className="text-sm text-white/72">
                    Mais estrategia, menos improviso
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="container-shell pt-20 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Conheca os especialistas por tras da estrategia
          </h2>
          <p className="mt-5 text-base leading-8 text-white/62">
            Profissionais mockados para compor a secao de equipe e reproduzir a
            estrutura visual da referencia da homepage.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {team.map((member) => (
            <TeamCard key={member.name} name={member.name} role={member.role} />
          ))}
        </div>
      </section>
    </div>
  );
}
