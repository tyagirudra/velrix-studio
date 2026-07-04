import { createFileRoute, notFound, Link, redirect } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/sections";
import { portfolioData } from "@/lib/site-data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = portfolioData.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    // For now, redirect back to portfolio since we don't have detailed project pages
    throw redirect({ to: "/portfolio" });
  },
  head: () => ({
    meta: [
      { title: "Portfolio — Velrix Studio" },
    ],
  }),
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
  component: () => null,
});
