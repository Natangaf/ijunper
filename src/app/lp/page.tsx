import type { Metadata } from "next";
import { Reveal } from "@/components/animated/reveal";
import { LeadForm } from "@/components/marketing/forms";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Captação de Leads",
  description:
    "Landing page de conversão da I Jumper para empresas que querem crescer com estratégia e posicionamento.",
};

const benefits = [
  "Diagnóstico inicial de posicionamento e crescimento",
  "Leitura estratégica do seu momento de mercado",
  "Direção clara para próximos passos comerciais e de marketing",
];

export default function LandingPage() {
  return (
    <div className="container-shell py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Landing Page"
            title="Sua empresa precisa de impulso, não de mais improviso"
            description="A I Jumper entra para estruturar posicionamento, comunicação e direção de crescimento com foco em conversão e valor percebido."
          />
          <div className="mt-10 grid gap-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit} delay={0.08 * index}>
                <div className="glass-panel rounded-[1.7rem] p-5 text-sm text-white">
                  {benefit}
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <LeadForm
            title="Quero dar meu próximo salto"
            description="Deixe seus dados para receber um contato consultivo e entender a melhor rota para crescer com mais clareza."
            buttonLabel="Quero dar meu próximo salto"
          />
        </Reveal>
      </div>
    </div>
  );
}
