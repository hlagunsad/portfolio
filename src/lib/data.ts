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
    name: "QC-HRMD",
    tagline: "Government HR management portal",
    description:
      "Human-resource portal for the Quezon City government, serving 20,000+ active users. I was its sole developer on the first build, then led the 9-person team that scaled it. Built admin workflows, staff roles, and reporting views used by city staff, with authentication and role-based access throughout.",
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "AWS", "Role-based access"],
    live: "https://www.hrmd.quezoncity.gov.ph",
    liveLabel: "hrmd.quezoncity.gov.ph",
  },
  {
    name: "WebPros",
    tagline: "White-label video-meeting platform",
    description:
      "Freelance work on a production video-meeting product used by real customers. Built meeting, scheduling, and admin features in React and TypeScript, with live video on the Amazon Chime SDK and real-time updates over AppSync, plus Django REST Framework APIs on AWS Lambda and a self-served OTP password-reset flow. Also tracked down real-time and UI bugs across the live app.",
    stack: ["React", "TypeScript", "Python / Django", "Amazon Chime SDK", "AppSync", "AWS Lambda", "Cognito auth", "CloudFront"],
    live: "https://meeting.webpros.biz",
    liveLabel: "meeting.webpros.biz",
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
  {
    name: "Caliber",
    tagline: "Competency platform (RBAC + cycle engine)",
    description:
      "An organization's 3-year learning cycle: employees take an annual Competency Assessment, the system computes the gap to each role's target levels, and those gaps become a prioritized Growth Plan. Four roles with scoped access and separation of duties (no one validates their own assessment or approves their own plan), enforced by Postgres Row-Level Security plus secret-key server routes. The gap/diff/readiness engine is pure and unit-tested; built test-first with Vitest + Playwright.",
    stack: ["Next.js", "TypeScript", "Supabase", "RLS + RBAC", "Vitest", "Playwright"],
    live: "https://training-analyzer-ten.vercel.app",
    liveLabel: "training-analyzer-ten.vercel.app",
  },
  {
    name: "Live Board",
    tagline: "Real-time collaborative Kanban",
    description:
      "A members-only Kanban board: sign in, create boards you own, and invite collaborators with a link — then a card move by one member appears for the others instantly, with live presence showing who's in. A single Supabase Realtime channel carries Postgres Changes plus presence (RLS-filtered to members), and fractional/midpoint card ordering keeps every move to a single write. Built test-first with Vitest and a two-client Playwright test that proves the sync.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase Realtime", "Auth + RLS", "Vitest", "Playwright"],
    live: "https://live-board-one.vercel.app",
    liveLabel: "live-board-one.vercel.app",
  },
  {
    name: "Moderation Dashboard",
    tagline: "Trust & Safety review queue",
    description:
      "A moderation tool where flagged content is triaged in a queue, with role-based access (viewer / moderator / admin), an append-only audit log, and Postgres Row-Level Security enforcing permissions at the database. Built test-first with Vitest and Playwright; open source with a live demo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "RLS", "Vitest", "Playwright"],
    live: "https://moderation-dashboard-one.vercel.app",
    liveLabel: "moderation-dashboard-one.vercel.app",
  },
  {
    name: "Subscription Starter",
    tagline: "Auth + Stripe subscriptions",
    description:
      "A SaaS billing flow: sign up, subscribe via Stripe Checkout, and unlock premium content. Subscription status is written server-side only (after Stripe confirms payment), with Row-Level Security so users can't self-grant access. Built test-first with Vitest + Playwright.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "RLS", "Playwright"],
    live: "https://subscription-starter-zeta-khaki.vercel.app",
    liveLabel: "subscription-starter-zeta-khaki.vercel.app",
  },
  {
    name: "Ask the Docs",
    tagline: "RAG document Q&A with citations",
    description:
      "A retrieval-augmented Q&A app: paste a document and questions are answered grounded in the text, with citations to the exact chunks used. Chunks → embeddings → cosine top-k retrieval → grounded generation with Google Gemini. Built test-first with Vitest + Playwright.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini", "RAG", "Vitest", "Playwright"],
    live: "https://ask-the-docs-eight.vercel.app",
    liveLabel: "ask-the-docs-eight.vercel.app",
  },
];

export type SkillGroup = { label: string; items: string };

export const skills: SkillGroup[] = [
  {
    label: "Frontend",
    items:
      "React, TypeScript, Next.js, Vite, Tailwind CSS, TanStack Query & Router, Ant Design, shadcn/ui, React Hook Form + Zod",
  },
  {
    label: "Backend & APIs",
    items:
      "Python (Django REST Framework, Flask), Node.js, Express, REST APIs, GraphQL, JWT auth, WebSockets, Stripe, PayPal, Twilio",
  },
  {
    label: "Data",
    items:
      "PostgreSQL / Supabase (RLS), MySQL (RDS), DynamoDB, MongoDB, migrations & backfills",
  },
  {
    label: "Cloud & DevOps",
    items:
      "AWS (Lambda, API Gateway, Cognito, DynamoDB, RDS, S3, CloudFront, AppSync, CloudWatch), SAM, Serverless Framework, CloudFormation, Terraform, Docker, GitHub Actions",
  },
  {
    label: "Testing & quality",
    items:
      "Vitest, React Testing Library, Mock Service Worker, Playwright, pytest, moto, ESLint, Ruff, code review",
  },
  {
    label: "Ways of working",
    items:
      "Clean commits & PRs, agile delivery, async collaboration, AI-assisted development (Claude Code), trust & safety / moderation workflows",
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
      "Clinical research data review tool: React + TypeScript web app (Tailwind CSS, shadcn/ui, TanStack Query) and a TypeScript Lambda API (DynamoDB, Cognito, KMS), with CloudTrail auditing and no patient identifiers in any log.",
      "Video-meeting platform: React + TypeScript features on the Amazon Chime SDK and AppSync, Django REST Framework APIs on AWS Lambda with MySQL, and Terraform / CloudFormation infrastructure.",
      "Mobile gifting and payments app: serverless Python APIs on Lambda and DynamoDB with Stripe payments and transfers, Twilio SMS codes, and a flag-gated DynamoDB index rollout with backfills.",
      "Backend services, logging, and tracing for a content-moderation system.",
    ],
  },
  {
    role: "Team Lead / Full-Stack Web Developer",
    org: "SparkSoft Solutions Inc. · Quezon City",
    period: "Oct 2022 — Jun 2026",
    points: [
      "Led a 9-person team delivering QC-HRMD, a government HR system serving 20,000+ active users (React, TypeScript, Node.js, AWS).",
      "Designed admin APIs, reporting views, and auth / authorization for operational tools.",
      "Oversaw code reviews and coding standards, and mentored junior developers.",
    ],
  },
  {
    role: "Junior Software Developer",
    org: "SparkSoft Solutions Inc. · Quezon City",
    period: "Jun 2021 — Sep 2022",
    points: [
      "Sole developer on the initial build of QC-HRMD (React, Node.js, Express, MongoDB, JWT auth).",
      "Built a real-time gate-entry monitoring system with WebSockets, showing each visitor's name and temperature reading live on security guards' monitors.",
      "Built REST APIs for web front ends and internal tools; bug fixes and performance work.",
    ],
  },
];
