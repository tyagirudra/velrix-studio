import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTASection } from "@/components/sections";
import { portfolio, type Category } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Velrix Studio" },
      {
        name: "description",
        content:
          "Selected work across web development, branding, photography, video, marketing and SEO from Velrix Studio.",
      },
      { property: "og:title", content: "Portfolio — Velrix Studio" },
      { property: "og:description", content: "Results-driven work for ambitious brands." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const filters: ("All" | Category)[] = [
  "All",
  "Web Development",
  "Branding",
  "Photography",
  "Videography",
  "Marketing",
  "SEO",
];

const cardGradients = [
  "from-violet-500/30 to-cyan-500/30",
  "from-fuchsia-500/30 to-violet-500/30",
  "from-cyan-500/30 to-blue-500/30",
];

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const items = active === "All" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Work that <span className="text-gradient">moves the numbers</span>
          </>
        }
        subtitle="A glimpse of how we turn ambitious briefs into measurable business outcomes."
      />

      <section className="px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                active === f
                  ? "bg-gradient-brand text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={i % 2}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-3xl border border-border/60 bg-surface/40"
              >
                <div className={cn("relative aspect-[16/10] overflow-hidden bg-gradient-to-br", cardGradients[i % 3])}>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-4xl font-bold text-foreground/80 transition-transform duration-700 group-hover:scale-110">
                      {p.client}
                    </span>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h2 className="text-lg font-semibold">{p.title}</h2>
                    <p className="text-sm text-muted-foreground">{p.blurb}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-accent">
                    {p.result}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
