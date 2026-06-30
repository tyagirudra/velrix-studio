import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTASection } from "@/components/sections";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Velrix Studio" },
      {
        name: "description",
        content:
          "Insights on web design, SEO, branding and growth from the Velrix Studio team.",
      },
      { property: "og:title", content: "Blog — Velrix Studio" },
      { property: "og:description", content: "Growth insights from the studio." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const posts = [
  { title: "Why your website is your best salesperson", cat: "Conversion", read: "6 min", date: "Jun 2026" },
  { title: "The premium brand playbook for 2026", cat: "Branding", read: "8 min", date: "May 2026" },
  { title: "Technical SEO wins that actually move rankings", cat: "SEO", read: "7 min", date: "May 2026" },
  { title: "Marketing automation: build a funnel that closes", cat: "Automation", read: "5 min", date: "Apr 2026" },
  { title: "Designing for trust: lessons from luxury brands", cat: "Design", read: "6 min", date: "Apr 2026" },
  { title: "How we ship Awwwards-grade sites in weeks", cat: "Process", read: "9 min", date: "Mar 2026" },
];

const gradients = [
  "from-violet-500/30 to-cyan-500/30",
  "from-fuchsia-500/30 to-violet-500/30",
  "from-cyan-500/30 to-blue-500/30",
];

function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Ideas that <span className="text-gradient">compound</span>
          </>
        }
        subtitle="Practical thinking on design, growth and the craft of building businesses online."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i % 3}>
              <article className="group h-full overflow-hidden rounded-3xl border border-border/60 bg-surface/40 transition-all hover:-translate-y-1.5 hover:border-primary/40">
                <div className={`aspect-[16/9] bg-gradient-to-br ${gradients[i % 3]}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-gradient-brand-soft px-2.5 py-0.5 font-medium text-accent">{p.cat}</span>
                    <span>{p.read} · {p.date}</span>
                  </div>
                  <h2 className="mt-3 text-lg font-semibold leading-snug">{p.title}</h2>
                  <p className="mt-3 text-sm font-medium text-accent">Read article →</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Want this kind of growth for your brand?" />
    </>
  );
}
