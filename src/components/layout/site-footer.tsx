import Link from "next/link";
import { navItems, socialLinks } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[linear-gradient(180deg,rgba(53,20,109,0.35),rgba(28,11,59,0.7))]">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div className="max-w-md">
          <p className="font-display text-2xl font-bold text-white">
            O impulso que a sua marca precisava.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            Estratégia, posicionamento e crescimento com propósito para pequenas e
            médias empresas que querem sair da estagnação e conquistar autoridade.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Navegação
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/74 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">
            Conexões
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {socialLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-white/74 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 I Jumper Marketing & Consultoria.</p>
          <p>Preparado para integrações futuras com CRM, automação e captura de leads.</p>
        </div>
      </div>
    </footer>
  );
}
