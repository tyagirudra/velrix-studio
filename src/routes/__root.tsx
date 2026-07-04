import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import PillNav from "../components/PillNav";
import { Footer } from "../components/Footer";
import { SmoothScroll } from "../components/SmoothScroll";
import { CursorGlow } from "../components/CursorGlow";
import { mainNavItems } from "@/lib/navigation";

// Convert mainNavItems to the format expected by PillNav
const navItems = mainNavItems.map(item => ({
  label: item.label,
  href: item.to,
}));

function NotFoundComponent() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand-soft blur-3xl" />
      <div className="relative max-w-md text-center">
        <p className="font-display text-8xl font-bold text-gradient">404</p>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-7">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Velrix Studio — We Build Brands That Dominate Online" },
      {
        name: "description",
        content:
          "Velrix Studio is a premium digital growth agency for web development, branding, SEO, content and marketing automation. We don't just build websites — we build businesses.",
      },
      { name: "author", content: "Velrix Studio" },
      { property: "og:title", content: "Velrix Studio — Premium Digital Growth Agency" },
      {
        property: "og:description",
        content:
          "Design, growth and technology under one premium roof. Web development, branding, SEO and marketing automation that converts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Velrix Studio" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Velrix Studio — Premium Digital Growth Agency" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScroll />
      <CursorGlow />
      <PillNav
        logo="/logo2.png"
        logoAlt="Velrix Studio"
        items={navItems}
        activeHref={pathname}
        className=""
        baseColor="#6366f1"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        initialLoadAnimation={true}
      />
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
