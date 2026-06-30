import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading, CTASection, FAQAccordion } from "@/components/sections";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.service.title ?? "Service";
    return {
      meta: [
        { title: `${t} — Velrix Studio` },
        { name: "description", content: loaderData?.service.short ?? "" },
        { property: "og:title", content: `${t} — Velrix Studio` },
        { property: "og:description", content: loaderData?.service.short ?? "" },
        { property: "og:url", content: `/services/${loaderData?.service.slug}` },
      ],
      links: [{ rel: "canonical", href: `/services/${loaderData?.service.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-bold">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-accent">
          Back to services
        </Link>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

const benefits = [
  "Senior specialists, no juniors learning on your dime",
  "Fixed scope and transparent pricing",
  "Measurable outcomes tied to revenue",
  "Premium, on-brand craft end to end",
];

const deliverables = [
  "Discovery & strategy workshop",
  "Custom plan and roadmap",
  "Full production & implementation",
  "QA, launch and optimisation",
  "Reporting and ongoing support",
];

const steps = [
  { t: "Discover", b: "We align on goals, audience and success metrics." },
  { t: "Plan", b: "A clear, scoped roadmap with timelines." },
  { t: "Produce", b: "Senior execution with weekly check-ins." },
  { t: "Optimise", b: "Measure, refine and compound results." },
];

const faqs = [
  { q: "How quickly can we start?", a: "Most engagements kick off within a week of your consultation." },
  { q: "Is this a one-off or ongoing?", a: "Both are available — choose a fixed project or a monthly retainer." },
  { q: "How do you report results?", a: "You get a clear dashboard plus regular reviews tied to your KPIs." },
];

function ServiceDetail() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow="Service"
        title={<span className="text-gradient">{service.title}</span>}
        subtitle={service.short}
      />

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All services
          </Link>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-border/60 bg-surface/40 p-8">
                <h2 className="text-2xl font-semibold">Benefits</h2>
                <ul className="mt-5 space-y-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="h-full rounded-3xl border border-border/60 bg-surface/40 p-8">
                <h2 className="text-2xl font-semibold">Deliverables</h2>
                <ul className="mt-5 space-y-3">
                  {deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-muted-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="How it works" title="A proven, transparent process" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i}>
                <div className="h-full rounded-3xl glass p-6">
                  <span className="text-3xl font-bold text-gradient">0{i + 1}</span>
                  <h3 className="mt-3 text-lg font-semibold">{s.t}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{s.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Pricing" title="Flexible engagements" subtitle="From fixed-scope projects to ongoing retainers — tailored to your stage." />
          <div className="mx-auto mt-10 max-w-md rounded-3xl border border-primary/40 bg-surface/40 p-8 text-center shadow-glow">
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Starting from</p>
            <p className="mt-2 text-5xl font-bold text-gradient">$2,500</p>
            <p className="mt-3 text-muted-foreground">Custom quote after your free consultation.</p>
            <Link
              to="/contact"
              className="mt-6 inline-flex rounded-full bg-gradient-brand px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
