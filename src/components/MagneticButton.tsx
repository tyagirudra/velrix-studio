import { useRef, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  ariaLabel?: string;
};

/** Magnetic button with gradient fill (primary) or glass outline (ghost). */
export function MagneticButton({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className,
  type = "button",
  ariaLabel,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary"
      ? "bg-gradient-brand text-primary-foreground shadow-glow hover:shadow-[0_0_70px_-10px_rgba(124,58,237,0.7)]"
      : "glass text-foreground hover:border-primary/50",
    className,
  );

  const inner = (
    <span
      ref={ref}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-out"
    >
      {children}
    </span>
  );

  const handlers = { onMouseMove: onMove, onMouseLeave: reset };

  if (to) {
    return (
      <Link to={to} className={base} aria-label={ariaLabel} {...handlers}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={base} aria-label={ariaLabel} {...handlers}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={base} aria-label={ariaLabel} {...handlers}>
      {inner}
    </button>
  );
}
