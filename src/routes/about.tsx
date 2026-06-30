import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { PageHero, SectionHeading, CTASection } from "@/components/sections";
import { stats, whyVelrix } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Velrix Studio" },
      {
        name: "description",
        content:
          "Velrix Studio is a premium digital growth agency combining award-grade creative with revenue-focused engineering.",
      },
      { property: "og:title", content: "About — Velrix Studio" },
      { property: "og:description", content: "Meet the studio building brands that dominate online." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { title: "Craft over clutter", body: "Every pixel earns its place. We design with restraint and intent." },
  { title: "Growth over guesswork", body: "Decisions are tied to data and revenue, never opinion." },
  { title: "Partnership over projects", body: "We act like an in-house team that's genuinely invested." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Velrix"
        title={
          <>
            A studio obsessed with <span className="text-gradient">growth & craft</span>
          </>
        }
        subtitle="We don't just build websites — we build businesses. Velrix unites designers, engineers and strategists into one senior pod that's relentlessly focused on your outcomes."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} delay={1}>
              <div className="rounded-2xl border border-border/60 bg-surface/40 p-6 text-center">
                <p className="text-4xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
          <Reveal>
            <p>
              Velrix Studio was founded on a simple belief: a website should be a growth
              engine, not a digital brochure. Too many brands invest in beautiful design
              that never moves the numbers that matter.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <p>
              So we built a different kind of agency — one where creative directors,
              performance marketers and senior engineers sit at the same table. The result
              is work that's both <span className="text-foreground">Awwwards-worthy</span> and
              <span className="text-foreground"> revenue-driving</span>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our values" title="What we stand for" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i}>
                <div className="h-full rounded-3xl border border-border/60 bg-surface/40 p-7">
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our edge" title="Advantages baked into every engagement" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyVelrix.map((w, i) => (
              <Reveal key={w.title} delay={i % 3}>
                <div className="h-full rounded-3xl glass p-6">
                  <h3 className="text-lg font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
