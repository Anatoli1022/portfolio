import type { Project } from "~/types/project";

export const projects: Project[] = [
  {
    id: "ihp-analytics",
    title: "Island Home Phuket — Analytics Dashboard",
    shortDescription:
      "Internal BI tool for a Phuket real estate agency. Sales analysis, portfolio monitoring, filters by location, price, area and floor.",
    description:
      "Internal analytics dashboard for the agency to replace their Excel workflow. Charts for sales by period, comparison of properties in the portfolio, and filters by location, price, area, floor and availability. Layout works on tablets so managers can show it to clients in meetings.",
    type: "commercial",
    stack: ["Vue 3", "TypeScript", "SCSS", "Nuxt.js"],
    image: "/img/projects/ihp-analytics.jpg",
    imageAlt: "IHP Analytics Dashboard screenshot",
  },
  {
    id: "astek-calculator",
    title: "Astek — Commercial Print Calculator",
    shortDescription:
      "Pricing calculator for a printing agency with PDF quotes and an admin panel for the price list.",
    description:
      "Calculator for ordering printed products. Takes around 15 parameters (print type, paper, fold count, post-print finishing) and returns a price. Generates a PDF quote with the breakdown. Has an admin panel where managers can edit the price list and add new materials without a developer.",
    type: "commercial",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/img/projects/astek-calculator.jpg",
    imageAlt: "Astek Print Calculator screenshot",
    noScroll: true,
  },
  {
    id: "travel-planning",
    title: "Travel Planning — Fullstack Map App",
    shortDescription:
      "Trip planner on an interactive map. Nuxt 3 + PostgreSQL + Drizzle, with marker clustering and heatmaps.",
    description:
      "Trip planning app on Nuxt 4 — both frontend and API. Interactive map on Leaflet with clustering, heatmaps and routes. Pinia for state, Drizzle ORM with PostgreSQL for the data layer. Docker Compose for local dev.",
    type: "pet",
    stack: [
      "Nuxt 3",
      "Vue 3",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Pinia",
      "Leaflet",
    ],
    githubUrl: "https://github.com/Anatoli1022/travel-planning",
    imageAlt: "Travel Planning App screenshot",
  },
  {
    id: "3d-scroll",
    title: "3D Scroll Animation Showcase",
    shortDescription:
      "Scroll-driven 3D animation page on Three.js, React Three Fiber and GSAP ScrollTrigger.",
    description:
      "A page where 3D objects react to click. React Three Fiber for the scene, @react-three/drei for helpers, GSAP ScrollTrigger drives the animation timeline. Was a chance to dig into WebGL performance and animation timing.",
    type: "pet",
    stack: ["React", "Three.js", "React Three Fiber", "GSAP", "Next.js"],
    githubUrl: "https://github.com/Anatoli1022/framer",
    liveUrl: "https://framer-inky.vercel.app",
    image: "/img/projects/3d-scroll.jpg",
    imageAlt: "3D Scroll Animation screenshot",
  },
  {
    id: "cycle-dev",
    title: "Cycle.Dev — Studio Website",
    shortDescription:
      "Marketing site for a studio that works with e-commerce, media, real estate, fintech and SaaS.",
    description:
      "Studio site with sections for services, work and process. Mixed media in the case studies (renders, product shots, photography), a logo strip with clients, and scroll-driven blocks. Worked on keeping it fast on weaker devices.",
    type: "commercial",
    stack: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    image: "/img/projects/cycle-dev.jpg",
    imageAlt: "Cycle.Dev studio website screenshot",
  },
  {
    id: "midas-token",
    title: "Midas Token — DeFi Landing",
    shortDescription:
      "Landing page for a DeFi token on the Fantom network: token metrics, staking, utility and a buy flow.",
    description:
      "Landing for the Midas token, built on Gatsby. Hero with token metrics (market cap, supply, price), section about 30% APY staking, breakdown of token utility (payout split, farming, APY boost), and a 3-step buy guide. Dark theme with neon accents, animated counters and an FAQ accordion at the bottom.",
    type: "pet",
    stack: ["React", "Gatsby", "TypeScript", "SCSS"],
    liveUrl: "https://midas-gatsby.vercel.app",
    image: "/img/projects/midas-token.jpg",
    imageAlt: "Midas token landing page screenshot",
  },
  {
    id: "cereal-magazine",
    title: "Cereal — Editorial Magazine Layout",
    shortDescription:
      "Editorial-style longform layout inspired by Cereal magazine. Big type, lots of whitespace, asymmetric photo placement.",
    description:
      "A long-read layout inspired by Cereal magazine. Worked on the type scale, image-and-text composition and reading flow. Responsive — the editorial layout has to hold up on a wide desktop and on a phone.",
    type: "pet",
    stack: ["React", "Next.js", "TypeScript", "SCSS"],
    liveUrl: "https://cereal-rho.vercel.app",
    image: "/img/projects/cereal-magazine.jpg",
    imageAlt: "Cereal editorial magazine layout screenshot",
  },
  {
    id: "ivax",
    title: "IVAX — Agency Landing",
    shortDescription:
      "Marketing site for a creative agency. Static build on Gatsby with React and SCSS Modules.",
    description:
      "Landing for the IVAX agency. Built on Gatsby for static-site speed and good SEO. Each section (header, main, footer) is its own React component, styled with SCSS Modules so styles stay scoped. Set up the file structure and component split early so adding new sections later was straightforward.",
    type: "pet",
    stack: ["React", "Gatsby", "SCSS"],
    liveUrl: "https://ivax.netlify.app/",
    image: "/img/projects/ivax.jpg",
    imageAlt: "IVAX agency landing screenshot",
  },
  {
    id: "dubai-realty",
    title: "Dubai Realty — Real Estate Landing",
    shortDescription:
      "Real estate landing for the Dubai market. Gatsby + React + SCSS Modules.",
    description:
      "Real estate landing aimed at the Dubai market — apartments, villas and penthouses. Static build on Gatsby for fast load and SEO. Sections built as isolated React components, SCSS Modules for scoped styles. Includes a hero with a city backdrop, a property gallery, a contact form and a FAQ block.",
    type: "pet",
    stack: ["React", "Gatsby", "SCSS"],
    liveUrl: "https://dubai-gatsby.netlify.app/",
    image: "/img/projects/dubai-realty.jpg",
    imageAlt: "Dubai Realty landing screenshot",
  },
  {
    id: "astek-website",
    title: "Astek — Corporate Website",
    shortDescription:
      "Corporate site for an outdoor advertising and signage company. WordPress build, redesign, responsive layout and performance work.",
    description:
      "Corporate site for Astek (outdoor advertising, signage, branding). Did most of the build on WordPress: redesigned key pages, redid the responsive layout, fixed accumulated bugs and worked on page-load performance. Sections include facts and numbers, a 6-step ordering process, a portfolio gallery of completed jobs, client logos, reviews and contacts.",
    type: "commercial",
    stack: ["WordPress", "PHP", "JavaScript", "SCSS", "HTML"],
    image: "/img/projects/astek-website.jpg",
    imageAlt: "Astek corporate website screenshot",
  },
  {
    id: "ihp-website",
    title: "Island Home Phuket — Real Estate Website",
    shortDescription:
      "Picked up an unfinished real estate site, shipped it, then added a property catalog, blog and CRM integration.",
    description:
      "Took the project over mid-development, finished it and pushed it to production. After launch added a property catalog with filters, a blog, and a Kommo CRM integration through Pabbly so leads from the site go straight into the pipeline.",
    type: "commercial",
    stack: ["Webflow", "JavaScript", "Pabbly","Kommo CRM"],
    image: "/img/projects/ihp-website.jpg",
    imageAlt: "Island Home Phuket website screenshot",
  },
];
