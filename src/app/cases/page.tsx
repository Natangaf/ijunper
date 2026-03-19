import type { Metadata } from "next";
import { Reveal } from "@/components/animated/reveal";
import { CaseCard } from "@/components/marketing/cards";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Cases e Resultados",
  description:
    "Resultados, posicionamento e crescimento aplicados a negócios atendidos pela I Jumper.",
};

export default function CasesPage() {
  return (
    <div className="container-shell py-16 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Cases"
          title="Antes, estratégia aplicada e resultado"
          description="Estudos de caso para mostrar como a I Jumper estrutura posicionamento, campanhas e decisões de crescimento."
          align="center"
        />
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {caseStudies.map((item, index) => (
          <Reveal key={item.slug} delay={0.08 * index}>
            <CaseCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
