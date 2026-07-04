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
    slug: "e-commerce-solutions",
    title: "E-Commerce Solutions",
    short: "Complete e-commerce solutions designed to help businesses launch, manage, optimize and scale their online stores and marketplace presence across leading platforms.",
    icon: "ShoppingBag",
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

export const portfolioData = [
  {
    id: "1",
    title: "Atlantis Grand Resort",
    slug: "atlantis-grand-resort",
    category: "Web Development",
    categoryLabel: "Luxury Resort Website",
    description: "Luxury hospitality website with premium booking experience, immersive visuals and modern responsive design.",
    previewImage: "/atlantis.png",
    websiteUrl: "https://atlantis-grand-reserve.vercel.app",
    technologies: ["Next.js", "React", "TailwindCSS"],
    featured: true,
    isPublished: true,
    displayOrder: 1,
    tags: ["Hotel", "Booking System", "Luxury"],
  },
  {
    id: "2",
    title: "Lumina",
    slug: "lumina",
    category: "Web Development",
    categoryLabel: "Corporate Business Website",
    description: "Modern corporate website focused on branding, lead generation and premium UI.",
    previewImage: "/lumina.png",
    websiteUrl: "https://lumina-alpha-ten.vercel.app",
    technologies: ["Next.js", "React", "TailwindCSS"],
    featured: true,
    isPublished: true,
    displayOrder: 2,
    tags: ["Business", "Corporate", "Lead Gen"],
  },
  {
    id: "3",
    title: "Evoke Clinic",
    slug: "evoke-clinic",
    category: "Web Development",
    categoryLabel: "Healthcare Website",
    description: "Professional healthcare website designed for clinics with appointment booking and patient-focused experience.",
    previewImage: "/evoke.png",
    websiteUrl: "https://evoke-clinic-digital.vercel.app",
    technologies: ["Next.js", "React", "TailwindCSS"],
    featured: true,
    isPublished: true,
    displayOrder: 3,
    tags: ["Healthcare", "Clinic", "Appointments"],
  },
  {
    id: "4",
    title: "Lavish Looks Salon",
    slug: "lavish-looks-salon",
    category: "Web Development",
    categoryLabel: "Luxury Salon Website",
    description: "Premium beauty salon website showcasing services, appointments and luxury branding.",
    previewImage: "/lavish looks.png",
    websiteUrl: "https://lavish-looks-salon.vercel.app",
    technologies: ["Next.js", "React", "TailwindCSS"],
    featured: true,
    isPublished: true,
    displayOrder: 4,
    tags: ["Salon", "Beauty", "Luxury"],
  },
  {
    id: "5",
    title: "Velrix Studio Showreel",
    slug: "velrix-studio-showreel",
    category: "Videography",
    categoryLabel: "Commercial Film",
    description: "A cinematic brand film showcasing premium storytelling, creative direction and professional videography.",
    previewVideo: "/videography1.MP4",
    duration: "00:14",
    features: ["4K", "Cinematic", "Professional Editing", "Color Graded"],
    featured: true,
    isPublished: true,
    displayOrder: 5,
    tags: ["Showreel", "Brand Film"],
  },
  {
    id: "6",
    title: "Brand Commercial",
    slug: "brand-commercial",
    category: "Videography",
    categoryLabel: "Promotional Film",
    description: "A premium commercial production highlighting cinematic visuals, creative editing and engaging storytelling.",
    previewVideo: "/videography2.mp4",
    duration: "00:19",
    features: ["4K", "Cinematic", "Color Graded", "Drone Shots"],
    featured: true,
    isPublished: true,
    displayOrder: 6,
    tags: ["Commercial", "Promotional"],
  },
  {
    id: "7",
    title: "Luxury Brand Identity",
    slug: "luxury-brand-identity",
    category: "Branding",
    categoryLabel: "Branding",
    description: "Complete visual identity system crafted for a premium modern business.",
    previewImage: "/branding1.JPG",
    featured: true,
    isPublished: true,
    displayOrder: 7,
    tags: ["Branding", "Identity", "Luxury"],
  },
  {
    id: "8",
    title: "Corporate Brand System",
    slug: "corporate-brand-system",
    category: "Branding",
    categoryLabel: "Branding",
    description: "Professional branding package designed to create a memorable business presence.",
    previewImage: "/branding2.JPEG",
    featured: true,
    isPublished: true,
    displayOrder: 8,
    tags: ["Branding", "Corporate", "Identity"],
  },
  {
    id: "9",
    title: "Photography 1",
    slug: "photography-1",
    category: "Photography",
    previewImage: "/photography1.png",
    featured: true,
    isPublished: true,
    displayOrder: 9,
    tags: ["Photography"],
  },
  {
    id: "10",
    title: "Photography 2",
    slug: "photography-2",
    category: "Photography",
    previewImage: "/photography2.png",
    featured: true,
    isPublished: true,
    displayOrder: 10,
    tags: ["Photography"],
  },
  {
    id: "11",
    title: "Photography 3",
    slug: "photography-3",
    category: "Photography",
    previewImage: "/photography3.png",
    featured: true,
    isPublished: true,
    displayOrder: 11,
    tags: ["Photography"],
  },
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
    features: ["Up to 12 custom pages", "Brand & design system", "Advanced SEO + analytics", "CMS", "Marketing automation", "Priority support"],
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




