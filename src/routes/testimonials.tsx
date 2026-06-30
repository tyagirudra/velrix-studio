import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { PageHero, CTASection } from "@/components/sections";
import { testimonials, stats } from "@/lib/site-data";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Velrix Studio" },
      {
        name: "description",
        content:
          "Hear from founders and marketing leaders about working with Velrix Studio.",
      },
      { property: "og:title", content: "Testimonials — Velrix Studio" },
      { property: "og:description", content: "Loved by ambitious brands." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
  component: Testimonials,
});

const extended = [
  ...testimonials,
  { name: "Elena Rossi", role: "Director, Lumen Studio", quote: "The photography campaign elevated our entire brand. Sales followed immediately.", rating: 5 },
  { name: "James Carter", role: "Founder, Orbit", quote: "Velrix is the rare partner that's equally strong in design and data.", rating: 5 },
];

function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title={
          <>
            Trusted by brands that <span className="text-gradient">demand more</span>
          </>
        }
        subtitle="Don't take our word for it — here's what our clients say."
      />

      <section className="px-6 py-8">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} delay={1}>
              <div className="rounded-2xl border border-border/60 bg-surface/40 p-5 text-center">
                <p className="text-3xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {extended.map((t, i) => (
            <Reveal key={t.name} delay={i % 3}>
              <figure className="flex h-full flex-col rounded-3xl glass p-7">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand font-semibold text-primary-foreground">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
