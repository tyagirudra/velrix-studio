import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Code, Wrench, Search, MapPin, Gauge, Sparkles, Camera, Video,
  Clapperboard, Share2, Workflow, Lightbulb, Bot,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, SectionHeading, CTASection } from "@/components/sections";
import { services, aiTools } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Velrix Studio" },
      {
        name: "description",
        content:
          "Web development, maintenance, SEO, branding, photography, video, social and marketing automation — all under one premium roof.",
      },
      { property: "og:title", content: "Services — Velrix Studio" },
      { property: "og:description", content: "Twelve specialist capabilities, fully integrated." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const iconMap = {
  Code, Wrench, Search, MapPin, Gauge, Sparkles, Camera, Video,
  Clapperboard, Share2, Workflow, Lightbulb,
} as const;

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={
          <>
            Everything to <span className="text-gradient">grow</span>, in one studio
          </>
        }
        subtitle="From the first wireframe to the hundredth conversion, our integrated team covers every discipline your brand needs."
      />

      <section className="px-6 py-12">
        <div className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Reveal key={service.slug} delay={i % 3}>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-border/60 bg-surface/40 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-brand-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-primary-foreground shadow-glow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Learn more <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="AI advantage"
            title="Free AI-powered growth tools"
            subtitle="Engage instantly with tools that surface opportunities before we even talk."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aiTools.map((tool, i) => (
              <Reveal key={tool.title} delay={i % 3}>
                <div className="group h-full rounded-3xl border border-border/60 bg-surface/40 p-7 transition-colors hover:border-accent/40">
                  <span className="grid h-11 w-11 place-items-center rounded-xl glass text-accent">
                    <Bot className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{tool.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{tool.body}</p>
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent"
                  >
                    Try it <ArrowUpRight className="h-4 w-4" />
                  </Link>
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
