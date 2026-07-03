import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  Code,
  Wrench,
  Search,
  MapPin,
  Gauge,
  Sparkles,
  Camera,
  Video,
  Clapperboard,
  Share2,
  Workflow,
  Lightbulb,
  Zap,
  Bot,
  ShieldCheck,
  Palette,
  Users,
  TrendingUp,
} from "lucide-react";
import heroAbstract from "@/assets/hero-abstract.jpg";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import {
  BackgroundBlobs,
  CTASection,
  Eyebrow,
  SectionHeading,
} from "@/components/sections";
import {
  services,
  stats,
  whyVelrix,
  process,
  portfolio,
  testimonials,
  portfolioData,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Velrix Studio — We Build Brands That Dominate Online" },
      {
        name: "description",
        content:
          "Premium digital growth agency for web development, branding, SEO, content and marketing automation. Book a free consultation with Velrix Studio.",
      },
      { property: "og:title", content: "Velrix Studio — We Build Brands That Dominate Online" },
      {
        property: "og:description",
        content:
          "We don't just build websites. We build businesses. Design, growth and technology under one premium roof.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Velrix Studio",
          description: "Premium digital growth agency.",
          slogan: "We Don't Just Build Websites. We Build Businesses.",
          email: "hello@velrix.studio",
        }),
      },
    ],
  }),
  component: Home,
});

const iconMap = {
  Code, Wrench, Search, MapPin, Gauge, Sparkles, Camera, Video,
  Clapperboard, Share2, Workflow, Lightbulb,
} as const;

const whyIcons = [Zap, Bot, ShieldCheck, Palette, Users, TrendingUp];

const logos = ["Nova", "Atlas", "Lumen", "Pulse", "Vertex", "Noir", "Orbit", "Halo"];

