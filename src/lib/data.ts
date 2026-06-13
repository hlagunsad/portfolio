export type Project = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  live: string;
  liveLabel: string;
};

export const projects: Project[] = [
  {
    name: "Moderation Dashboard",
    tagline: "Trust & Safety review queue",
    description:
      "A moderation tool where flagged content is triaged in a queue, with role-based access (viewer / moderator / admin), an append-only audit log, and Postgres Row-Level Security enforcing permissions at the database. Built test-first with Vitest and Playwright; open source with a live demo.",
    stack: ["Next.js", "TypeScript", "Supabase", "RLS", "Vitest", "Playwright"],
    live: "https://moderation-dashboard-one.vercel.app",
    liveLabel: "moderation-dashboard-one.vercel.app",
  },
  {
    name: "Subscription Starter",
    tagline: "Auth + Stripe subscriptions",
    description:
      "A SaaS billing flow: sign up, subscribe via Stripe Checkout, and unlock premium content. Subscription status is written server-side only (after Stripe confirms payment), with Row-Level Security so users can't self-grant access. Built test-first with Vitest + Playwright.",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "RLS", "Playwright"],
    live: "https://subscription-starter-zeta-khaki.vercel.app",
    liveLabel: "subscription-starter-zeta-khaki.vercel.app",
  },
  {
    name: "WebPros",
    tagline: "White-label video-meeting platform",
    description:
      "Helped lead a production video-meeting product used by real customers. Built meeting and admin features, self-served OTP auth flows, and per-meeting controls, and tracked down real-time and UI bugs across a live React/TypeScript front end on a serverless backend.",
    stack: ["React", "TypeScript", "Serverless", "Cognito auth", "CloudFront"],
    live: "https://meeting.webpros.biz",
    liveLabel: "meeting.webpros.biz",
  },
  {
    name: "QC-HRMD",
    tagline: "Government HR management portal",
    description:
      "Human-resource portal for the Quezon City government. Built admin workflows, staff roles, and reporting views used by city staff, with authentication and role-based access throughout.",
    stack: ["React", "TypeScript", "Node.js", "Role-based access"],
    live: "https://www.hrmd.quezoncity.gov.ph",
    liveLabel: "hrmd.quezoncity.gov.ph",
  },
  {
    name: "Bayanihan QC",
    tagline: "Citizen volunteer platform",
    description:
      "Volunteer-program platform for the Quezon City government — citizen registration, program management, and admin tooling built for a public-sector audience.",
    stack: ["React", "TypeScript", "Node.js", "REST APIs"],
    live: "https://bayanihan.quezoncity.gov.ph",
    liveLabel: "bayanihan.quezoncity.gov.ph",
  },
];

export type SkillGroup = { label: string; items: string };

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items: "React, TypeScript, responsive UI, component architecture",
  },
  {
    label: "Backend & APIs",
    items: "Node.js, Express, REST / JSON services, JWT auth, MongoDB, SQL",
  },
  {
    label: "Cloud & tooling",
    items:
      "AWS (Amplify, Cognito, S3, Lambda, API Gateway), Heroku, Git, Claude Code",
  },
  {
    label: "Ways of working",
    items:
      "Clean commits & PRs, agile delivery, async collaboration, trust & safety / moderation workflows",
  },
];

export type Job = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Freelance Full-Stack Developer",
    org: "Independent · Remote",
    period: "Jan 2026 — Present",
    points: [
      "Build and ship full-stack web apps for clients with React, Node.js, SQL and AWS.",
    ],
  },
  {
    role: "Team Lead / Fullstack Web Developer",
    org: "SparkSoft Solutions Inc. · Quezon City",
    period: "Oct 2022 — May 2026",
    points: [
      "Led a team delivering React front ends on Node.js / AWS backends.",
      "Designed admin APIs, reporting views, and auth / authorization for operational tools.",
    ],
  },
  {
    role: "Junior Software Developer",
    org: "SparkSoft Solutions Inc. · Quezon City",
    period: "Jun 2021 — Jun 2023",
    points: [
      "Built Node.js / Express + MongoDB services and the REST APIs that fed web front ends.",
      "Bug fixing, feature work, and performance improvements in a small team.",
    ],
  },
];
