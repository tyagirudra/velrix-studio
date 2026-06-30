import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTASection } from "@/components/sections";
import { portfolio } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Velrix Studio" },
      {
        name: "description",
        content:
          "Deep dives into how Velrix Studio drives measurable growth for ambitious brands.",
      },
      { property: "og:title", content: "Case Studies — Velrix Studio" },
      { property: "og:description", content: "Real challenges, real results." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title={
          <>
            The <span className="text-gradient">how</span> behind the results
          </>
        }
        subtitle="Detailed stories of strategy, craft and measurable outcomes."
      />

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl space-y-6">
          {portfolio.map((p, i) => (
            <Reveal key={p.slug} delay={i % 2}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group grid items-center gap-6 overflow-hidden rounded-3xl border border-border/60 bg-surface/40 p-6 transition-colors hover:border-primary/40 md:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="grid aspect-[16/10] place-items-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-500/30 font-display text-3xl font-bold text-foreground/70">
                  {p.client}
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-widest text-accent">{p.category}</span>
                  <h2 className="mt-2 text-2xl font-semibold">{p.title}</h2>
                  <p className="mt-2 text-muted-foreground">{p.blurb}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    {p.result} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </p>
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
