import { projects, skills, experience } from "@/lib/data";

const EMAIL = "harry.lagunsad@gmail.com";
const PHONE = "+63 908 687 0554";
const GITHUB = "https://github.com/hlagunsad";
const LINKEDIN = "https://ph.linkedin.com/in/harry-lagunsad";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight text-ink"
          >
            Harry Lagunsad
          </a>
          <div className="hidden items-center gap-8 text-sm text-body sm:flex">
            <a href="#work" className="transition-colors hover:text-accent">
              Work
            </a>
            <a href="#about" className="transition-colors hover:text-accent">
              About
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-accent"
            >
              Experience
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>
          <a
            href={`mailto:${EMAIL}`}
            className="rounded-full border border-accent/40 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Email
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="hero-mesh absolute inset-0 -z-10" />
          <div className="grid-dots absolute inset-0 -z-10" />
          <div className="mx-auto max-w-5xl px-6 pb-24 pt-40 sm:pb-32 sm:pt-48">
            <p className="reveal" style={{ animationDelay: "0.05s" }}>
              <Eyebrow>Full-stack / Frontend Engineer</Eyebrow>
            </p>
            <h1
              className="reveal mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-tight text-ink sm:text-7xl"
              style={{ animationDelay: "0.15s" }}
            >
              Harry
              <br />
              Lagunsad
            </h1>
            <p
              className="reveal mt-7 max-w-xl text-lg leading-relaxed text-body sm:text-xl"
              style={{ animationDelay: "0.25s" }}
            >
              I build secure, scalable web apps end to end — React and
              TypeScript on the front, Node.js and AWS behind them. Five years
              shipping production software, most recently a live video-meeting
              platform and government portals.
            </p>
            <div
              className="reveal mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.35s" }}
            >
              <a
                href="#work"
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-[0_8px_20px_-8px_rgba(122,70,38,0.5)] transition-transform hover:-translate-y-0.5"
              >
                View work
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full border border-line bg-surface px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50"
              >
                Email me
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                Résumé ↗
              </a>
            </div>
            <div
              className="reveal mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs text-muted"
              style={{ animationDelay: "0.45s" }}
            >
              <span>Calamba City, PH · UTC+8</span>
              <span>Open to remote &amp; freelance</span>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="mx-auto max-w-5xl border-t border-line px-6 py-20"
        >
          <Eyebrow>About</Eyebrow>
          <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-ink sm:text-3xl">
            A full-stack engineer who likes owning a feature from the database
            to the screen — and leaving the codebase cleaner than I found it.
          </p>
          <p className="mt-5 max-w-2xl leading-relaxed text-body">
            I&rsquo;ve led a small team, shipped to real users, and care about
            the unglamorous parts: auth flows, clean commits, and the bugs that
            only show up in production. Comfortable working async and writing
            clear updates.
          </p>
        </section>

        {/* Work */}
        <section
          id="work"
          className="mx-auto max-w-5xl border-t border-line px-6 py-20"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl text-ink">Selected work</h2>
            <Eyebrow>01 — Live products</Eyebrow>
          </div>
          <div className="mt-12 flex flex-col gap-5">
            {projects.map((p) => (
              <a
                key={p.name}
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-line bg-surface p-7 shadow-[0_1px_3px_rgba(58,42,29,0.05)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_22px_45px_-18px_rgba(58,42,29,0.28)] sm:p-9"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-2xl text-ink">{p.name}</h3>
                  <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
                    {p.liveLabel} ↗
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-accent">
                  {p.tagline}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-body">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-body"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
          <p className="mt-8 font-mono text-xs text-muted">
            More open-source projects are on the way — each with live demos and
            tests.
          </p>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="mx-auto max-w-5xl border-t border-line px-6 py-20"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl text-ink">Capabilities</h2>
            <Eyebrow>02 — Stack</Eyebrow>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-[0_1px_3px_rgba(58,42,29,0.05)] sm:grid-cols-2">
            {skills.map((g) => (
              <div key={g.label} className="bg-surface p-7">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">
                  {g.label}
                </h3>
                <p className="mt-3 leading-relaxed text-body">{g.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section
          id="experience"
          className="mx-auto max-w-5xl border-t border-line px-6 py-20"
        >
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-3xl text-ink">Experience</h2>
            <Eyebrow>03 — Track record</Eyebrow>
          </div>
          <div className="mt-12 flex flex-col gap-10">
            {experience.map((job) => (
              <div
                key={job.role + job.period}
                className="grid gap-2 sm:grid-cols-[170px_1fr] sm:gap-8"
              >
                <div className="font-mono text-xs text-muted sm:pt-1">
                  {job.period}
                </div>
                <div>
                  <h3 className="font-display text-xl text-ink">{job.role}</h3>
                  <p className="text-sm text-accent">{job.org}</p>
                  <ul className="mt-3 flex flex-col gap-1.5 leading-relaxed text-body">
                    {job.points.map((pt, i) => (
                      <li
                        key={i}
                        className="relative pl-4 before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent/70"
                      >
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="relative overflow-hidden border-t border-line"
        >
          <div className="hero-mesh absolute inset-0 -z-10 opacity-70" />
          <div className="mx-auto max-w-5xl px-6 py-28 text-center sm:py-36">
            <Eyebrow>04 — Contact</Eyebrow>
            <h2 className="mx-auto mt-6 max-w-2xl font-display text-4xl leading-tight text-ink sm:text-6xl">
              Let&rsquo;s build something solid.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-body">
              Open to remote roles and freelance work. The fastest way to reach
              me is email.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-bg shadow-[0_8px_20px_-8px_rgba(122,70,38,0.5)] transition-transform hover:-translate-y-0.5"
              >
                {EMAIL}
              </a>
              <a
                href="tel:+639086870554"
                className="rounded-full border border-line bg-surface px-7 py-3 text-sm font-medium text-ink transition-colors hover:border-accent/50"
              >
                {PHONE}
              </a>
            </div>
            <div className="mt-8 flex justify-center gap-6 font-mono text-xs text-muted">
              <a
                href={GITHUB}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                GitHub ↗
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn ↗
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Résumé ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center font-mono text-xs text-muted">
        © 2026 Harry Lagunsad · Built with Next.js
      </footer>
    </>
  );
}
