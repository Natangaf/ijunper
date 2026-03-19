import { ChartCard } from "@/components/fintech/chart-card";
import { Button } from "@/components/fintech/button";
import { StatsCard } from "@/components/fintech/stats-card";

export function HeroSection() {
  return (
    <section className="container-shell pt-10 sm:pt-14">
      <div className="grid items-center gap-12 lg:grid-cols-[1.03fr_0.97fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-white/72 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#c7ff7d]" />
            Crescimento inteligente, estrategia clara
          </div>

          <h1 className="mt-8 font-display text-5xl font-bold leading-[0.92] tracking-[-0.04em] text-white sm:text-6xl lg:text-[5.3rem]">
            A melhor orientacao estrategica vem sem amarras
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Estrutura consultiva moderna para marcas que precisam decidir melhor,
            comunicar com mais clareza e crescer com consistencia. O visual segue a
            linha SaaS, mas o conteudo continua alinhado a I Jumper.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href="/lp" className="min-w-40">
              Comecar agora
            </Button>
            <Button href="/servicos" variant="secondary" className="min-w-40">
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
              Trustpilot <span className="font-semibold text-white">4,8</span> com mais
              de 2.400 avaliacoes
            </div>
          </div>

          <p className="mt-4 text-sm text-white/42">
            Dados do dashboard abaixo sao ilustrativos e usados apenas para a composicao visual.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <StatsCard label="Crescimento projetado" value="+27,4%" tone="lime" />
            <StatsCard label="Receita consultiva" value="R$ 84,9 mil" />
            <StatsCard label="Fluxo mensal" value="R$ 12,4 mil" tone="lime" />
          </div>
        </div>

        <div className="relative pb-20 sm:pb-12">
          <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-[#c7ff7d]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[#9a70ff]/20 blur-3xl" />
          <ChartCard />
        </div>
      </div>
    </section>
  );
}
