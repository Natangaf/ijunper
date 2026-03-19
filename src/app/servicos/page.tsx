import type { Metadata } from "next";
import { Reveal } from "@/components/animated/reveal";
import { ServiceCard } from "@/components/marketing/cards";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Conheça os serviços de marketing estratégico, branding, lançamentos e consultoria empresarial da I Jumper.",
};

export default function ServicosPage() {
  return (
    <div className="container-shell py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Serviços"
          title="Consultoria e marketing desenhados para gerar crescimento com direção"
          description="Cada frente resolve um tipo de gargalo. Juntas, elas criam uma base forte para marcas que querem crescer com consistência."
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={0.08 * index}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <div className="glass-panel rounded-[2rem] p-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white">
            Precisa entender qual serviço faz mais sentido para o seu momento?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-muted">
            A conversa consultiva ajuda a identificar o gargalo central do negócio e a
            definir qual é a prioridade estratégica para crescer com mais velocidade.
          </p>
          <div className="mt-8 flex justify-center">
            <LinkButton href="/contato">Falar com especialista</LinkButton>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
