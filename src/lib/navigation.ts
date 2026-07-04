export const mainNavItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerNavItems = {
  studio: [
    { to: "/about", label: "About" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/careers", label: "Careers" },
  ],
  services: [
    { to: "/services", label: "All Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/testimonials", label: "Testimonials" },
  ],
  legal: [
    { to: "/privacy", label: "Privacy Policy" },
    { to: "/terms", label: "Terms" },
    { to: "/contact", label: "Contact" },
  ],
} as const;
