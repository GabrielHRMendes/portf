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
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3B82F6]";
  const styles =
    variant === "primary"
      ? "blue-glow border border-[#3B82F6]/70 bg-[linear-gradient(135deg,#2563EB,#14213D)] text-white hover:-translate-y-1 hover:shadow-[0_0_72px_rgba(37,99,235,.42)]"
      : "border border-white/15 bg-white/[.03] text-white/80 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[.07] hover:text-white";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <span aria-hidden="true" className="transition group-hover:translate-x-1">
        →
      </span>
    </Link>
  );
}
