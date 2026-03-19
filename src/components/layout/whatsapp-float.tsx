import Link from "next/link";

export function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#25D366] px-5 py-3 text-sm font-semibold text-black shadow-[0_18px_40px_rgba(37,211,102,0.28)] hover:-translate-y-0.5"
    >
      <span>WhatsApp</span>
      <span aria-hidden>↗</span>
    </Link>
  );
}
