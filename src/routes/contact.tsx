import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { MessageCircle, Mail } from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { PageHero, FAQAccordion } from "@/components/sections";
import { Toaster } from "@/components/ui/sonner";
import { faqs } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Velrix Studio" },
      {
        name: "description",
        content:
          "Book a free consultation with Velrix Studio. Tell us about your project and get a tailored growth plan within 48 hours.",
      },
      { property: "og:title", content: "Contact — Velrix Studio" },
      { property: "og:description", content: "Let's build something that dominates." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form) as Record<string, string>;
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((i) => {
        if (i.path[0]) fieldErrors[i.path[0] as string] = i.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thanks! We'll be in touch within 48 hours.");
      e.currentTarget?.reset?.();
    }, 800);
  };

  const fieldClass =
    "mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <>
      <Toaster />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let's build something <span className="text-gradient">that dominates</span>
          </>
        }
        subtitle="Book a free consultation. Tell us where you want to go and we'll map the path to get there."
      />

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border/60 bg-surface/40 p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input id="name" name="name" className={fieldClass} placeholder="Jane Doe" />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" className={fieldClass} placeholder="jane@brand.com" />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="company" className="text-sm font-medium">Company <span className="text-muted-foreground">(optional)</span></label>
                <input id="company" name="company" className={fieldClass} placeholder="Brand Inc." />
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="text-sm font-medium">Project details</label>
                <textarea id="message" name="message" rows={5} className={fieldClass} placeholder="Tell us about your goals…" />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="mt-6 inline-flex w-full justify-center rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity disabled:opacity-60"
              >
                {submitting ? "Sending…" : "Book Free Consultation"}
              </button>
            </form>
          </Reveal>

          <Reveal delay={1}>
            <div className="flex h-full flex-col justify-center gap-6">
              <a href="https://wa.me/10000000000" className="rounded-3xl border border-border/60 bg-surface/40 p-8 transition-colors hover:border-success/50">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl glass text-success"><MessageCircle className="h-7 w-7" /></span>
                  <h3 className="text-lg font-semibold">WhatsApp us</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Chat with a strategist in real time.</p>
              </a>

              <a href="mailto:hello@velrix.studio" className="rounded-3xl border border-border/60 bg-surface/40 p-8 transition-colors hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-xl glass text-primary"><Mail className="h-7 w-7" /></span>
                  <h3 className="text-lg font-semibold">Email</h3>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">hello@velrix.studio</p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold">Frequently asked</h2>
        </div>
        <div className="mt-10">
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </>
  );
}
