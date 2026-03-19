import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animated/reveal";
import { ContactForm } from "@/components/marketing/forms";
import { SectionHeading } from "@/components/ui/section-heading";
import { socialLinks } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a I Jumper e comece a crescer com estratégia, posicionamento e execução.",
};

export default function ContatoPage() {
  return (
    <div className="container-shell py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com a I Jumper e comece a crescer"
            description="Se a sua empresa precisa de direção estratégica para vender mais e se posicionar melhor, essa conversa é o próximo passo."
          />
          <div className="mt-10 glass-panel rounded-[2rem] p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
              Canais
            </p>
            <div className="mt-5 flex flex-col gap-4 text-sm">
              <p className="text-white/82">WhatsApp: +55 (00) 00000-0000</p>
              <p className="text-white/82">Email: contato@ijumper.com.br</p>
              <p className="text-white/60">Atendimento consultivo para todo o Brasil</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-full border border-white/12 px-4 py-2 text-sm text-white/78 hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <ContactForm />
        </Reveal>
      </div>
    </div>
  );
}
