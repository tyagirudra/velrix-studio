export const services = [
  {
    slug: "website-development",
    title: "Website Development",
    short: "Lightning-fast, conversion-engineered sites built on modern stacks.",
    icon: "Code",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    short: "Proactive care, security and performance so you never break.",
    icon: "Wrench",
  },
  {
    slug: "seo",
    title: "SEO",
    short: "Rank for the searches that actually grow revenue.",
    icon: "Search",
  },
  {
    slug: "local-seo",
    title: "Local SEO",
    short: "Own your map pack and dominate your city.",
    icon: "MapPin",
  },
  {
    slug: "technical-seo",
    title: "Technical SEO",
    short: "Core Web Vitals, crawlability and architecture, perfected.",
    icon: "Gauge",
  },
  {
    slug: "branding",
    title: "Branding",
    short: "Identities with a point of view that command premium pricing.",
    icon: "Sparkles",
  },
  {
    slug: "photography",
    title: "Photography",
    short: "Editorial-grade imagery that tells your story.",
    icon: "Camera",
  },
  {
    slug: "videography",
    title: "Videography",
    short: "Cinematic capture that stops the scroll.",
    icon: "Video",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    short: "Post-production with rhythm, polish and intent.",
    icon: "Clapperboard",
  },
  {
    slug: "social-media-management",
    title: "Social Media Management",
    short: "Always-on content engines that build audiences.",
    icon: "Share2",
  },
  {
    slug: "marketing-automation",
    title: "Marketing Automation",
    short: "Funnels and flows that nurture and close on autopilot.",
    icon: "Workflow",
  },
  {
    slug: "creative-strategy",
    title: "Creative Strategy",
    short: "The big idea that aligns every touchpoint.",
    icon: "Lightbulb",
  },
] as const;

export const stats = [
  { value: 240, suffix: "+", label: "Projects shipped" },
  { value: 98, suffix: "%", label: "Client retention" },
  { value: 12, suffix: "", label: "Years of craft" },
  { value: 5, suffix: "x", label: "Avg. growth in leads" },
] as const;

export const whyVelrix = [
  { title: "Fast Delivery", body: "Sprints measured in days, not quarters." },
  { title: "AI Powered", body: "We weaponise AI across research, content and ops." },
  { title: "Transparent Pricing", body: "Fixed scopes, no surprise invoices." },
  { title: "Creative Excellence", body: "Awwwards-grade craft on every pixel." },
  { title: "Dedicated Team", body: "One senior pod, fully accountable to you." },
  { title: "Growth Focus", body: "We optimise for revenue, not vanity metrics." },
] as const;

export const process = [
  { step: "01", title: "Discover", body: "We learn your business, market and goals." },
  { step: "02", title: "Research", body: "Competitor, audience and keyword intelligence." },
  { step: "03", title: "Strategy", body: "A clear plan tied to measurable outcomes." },
  { step: "04", title: "Design", body: "Premium, on-brand interfaces and identity." },
  { step: "05", title: "Development", body: "Robust, fast, scalable engineering." },
  { step: "06", title: "Launch", body: "Tested, optimised and ready to convert." },
  { step: "07", title: "Growth", body: "Iterate, measure and compound results." },
] as const;

export type Category =
  | "Web Development"
  | "Photography"
  | "Videography"
  | "Branding"
  | "Marketing"
  | "SEO";

export const portfolio: {
  slug: string;
  title: string;
  client: string;
  category: Category;
  blurb: string;
  result: string;
}[] = [
  { slug: "nova-finance", title: "Nova Finance", client: "Nova", category: "Web Development", blurb: "A fintech platform rebuilt for trust and speed.", result: "+212% signups" },
  { slug: "atlas-coffee", title: "Atlas Coffee", client: "Atlas", category: "Branding", blurb: "A specialty roaster's premium rebrand.", result: "3x avg. order value" },
  { slug: "lumen-studio", title: "Lumen Studio", client: "Lumen", category: "Photography", blurb: "Editorial product photography campaign.", result: "+48% conversion" },
  { slug: "pulse-fitness", title: "Pulse Fitness", client: "Pulse", category: "Marketing", blurb: "A growth engine for a boutique gym chain.", result: "5x qualified leads" },
  { slug: "vertex-saas", title: "Vertex SaaS", client: "Vertex", category: "SEO", blurb: "Organic dominance in a crowded category.", result: "#1 for 40 keywords" },
  { slug: "noir-films", title: "Noir Films", client: "Noir", category: "Videography", blurb: "A cinematic brand film series.", result: "2.1M views" },
];

export const testimonials = [
  { name: "Sofia Marin", role: "CEO, Nova Finance", quote: "Velrix didn't just redesign our site — they re-architected our growth. Signups more than tripled.", rating: 5 },
  { name: "Daniel Okoye", role: "Founder, Atlas Coffee", quote: "The rebrand let us raise prices and still sell out. That's the ROI of real craft.", rating: 5 },
  { name: "Priya Nair", role: "CMO, Vertex SaaS", quote: "We went from invisible to category-leading in search within two quarters.", rating: 5 },
  { name: "Marcus Lee", role: "Owner, Pulse Fitness", quote: "Their automation funnels book our calendar while we sleep. Game changing.", rating: 5 },
];

