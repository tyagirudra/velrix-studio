import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { MagneticButton } from "./MagneticButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/** Decorative animated gradient blobs for section backgrounds. */
export function BackgroundBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="animate-blob absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-primary/25 blur-[120px]" />
      <div className="animate-blob absolute -right-24 top-40 h-[360px] w-[360px] rounded-full bg-accent/20 blur-[120px] [animation-delay:-6s]" />
      <div className="animate-blob absolute bottom-0 left-1/3 h-[380px] w-[380px] rounded-full bg-secondary/20 blur-[130px] [animation-delay:-12s]" />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
      {children}
    </span>
  );
}

/** Standard hero header for inner pages. */
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-40">
      <BackgroundBlobs />
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={1}>
        <h2 className="mt-5 text-balance text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={2}>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function CTASection({
  title = "Ready to build a business, not just a website?",
  subtitle = "Book a free consultation and get a tailored growth plan within 48 hours.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="px-6 py-24">
      <Reveal>
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border/60 p-10 text-center shadow-soft sm:p-16">
          <div className="absolute inset-0 -z-10 animate-gradient-pan bg-gradient-brand opacity-90" />
          <div className="absolute inset-0 -z-10 bg-background/10" />
          <h2 className="text-balance text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-primary-foreground/90">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <MagneticButton to="/contact" variant="ghost" className="bg-background/95 text-foreground">
              Book Free Consultation
            </MagneticButton>
            <MagneticButton to="/portfolio" variant="ghost">
              View Portfolio
            </MagneticButton>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="mx-auto max-w-3xl">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="mb-3 overflow-hidden rounded-2xl border border-border/60 bg-surface/40 px-5"
        >
          <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
