import { createServerFileRoute } from "@tanstack/react-start/server";
import { services, portfolio } from "@/lib/site-data";

const BASE = "https://velrix.studio";

const staticPaths = [
  "",
  "/about",
  "/services",
  "/portfolio",
  "/case-studies",
  "/pricing",
  "/testimonials",
  "/blog",
  "/careers",
  "/contact",
];

export const ServerRoute = createServerFileRoute("/sitemap.xml").methods({
  GET: () => {
    const urls = [
      ...staticPaths,
      ...services.map((s) => `/services/${s.slug}`),
      ...portfolio.map((p) => `/portfolio/${p.slug}`),
    ];

    const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url><loc>${BASE}${u}</loc><changefreq>weekly</changefreq><priority>${u === "" ? "1.0" : "0.7"}</priority></url>`,
  )
  .join("\n")}
</urlset>`;

    return new Response(body, {
      headers: { "Content-Type": "application/xml" },
    });
  },
});
