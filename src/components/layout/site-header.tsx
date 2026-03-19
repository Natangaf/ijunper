"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/fintech/button";

const navItems = [
  { href: "/servicos", label: "Servicos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/sobre#team", label: "Equipe" },
  { href: "/blog", label: "Conteudos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[rgba(28,14,54,0.72)] backdrop-blur-xl">
      <div className="container-shell flex min-h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/6">
            <Image
              src="/logo.png"
              alt="I Jumper"
              width={44}
              height={44}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="font-display text-base font-bold tracking-[0.02em] text-white">
              I Jumper
            </p>
            <p className="text-xs uppercase tracking-[0.18em] text-white/48">
              Marketing & Consultoria
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/68 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contato" variant="login">
            Area do cliente
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-white md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="text-xl">{open ? "x" : "="}</span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 md:hidden"
          >
            <div className="container-shell flex flex-col gap-5 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-white/82"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contato" variant="login" className="w-full">
                Area do cliente
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
