import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/sections";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Velrix Studio" },
      { name: "description", content: "How Velrix Studio collects, uses and protects your data." },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

const sections = [
  { h: "Information we collect", b: "We collect details you provide via our contact forms — such as your name, email and project information — plus standard analytics data like pages visited and device type." },
  { h: "How we use it", b: "To respond to enquiries, deliver our services, improve our site and, where you have opted in, send relevant updates. We never sell your data." },
  { h: "Cookies", b: "We use essential and analytics cookies to understand how the site performs. You can control cookies through your browser settings." },
  { h: "Data retention", b: "We keep personal data only as long as necessary to fulfil the purposes described here, then delete or anonymise it." },
  { h: "Your rights", b: "You may request access to, correction of, or deletion of your personal data at any time by emailing privacy@velrix.studio." },
  { h: "Contact", b: "Questions about this policy? Reach us at privacy@velrix.studio." },
];

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated June 2026." />
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
