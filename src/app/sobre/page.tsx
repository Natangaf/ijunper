import type { Metadata } from "next";
import { Reveal } from "@/components/animated/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história, a visão e os diferenciais da I Jumper Marketing & Consultoria.",
};

const values = [
  {
    title: "Estratégia",
    text: "Toda ação precisa ter direção, intenção e leitura de impacto no negócio.",
  },
  {
    title: "Propósito",
    text: "Crescer com consistência sem perder essência, clareza e valor percebido.",
  },
  {
    title: "Resultado",
    text: "Posicionamento forte só faz sentido quando se transforma em crescimento real.",
  },
];

export default function SobrePage() {
  return (
    <div className="container-shell py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Sobre a I Jumper"
          title="Estratégia com propósito para empresas que querem crescer de verdade"
          description="A I Jumper nasceu para ajudar marcas e negócios a saírem da superficialidade do marketing e construírem crescimento com direção."
        />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <article className="glass-panel rounded-[2rem] p-8">
            <h2 className="font-display text-3xl font-bold text-white">Nossa história</h2>
            <div className="mt-5 space-y-5 text-sm leading-8 text-muted">
              <p>
                A I Jumper Marketing & Consultoria surgiu a partir da percepção de
                que muitas empresas investem em comunicação sem uma estrutura clara de
                posicionamento, diferenciação e crescimento.
              </p>
              <p>
                Desde o início, o foco sempre foi unir visão estratégica e execução
                prática. Não apenas criar presença, mas construir marcas que sejam
                lembradas, valorizadas e escolhidas.
              </p>
              <p>
                O resultado é uma atuação consultiva para empresas que precisam dar um
                salto: mais clareza, mais autoridade e mais consistência na geração de
                valor.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="grid gap-6">
            <article className="glass-panel rounded-[2rem] p-8">
              <h3 className="font-display text-2xl font-bold text-white">Missão</h3>
              <p className="mt-4 text-sm leading-8 text-muted">
                Impulsionar empresas com estratégia, posicionamento e marketing que
                geram autoridade e crescimento sustentável.
              </p>
            </article>
            <article className="glass-panel rounded-[2rem] p-8">
              <h3 className="font-display text-2xl font-bold text-white">Visão</h3>
              <p className="mt-4 text-sm leading-8 text-muted">
                Ser referência para negócios que buscam crescimento com inteligência,
                propósito e alto valor percebido.
              </p>
            </article>
          </div>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {values.map((value, index) => (
          <Reveal key={value.title} delay={0.08 * index}>
            <article className="glass-panel rounded-[2rem] p-7">
              <h3 className="font-display text-2xl font-bold text-white">{value.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{value.text}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-12">
        <article id="team" className="glass-panel rounded-[2rem] p-8">
          <h2 className="font-display text-3xl font-bold text-white">
            Nosso diferencial
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-muted">
            A I Jumper não entrega marketing isolado. Entrega leitura de negócio,
            estratégia aplicável, mensagem consistente e acompanhamento para que a
            execução gere percepção de valor e resultado.
          </p>
        </article>
      </Reveal>

      <Reveal className="mt-12">
        <article className="glass-panel rounded-[2rem] p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-3xl font-bold text-white">Equipe</h2>
              <p className="mt-4 max-w-2xl text-sm leading-8 text-muted">
                Espaço preparado para apresentar especialistas, consultores e líderes da
                marca com foto, cargo e mini bio.
              </p>
            </div>
            <span className="rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
              Placeholder de equipe
            </span>
          </div>
        </article>
      </Reveal>
    </div>
  );
}
