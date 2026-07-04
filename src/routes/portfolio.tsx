import { useState, useMemo, useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { PageHero, BackgroundBlobs, Eyebrow, SectionHeading } from "@/components/sections";
import { portfolioData, type Category } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { X, Play, ArrowUpRight } from "lucide-react";

const SweepEffect = () => (
  <style>{`
    @keyframes sweep {
      0% { transform: translateX(-100%) translateY(-100%) rotate(15deg); }
      100% { transform: translateX(200%) translateY(200%) rotate(15deg); }
    }
    .animate-sweep {
      animation: sweep 2s ease-in-out infinite;
    }
  `}</style>
);

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Velrix Studio" },
      {
        name: "description",
        content:
          "Selected work across web development, branding, photography, video, marketing and SEO from Velrix Studio.",
      },
      { property: "og:title", content: "Portfolio — Velrix Studio" },
      { property: "og:description", content: "Results-driven work for ambitious brands." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const filters: ("All" | Category)[] = [
  "All",
  "Web Development",
  "Branding",
  "Photography",
  "Videography",
  "Marketing",
  "SEO",
];

function VideographyCard({ project, onClick }: { project: typeof portfolioData[number]; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsPlaying(true);
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }, 250);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsLoading(false);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Reveal>
      <motion.div
        onClick={onClick}
        className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border/60 bg-[#18181B] transition-all duration-300 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -8, boxShadow: "0 0 40px rgba(124, 58, 237, 0.2)" }}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.previewVideo && (
            <video
              ref={videoRef}
              src={project.previewVideo}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover transition-opacity transition-transform duration-700"
              style={{ transform: isPlaying ? "scale(1.02)" : "scale(1)" }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          {project.duration && (
            <div
              className="absolute top-4 right-4 rounded-full glass px-3 py-1 text-xs font-semibold"
            >
              {project.duration}
            </div>
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <AnimatePresence>
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  className="relative"
                >
                  {isLoading ? (
                    <div className="w-20 h-20 rounded-full border-4 border-transparent border-t-purple-500 border-r-cyan-400 animate-spin" />
                  ) : (
                    <div className="w-20 h-20 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="p-7">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.categoryLabel && (
              <span className="inline-flex items-center rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-accent">
                {project.categoryLabel}
              </span>
            )}
            {project.features?.map(feature => (
              <span key={feature} className="inline-flex items-center rounded-full bg-surface/60 border border-border/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                {feature}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>
    </Reveal>
  );
}

function WebDevCard({ project }: { project: typeof portfolioData[number] }) {
  const CardWrapper = project.websiteUrl ? "a" : "div";
  
  return (
    <Reveal>
      <CardWrapper
        {...(project.websiteUrl ? {
          href: project.websiteUrl,
          target: "_blank",
          rel: "noopener noreferrer"
        } : {})}
        className="group relative flex flex-col overflow-hidden rounded-[22px] border border-border/60 bg-[#18181B] transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          {project.previewImage && (
            <img
              src={project.previewImage}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
          )}
        </div>

        <div className="p-7">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.categoryLabel && (
              <span className="inline-flex items-center rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-accent">
                {project.categoryLabel}
              </span>
            )}
            {project.technologies?.map(tech => (
              <span key={tech} className="inline-flex items-center rounded-full bg-surface/60 border border-border/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                {tech}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow">
            {project.websiteUrl ? "Visit Live Website" : "View Project"}
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </CardWrapper>
    </Reveal>
  );
}

function PhotographyCard({ project }: { project: typeof portfolioData[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#18181B]/80 backdrop-blur-md shadow-[0_0_40px_rgba(124,58,237,0.15)] transition-all duration-500 hover:-translate-y-3 hover:border-primary/30 hover:shadow-[0_0_80px_rgba(124,58,237,0.35)] will-change-transform"
      >
        <div className="relative overflow-hidden rounded-3xl p-4">
          {project.previewImage && (
            <motion.img
              src={project.previewImage}
              alt="Photography"
              className="w-full h-auto object-contain rounded-2xl transition-transform duration-700 group-hover:scale-104"
              loading="lazy"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
          )}
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/10" />
            <div className="absolute -inset-full animate-sweep bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
}

function GenericCard({ project }: { project: typeof portfolioData[number] }) {
  const cardGradients = [
    "from-violet-500/30 to-cyan-500/30",
    "from-fuchsia-500/30 to-violet-500/30",
    "from-cyan-500/30 to-blue-500/30",
  ];

  return (
    <Reveal>
      <Link
        to="/portfolio/$slug"
        params={{ slug: project.slug || "project" }}
        className="group block overflow-hidden rounded-3xl border border-border/60 bg-surface/40"
      >
        <div className={cn("relative aspect-[16/10] overflow-hidden bg-gradient-to-br", cardGradients[0])}>
          <div className="absolute inset-0 grid place-items-center">
            <span className="font-display text-4xl font-bold text-foreground/80 transition-transform duration-700 group-hover:scale-110">
              {project.client || project.title}
            </span>
          </div>
          <span className="absolute right-4 top-4 rounded-full glass px-3 py-1 text-xs font-medium">
            {project.category}
          </span>
        </div>
        <div className="flex items-center justify-between p-6">
          <div>
            <h2 className="text-lg font-semibold">{project.title}</h2>
            <p className="text-sm text-muted-foreground">{project.description}</p>
          </div>
          {project.result && (
            <span className="shrink-0 rounded-full bg-gradient-brand-soft px-3 py-1 text-xs font-semibold text-accent">
              {project.result}
            </span>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

function PortfolioCard({ project, onClick }: { project: typeof portfolioData[number]; onClick: () => void }) {
  if (project.category === "Videography") {
    return <VideographyCard project={project} onClick={onClick} />;
  }
  if (project.category === "Photography") {
    return <PhotographyCard project={project} />;
  }
  if (project.previewImage) {
    return <WebDevCard project={project} />;
  }
  return <GenericCard project={project} />;
}

function VideoModal({ project, onClose }: { project: typeof portfolioData[number]; onClose: () => void }) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl"
      >
        <button onClick={onClose} className="absolute -top-12 right-0 text-white hover:opacity-80 hover:opacity-100 transition-opacity">
          <X className="w-8 h-8" />
        </button>
        <div className="rounded-[22px] overflow-hidden shadow-2xl">
          {project.previewVideo && (
            <video src={project.previewVideo} controls autoPlay className="w-full aspect-video" />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [selectedVideo, setSelectedVideo] = useState<typeof portfolioData[number] | null>(null);

  const filteredItems = useMemo(() => {
    let items = portfolioData.filter(p => p.isPublished);
    if (active !== "All") {
      items = items.filter(p => p.category === active);
    }
    return items.sort((a, b) => a.displayOrder - b.displayOrder);
  }, [active]);

  const isVideography = active === "Videography";

  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Featured {isVideography ? <span className="text-gradient">Videography</span> : <span className="text-gradient">Portfolio</span>} Projects
          </>
        }
        subtitle={isVideography
          ? "Every frame tells a story. Explore cinematic productions crafted for brands, businesses and premium clients with exceptional visual storytelling and creative direction."
          : "Explore our curated collection of work across web development, branding, photography, videography, marketing and SEO."
        }
      />

      <section className="px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                active === f
                  ? "bg-gradient-brand text-primary-foreground shadow-glow"
                  : "glass text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {filteredItems.length > 0 ? (
            filteredItems.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onClick={() => {
                  if (project.category === "Videography") {
                    setSelectedVideo(project);
                  }
                }}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-24">
              <div className="mx-auto max-w-2xl rounded-[22px] border border-border/60 bg-surface/40 px-8 py-14">
                <div className="text-5xl mb-6">✨</div>
                <h3 className="text-2xl font-bold mb-4">More amazing projects are coming soon.</h3>
                <p className="text-muted-foreground mb-8">
                  We're currently working on exciting new {active.toLowerCase()} projects that will be showcased here.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
                >
                  Book Your Project
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-3xl rounded-[22px] border border-border/60 bg-surface/40 px-8 py-14 text-center">
          <h3 className="text-3xl font-bold">{isVideography ? "Need a video that stands out?" : "Ready to Build Something Amazing?"}</h3>
          <p className="mt-4 text-muted-foreground">
            {isVideography
              ? "Let's create cinematic content that elevates your brand, captivates your audience and drives real business results."
              : "Let's create a modern website that grows your business."
            }
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              {isVideography ? "Start Your Project" : "Book Free Consultation"}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold"
            >
              {isVideography ? "Book Free Consultation" : "Get Free Quote"}
            </Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedVideo && <VideoModal project={selectedVideo} onClose={() => setSelectedVideo(null)} />}
      </AnimatePresence>
    </>
  );
}
