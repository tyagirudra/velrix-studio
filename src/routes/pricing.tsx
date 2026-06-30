import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading, FAQAccordion, CTASection } from "@/components/sections";
import { pricing, maintenancePlans, faqs } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Velrix Studio" },
      {
        name: "description",
        content:
          "Transparent, fixed-scope pricing for websites, branding and growth — from Starter to Enterprise, plus monthly maintenance plans.",
      },
      { property: "og:title", content: "Pricing — Velrix Studio" },
      { property: "og:description", content: "Premium packages with transparent pricing." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: Pricing,
});

const addons = [
  "Photography day rate",
  "Brand film production",
  "Monthly SEO retainer",
  "CRO experiment program",
  "Social content engine",
  "Marketing automation setup",
];

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Premium work, <span className="text-gradient">transparent pricing</span>
          </>
        }
        subtitle="Fixed scopes, no surprise invoices. Choose the package that fits your stage — upgrade anytime."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-4">
          {pricing.map((tier, i) => (
            <Reveal key={tier.name} delay={i % 4}>
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl border p-7",
                  tier.highlight
                    ? "border-primary/50 bg-surface/60 shadow-glow"
                    : "border-border/60 bg-surface/40",
                )}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-brand px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Recommended
                  </span>
                )}
                <h2 className="text-lg font-semibold">{tier.name}</h2>
                <p className="mt-3 text-4xl font-bold text-gradient">{tier.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{tier.tagline}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={cn(
                    "mt-7 inline-flex justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all",
                    tier.highlight
                      ? "bg-gradient-brand text-primary-foreground shadow-glow"
                      : "glass text-foreground hover:border-primary/50",
                  )}
                >
                  Get started
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Maintenance" title="Monthly care plans" subtitle="Keep your site fast, secure and improving every month." />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {maintenancePlans.map((m, i) => (
              <Reveal key={m.name} delay={i}>
                <div className="h-full rounded-3xl border border-border/60 bg-surface/40 p-7">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <p className="mt-2 text-3xl font-bold text-gradient">{m.price}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Add-ons" title="Optional extras" />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {addons.map((a) => (
              <span key={a} className="flex items-center gap-2 rounded-full glass px-4 py-2.5 text-sm">
                <Star className="h-4 w-4 text-accent" /> {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <SectionHeading eyebrow="FAQ" title="Pricing questions" />
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
