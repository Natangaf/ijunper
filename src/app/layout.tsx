import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ijumper.com.br"),
  title: {
    default: "I Jumper Marketing & Consultoria",
    template: "%s | I Jumper Marketing & Consultoria",
  },
  description:
    "Estratégia, posicionamento e crescimento com propósito para empresas que precisam transformar marketing em resultado.",
  openGraph: {
    title: "I Jumper Marketing & Consultoria",
    description:
      "O impulso que a sua marca precisava para crescer com estratégia, autoridade e resultado.",
    url: "https://www.ijumper.com.br",
    siteName: "I Jumper Marketing & Consultoria",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "I Jumper Marketing & Consultoria",
    description:
      "O impulso que a sua marca precisava para crescer com estratégia, autoridade e resultado.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${spaceGrotesk.variable} ${manrope.variable} scroll-smooth`}
    >
      <body className="bg-background text-foreground antialiased">
        <div className="relative flex min-h-screen flex-col overflow-x-clip">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(circle_at_top,_rgba(156,103,255,0.4),_transparent_42%),radial-gradient(circle_at_18%_18%,_rgba(255,79,203,0.26),_transparent_26%),radial-gradient(circle_at_78%_24%,_rgba(108,59,255,0.24),_transparent_22%),linear-gradient(180deg,_#240c52_0%,_#160a2e_100%)]" />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