function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <FeaturedWork />
      <FeaturedWebProjectsSection />
      <WebDevPricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-40 md:pt-48">
      <BackgroundBlobs />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <Reveal>
            <Eyebrow>Premium Digital Growth Agency</Eyebrow>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.02] sm:text-6xl md:text-7xl">
              We Build Brands That <span className="text-gradient">Dominate</span> Online.
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Velrix Studio is your end-to-end growth partner — design, development, SEO,
              branding and marketing automation engineered to turn attention into revenue.
            </p>
          </Reveal>
          <Reveal delay={3}>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticButton to="/contact">
                Book Free Consultation <ArrowRight className="h-4 w-4" />
              </MagneticButton>
              <MagneticButton to="/portfolio" variant="ghost">
                View Portfolio
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={4}>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-gradient-brand"
                  />
                ))}
              </div>
              <p>
                Trusted by <span className="font-semibold text-foreground">240+</span> ambitious
                brands worldwide.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2}>
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-brand opacity-30 blur-3xl" />
            <motion.img
              src={heroAbstract}
              alt="Abstract flowing gradient artwork representing Velrix Studio's creative craft"
              width={1280}
              height={1280}
              fetchPriority="high"
              className="aspect-square w-full rounded-[2rem] border border-border/60 object-cover shadow-soft"
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl glass px-5 py-4">
              <div>
                <p className="text-2xl font-bold text-gradient">5x</p>
                <p className="text-xs text-muted-foreground">Avg. lead growth</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gradient">98%</p>
                <p className="text-xs text-muted-foreground">Client retention</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustedSection() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Industries we serve — SaaS · E-commerce · Hospitality · Finance · Fitness · Creative
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <span
                key={i}
                className="font-display text-2xl font-semibold text-muted-foreground/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((s) => (
            <Reveal key={s.label} delay={1}>
              <div className="rounded-2xl border border-border/60 bg-surface/40 p-6 text-center">
                <p className="text-4xl font-bold text-gradient">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What we do"
          title="Everything your brand needs to grow"
          subtitle="One senior team, twelve specialist capabilities — fully integrated for compounding results."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Explore <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Why Velrix"
          title="Built different, on purpose"
          subtitle="The advantages that make us the partner serious brands choose."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyVelrix.map((item, i) => {
            const Icon = whyIcons[i];
            return (
              <Reveal key={item.title} delay={i % 3}>
                <div className="flex h-full gap-4 rounded-3xl border border-border/60 bg-surface/40 p-6">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl glass text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Our process"
          title="A clear path from idea to growth"
          subtitle="Transparent, collaborative and relentlessly focused on outcomes."
        />
        <div className="relative mt-16">
          <div className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent md:left-1/2" />
          <ul className="space-y-8">
            {process.map((p, i) => (
              <Reveal as="li" key={p.step} delay={1}>
                <div
                  className={`relative flex items-start gap-6 md:w-1/2 ${
                    i % 2 ? "md:ml-auto md:flex-row" : "md:flex-row-reverse md:text-right"
                  }`}
                >
                  <span className="z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-brand font-display text-lg font-bold text-primary-foreground shadow-glow">
                    {p.step}
                  </span>
                  <div className="rounded-2xl border border-border/60 bg-surface/40 p-5">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const cardGradients = [
  "from-violet-500/30 to-cyan-500/30",
  "from-fuchsia-500/30 to-violet-500/30",
  "from-cyan-500/30 to-blue-500/30",
];

function FeaturedWork() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            align="left"
            eyebrow="Featured work"
            title="Results we're proud of"
          />
          <MagneticButton to="/portfolio" variant="ghost">
            All projects <ArrowRight className="h-4 w-4" />
          </MagneticButton>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {portfolio.slice(0, 4).map((p, i) => (
            <Reveal key={p.slug} delay={i % 2}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-3xl border border-border/60 bg-surface/40"
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${cardGradients[i % 3]}`}
                >
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-4xl font-bold text-foreground/80 transition-transform duration-700 group-hover:scale-110">
                      {p.client}
                    </span>
                  </div>
                  <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium">
                    {p.category}
                  </span>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.blurb}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-accent">
                    {p.result}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedWebProjectsSection() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Business", "Healthcare", "Hospitality", "Beauty"];

  const webDevProjects = portfolioData.filter(p => p.category === "Web Development" && p.previewImage && p.websiteUrl);
  
  const filteredProjects = filter === "All" 
    ? webDevProjects 
    : webDevProjects.filter(p => p.tags?.includes(filter));

  return (
    <section className="relative px-6 py-24">
      <BackgroundBlobs />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured Web Development Projects"
            subtitle="Explore some of our recently developed websites designed with performance, responsiveness, modern UI/UX, and SEO best practices. Each project is custom-built to help businesses establish a powerful online presence and drive measurable growth."
          />
        </Reveal>

        {/* Introduction */}
        <Reveal delay={1}>
          <p className="mt-6 text-center text-muted-foreground max-w-3xl mx-auto">
            From luxury resorts and healthcare clinics to salons and corporate businesses, every project is designed with scalability, performance, and exceptional user experience in mind.
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={1.5}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? "bg-gradient-brand text-primary-foreground shadow-glow"
                    : "glass hover:border-primary/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={2 + (index % 2)}>
              <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-surface/40 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow">
                {/* Browser Mockup */}
                <div className="relative bg-[#18181B] border-b border-border/40 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/70" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                      <div className="w-3 h-3 rounded-full bg-green-500/70" />
                    </div>
                    <div className="flex-1 mx-4 rounded-full bg-surface/60 px-3 py-1.5 text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-accent">🔒</span>
                      <span className="truncate">{project.websiteUrl.replace('https://', '')}</span>
                    </div>
                  </div>
                </div>

                {/* Website Preview */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-violet-600/20 via-indigo-500/20 to-cyan-500/20">
                  <img
                    src={project.previewImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Card Content */}
                <div className="p-7">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-flex items-center rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-accent">
                      {project.categoryLabel}
                    </span>
                    {project.technologies.map(tech => (
                      <span key={tech} className="inline-flex items-center rounded-full bg-surface/60 border border-border/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Visit Live Website
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA Below Portfolio */}
        <Reveal delay={4}>
          <div className="mt-20 rounded-3xl border border-border/60 bg-surface/40 px-8 py-14 text-center">
            <h3 className="text-3xl font-bold">Ready to Build Your Next Website?</h3>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Let's create a high-performance website tailored specifically to your business goals.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <MagneticButton asChild>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
              <MagneticButton asChild>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold"
                >
                  Get Custom Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by founders and marketing leaders"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i % 2}>
              <figure className="flex h-full flex-col rounded-3xl glass p-7">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-brand font-semibold text-primary-foreground">
                    {t.name[0]}
                  </span>
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WebDevPricingSection() {
  return (
    <section className="relative px-6 py-24">
      <BackgroundBlobs />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Packages"
            title="Website Development Packages"
            subtitle="Choose the perfect package for your business. From startup websites to enterprise-grade solutions, we've got a plan tailored to your goals."
          />
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-14 flex justify-center">
            <img
              src="/images/web-dev-pricing.png"
              alt="Velrix Studio Website Development Pricing Packages"
              className="w-full max-w-5xl rounded-3xl object-cover shadow-soft"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
