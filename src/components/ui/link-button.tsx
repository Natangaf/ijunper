import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-primary text-white shadow-[0_20px_60px_rgba(108,59,255,0.45)] hover:-translate-y-0.5 hover:bg-[#7a50ff]",
  secondary:
    "border border-white/15 bg-white/6 text-white hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10",
  ghost: "text-white/88 hover:text-white",
};

export function LinkButton({
  href,
  children,
  variant = "primary",
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.02em] ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