export const pricing = [
  {
    name: "Starter",
    price: "₹15,000",
    tagline: "For founders launching their first premium presence.",
    features: ["5-page custom website", "Mobile-first design", "Basic SEO setup", "Contact + lead form", "2 weeks delivery"],
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹30,000",
    tagline: "For growing brands ready to convert seriously.",
    features: ["Up to 12 custom pages", "Brand & design system", "Advanced SEO + analytics", "CMS + blog", "Marketing automation", "Priority support"],
    highlight: true,
  },
  {
    name: "Business",
    price: "₹55,000",
    tagline: "For market leaders compounding their advantage.",
    features: ["Unlimited pages", "Full brand identity", "Technical + local SEO", "Photography & video", "CRO program", "Dedicated pod"],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    tagline: "For organisations needing bespoke scale.",
    features: ["Custom platforms", "Integrations & APIs", "Ongoing growth retainer", "Quarterly strategy", "SLA + security", "Account director"],
    highlight: false,
  },
] as const;

export const maintenancePlans = [
  { name: "Care", price: "₹19,999/mo", body: "Updates, backups, uptime monitoring." },
  { name: "Care+", price: "₹49,999/mo", body: "Everything in Care plus monthly improvements & SEO." },
  { name: "Growth", price: "₹99,999/mo", body: "Care+ plus CRO experiments and content." },
] as const;

export const faqs = [
  { q: "How long does a typical project take?", a: "Most websites ship in 2–6 weeks depending on scope. We work in fast, transparent sprints with weekly demos." },
  { q: "Do you work with clients outside your city?", a: "Yes. We partner with brands worldwide and run fully remote, async-friendly engagements." },
  { q: "What makes Velrix different from a typical agency?", a: "We combine award-grade creative with growth engineering. Every decision is tied to revenue, not vanity metrics." },
  { q: "Do you offer ongoing support?", a: "Absolutely — our maintenance and growth retainers keep your site fast, secure and improving every month." },
  { q: "What is your pricing model?", a: "Fixed-scope project pricing with optional monthly retainers. No surprise invoices, ever." },
];

export const aiTools = [
  { title: "AI Website Audit", body: "Instant, actionable scorecard for design, speed and UX." },
  { title: "AI SEO Analyzer", body: "Spot ranking gaps and quick wins in seconds." },
  { title: "AI Content Generator", body: "On-brand copy drafts for pages, posts and ads." },
  { title: "AI Marketing Strategy", body: "A tailored growth playbook from a few inputs." },
  { title: "AI Landing Page Review", body: "Conversion critique with prioritised fixes." },
] as const;

export const webProjects = [
  {
    title: "Atlantis Grand Resort",
    categoryLabel: "Luxury Resort Website",
    category: "Web Development" as const,
    description: "Luxury hospitality website with premium booking experience, immersive visuals and modern responsive design.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    url: "https://atlantis-grand-reserve.vercel.app",
    image: "/atlantis.png",
  },
  {
    title: "Lumina",
    categoryLabel: "Corporate Business Website",
    category: "Web Development" as const,
    description: "Modern corporate website focused on branding, lead generation and premium UI.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    url: "https://lumina-alpha-ten.vercel.app",
    image: "/lumina.png",
  },
  {
    title: "Evoke Clinic",
    categoryLabel: "Healthcare Website",
    category: "Web Development" as const,
    description: "Professional healthcare website designed for clinics with appointment booking and patient-focused experience.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    url: "https://evoke-clinic-digital.vercel.app",
    image: "/evoke.png",
  },
  {
    title: "Lavish Looks Salon",
    categoryLabel: "Luxury Salon Website",
    category: "Web Development" as const,
    description: "Premium beauty salon website showcasing services, appointments and luxury branding.",
    technologies: ["Next.js", "React", "TailwindCSS"],
    url: "https://lavish-looks-salon.vercel.app",
    image: "/lavish looks.png",
  },
] as const;

export const videographyProjects = [
  {
    title: "Velrix Studio Showreel",
    categoryLabel: "Commercial Film",
    category: "Videography" as const,
    description: "A cinematic brand film showcasing premium storytelling, creative direction and professional videography.",
    video: "/videography1.MP4",
    duration: "02:35",
    features: ["4K", "Cinematic", "Professional Editing", "Color Graded"],
  },
  {
    title: "Brand Commercial",
    categoryLabel: "Promotional Film",
    category: "Videography" as const,
    description: "A premium commercial production highlighting cinematic visuals, creative editing and engaging storytelling.",
    video: "/videography2.mp4",
    duration: "01:45",
    features: ["4K", "Cinematic", "Color Graded", "Drone Shots"],
  },
] as const;
