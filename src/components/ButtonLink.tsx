import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const base =
    "group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-8 text-sm font-bold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2F6BFF]";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-[#2F6BFF] to-[#1D4ED8] text-white shadow-[0_0_0_1px_rgba(47,107,255,0.20),0_4px_24px_rgba(47,107,255,0.28)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(47,107,255,0.30),0_8px_40px_rgba(47,107,255,0.42)]"
      : "border border-white/[0.10] bg-white/[0.03] text-white/70 backdrop-blur-sm hover:-translate-y-0.5 hover:border-[#2F6BFF]/30 hover:bg-[#2F6BFF]/[0.06] hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
