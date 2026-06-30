import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Star, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { PageHero, CTASection } from "@/components/sections";
import { portfolio } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = portfolio.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.project.title ?? "Project";
    return {
      meta: [
        { title: `${t} — Velrix Studio` },
        { name: "description", content: loaderData?.project.blurb ?? "" },
        { property: "og:title", content: `${t} — Velrix Studio` },
        { property: "og:description", content: loaderData?.project.blurb ?? "" },
        { property: "og:url", content: `/portfolio/${loaderData?.project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/portfolio/${loaderData?.project.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/portfolio" className="mt-4 inline-block text-accent">
          Back to portfolio
        </Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

const tech = ["TypeScript", "React", "TanStack", "Tailwind", "Analytics", "CMS"];

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={<span className="text-gradient">{project.title}</span>}
        subtitle={project.blurb}
      />

      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <Reveal>
            <div className="mt-8 aspect-[16/8] overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-violet-500/30 to-cyan-500/30">
              <div className="grid h-full place-items-center font-display text-6xl font-bold text-foreground/70">
                {project.client}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            { t: "Challenge", b: `${project.client} needed to stand out in a crowded market and convert more of their existing traffic.` },
            { t: "Solution", b: "We rebuilt the experience around clarity, speed and a premium brand narrative, backed by growth instrumentation." },
            { t: "Results", b: `Outcome: ${project.result}, with compounding gains across engagement and retention.` },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i}>
              <div className="h-full rounded-3xl border border-border/60 bg-surface/40 p-7">
                <h2 className="text-xl font-semibold">{c.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Gallery</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <Reveal key={i} delay={i}>
                <div className="aspect-square rounded-2xl border border-border/60 bg-gradient-to-br from-violet-500/20 to-cyan-500/20" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-semibold">Technology</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {tech.map((t) => (
              <span key={t} className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm">
                <Check className="h-4 w-4 text-accent" /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <Reveal>
          <figure className="mx-auto max-w-3xl rounded-3xl glass p-10 text-center">
            <div className="flex justify-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <blockquote className="mt-5 text-xl leading-relaxed">
              "Working with Velrix felt like adding a world-class team overnight. The results
              speak for themselves."
            </blockquote>
            <figcaption className="mt-5 text-sm text-muted-foreground">
              — Client, {project.client}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
