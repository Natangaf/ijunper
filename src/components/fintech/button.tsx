import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "login";
  className?: string;
};

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#9a70ff_0%,#6c3bff_55%,#ff4fcb_100%)] text-white shadow-lg shadow-[#6c3bff]/30 hover:scale-[1.01]",
  secondary:
    "border border-white/12 bg-white/6 text-white hover:scale-[1.01] hover:bg-white/10",
  login:
    "bg-[linear-gradient(135deg,#d8ff9d_0%,#7ef0b6_100%)] text-[#17311f] shadow-lg shadow-[#7ef0b6]/20 hover:scale-[1.01] hover:brightness-105",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold tracking-[0.01em] transition-transform duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
