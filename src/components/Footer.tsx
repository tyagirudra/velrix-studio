import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const cols = [
  {
    title: "Studio",
    links: [
      { to: "/about", label: "About" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/case-studies", label: "Case Studies" },
      { to: "/careers", label: "Careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/services", label: "All Services" },
      { to: "/pricing", label: "Pricing" },
      { to: "/testimonials", label: "Testimonials" },
      { to: "/blog", label: "Blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2.5" aria-label="Velrix Studio home">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-primary-foreground">
                V
              </span>
              <span className="font-display text-lg font-bold">Velrix Studio</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              We don't just build websites. We build businesses — design, growth and
              technology under one premium roof.
            </p>
            <a
              href="mailto:hello@velrix.studio"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
            >
              hello@velrix.studio <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Velrix Studio. All rights reserved.</p>
          <p>Crafted for brands that intend to dominate.</p>
        </div>
      </div>
    </footer>
  );
}
