import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading } from "@/components/sections";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Velrix Studio" },
      {
        name: "description",
        content:
          "Join Velrix Studio — a senior, remote-first team building award-grade work for ambitious brands.",
      },
      { property: "og:title", content: "Careers — Velrix Studio" },
      { property: "og:description", content: "Do the best work of your career." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: Careers,
});

const roles = [
  { title: "Senior Frontend Engineer", type: "Full-time", loc: "Remote" },
  { title: "Brand Designer", type: "Full-time", loc: "Remote" },
  { title: "SEO Strategist", type: "Full-time", loc: "Remote" },
  { title: "Motion Designer", type: "Contract", loc: "Remote" },
  { title: "Growth Marketer", type: "Full-time", loc: "Remote" },
];

const perks = [
  { t: "Remote-first", b: "Work from anywhere, async-friendly." },
  { t: "Senior-only pods", b: "No junior churn, just craftspeople." },
  { t: "Real ownership", b: "Lead projects end to end." },
  { t: "Growth budget", b: "Annual learning and conference stipend." },
];

function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Do the <span className="text-gradient">best work</span> of your career
          </>
        }
        subtitle="We're a small, senior team that values craft, ownership and outcomes over busywork."
      />

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Why join" title="Built for craftspeople" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.t} delay={i}>
                <div className="h-full rounded-3xl glass p-6">
                  <h3 className="text-lg font-semibold">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <SectionHeading eyebrow="Open roles" title="Come build with us" />
          <div className="mt-12 space-y-4">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={i % 3}>
                <Link
                  to="/contact"
                  className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/60 bg-surface/40 p-6 transition-colors hover:border-primary/40"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{r.title}</h3>
                    <div className="mt-1.5 flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {r.type}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {r.loc}</span>
                    </div>
                  </div>
                  <span className="rounded-full bg-gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow">
                    Apply
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
