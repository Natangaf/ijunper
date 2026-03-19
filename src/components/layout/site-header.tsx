"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import headerIcon from "@/assets/icon-ijumper-jumbo.png";
import whatsIcon from "@/assets/icons-whats.png";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Servicos" },
  { href: "/blog", label: "Conteudos" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-3 py-3 sm:px-5 sm:py-5">
      <div className="container-shell">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-[linear-gradient(135deg,#3a1290_0%,#2b0a5c_55%,#4d1aa7_100%)] px-4 py-3 shadow-[0_18px_50px_rgba(20,7,44,0.28)] backdrop-blur-xl sm:px-5">
          <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src={headerIcon}
              alt="I Jumper Marketing & Consultoria"
              width={56}
              height={56}
              className="h-11 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/82 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="https://wa.me/5500000000000"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#20103d] shadow-lg transition-transform duration-200 hover:scale-[1.02]"
            >
              <Image
                src={whatsIcon}
                alt="WhatsApp"
                width={18}
                height={18}
                className="h-[18px] w-[18px] object-contain"
              />
              Vamos conversar
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
            aria-label="Abrir menu"
            onClick={() => setOpen((current) => !current)}
          >
            <span className="text-xl">{open ? "x" : "="}</span>
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-3 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,#35107f_0%,#2b0a5c_100%)] p-5 shadow-[0_18px_50px_rgba(20,7,44,0.28)] lg:hidden"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-semibold text-white/86"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="https://wa.me/5500000000000"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#20103d]"
                  onClick={() => setOpen(false)}
                >
                  <Image
                    src={whatsIcon}
                    alt="WhatsApp"
                    width={18}
                    height={18}
                    className="h-[18px] w-[18px] object-contain"
                  />
                  Vamos conversar
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
