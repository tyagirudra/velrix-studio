import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTASection } from "@/components/sections";
import { portfolio, type Category, webProjects } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

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

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const items = active === "All" ? webProjects : webProjects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Featured <span className="text-gradient">Web Development</span> Projects
          </>
        }
        subtitle="Explore some of our latest custom-built websites designed with modern technologies, premium UI/UX and performance-first architecture."
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
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {items.length > 0 ? (
            items.map((p, i) => (
              <Reveal key={p.title} delay={i % 2}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border/60 bg-[#18181B] transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-7">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-flex items-center rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-accent">
                        {p.categoryLabel}
                      </span>
                      {p.technologies.map(tech => (
                        <span key={tech} className="inline-flex items-center rounded-full bg-surface/60 border border-border/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-2xl font-bold">{p.title}</h3>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                      {p.description}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
                      Visit Live Website
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </Reveal>
            ))
          ) : (
            <div className="col-span-full text-center py-24">
              <p className="text-muted-foreground text-lg">Projects coming soon.</p>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-[22px] border border-border/60 bg-surface/40 px-8 py-14 text-center">
          <h3 className="text-3xl font-bold">Ready to Build Something Amazing?</h3>
          <p className="mt-4 text-muted-foreground">
            Let's create a modern website that grows your business.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Book Free Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
