import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/lib/utils";
import { mainNavItems } from "@/lib/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-6 rounded-full px-5 py-3 transition-all duration-500",
          scrolled ? "glass shadow-soft" : "border border-transparent",
        )}
        aria-label="Primary"
      >
        <Link to="/" className="flex items-center gap-2.5" aria-label="Velrix Studio home">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground shadow-glow">
            V
          </span>
          <span className="font-display text-lg font-bold tracking-tight">Velrix</span>
        </Link>

        <ul className="hidden items-center gap-3 lg:flex">
          {mainNavItems.map((l) => {
            const active = pathname === l.to;
            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <MagneticButton to="/contact" className="px-5 py-2.5">
            Book a Call
          </MagneticButton>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full glass lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="absolute inset-x-4 top-20 z-50 animate-[fade-in_0.2s_ease-out] rounded-3xl glass p-4 shadow-soft lg:hidden">
          <ul className="flex flex-col gap-1">
            {mainNavItems.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 px-1">
              <MagneticButton to="/contact" className="w-full">
                Book a Call
              </MagneticButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
