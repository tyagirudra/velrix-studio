import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Velrix Studio" },
      { name: "description", content: "The terms governing your use of the Velrix Studio website and services." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

const sections = [
  { h: "Acceptance of terms", b: "By accessing this website or engaging our services, you agree to these terms in full." },
  { h: "Services", b: "Velrix Studio provides design, development, marketing and related creative services under scopes agreed in writing for each engagement." },
  { h: "Intellectual property", b: "All site content is owned by Velrix Studio unless stated otherwise. Deliverables transfer to clients upon full payment as per each contract." },
  { h: "Payments", b: "Project fees, milestones and retainers are defined per engagement. Late payments may pause active work." },
  { h: "Liability", b: "Our liability is limited to the fees paid for the relevant engagement. We are not liable for indirect or consequential losses." },
  { h: "Governing law", b: "These terms are governed by the laws of the jurisdiction in which Velrix Studio is registered." },
];

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle="Last updated June 2026." />
      <section className="px-6 py-12">
        <div className="mx-auto max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="text-xl font-semibold">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.b}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
