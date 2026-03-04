import { ExternalLinkIcon, GithubIcon, CodeIcon } from "~/components/icons";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden" id="top">
      {/* Subtle grid background */}
      <div className="hero-grid absolute inset-0 bg-[linear-gradient(to_right,oklch(0.22_0.005_260)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.22_0.005_260)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Primary glow */}
      <div className="bg-primary/5 animate-glow-pulse absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full blur-[120px]" />
      <div className="bg-primary/3 animate-glow-pulse animation-delay-200 absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full blur-[100px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col px-6 pt-16 pb-20 lg:min-h-[85vh] lg:flex-row lg:items-center lg:gap-16 lg:pt-24">
        {/* Left content */}
        <div className="flex-1">
          <div className="animate-fade-up mb-6 flex items-center gap-3">
            <span className="border-primary/20 bg-primary/5 text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
              <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
              Aberta a oportunidades
            </span>
          </div>

          <h1 className="animate-fade-up animation-delay-100 text-foreground mb-6 max-w-2xl text-4xl leading-[1.1] font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Transformando estudo em{" "}
            <span className="text-primary">projetos reais</span> e
            evolu&ccedil;&atilde;o constante.
          </h1>

          <p className="animate-fade-up animation-delay-200 text-muted-foreground mb-8 max-w-xl text-base leading-relaxed sm:text-lg">
            Ol&aacute;, eu sou{" "}
            <span className="text-foreground font-semibold">Noelle</span>.
            Desenvolvedora em forma&ccedil;&atilde;o com foco em React,
            TypeScript e Next.js, criando projetos na pr&aacute;tica para
            construir uma base s&oacute;lida no desenvolvimento web moderno.
          </p>

          <div className="animate-fade-up animation-delay-300 mb-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="group bg-primary text-primary-foreground hover:shadow-primary/20 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:shadow-lg hover:brightness-110"
            >
              Ver projetos
              <ExternalLinkIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="https://github.com/NoelleAlmeida"
              target="_blank"
              rel="noreferrer"
              className="border-border bg-secondary/50 text-foreground hover:bg-secondary inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-all"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </div>

          {/* Tech pills */}
          <div className="animate-fade-up animation-delay-400 flex flex-wrap gap-2">
            {["React", "TypeScript", "Next.js", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="border-border bg-secondary/30 text-muted-foreground rounded-md border px-3 py-1 font-mono text-xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="animate-slide-in-right animation-delay-300 mt-12 w-full max-w-sm lg:mt-0">
          <div className="border-border bg-card relative rounded-2xl border p-6">
            {/* Terminal bar */}
            <div className="mb-5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
                <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
                <span className="bg-muted-foreground/30 h-2.5 w-2.5 rounded-full" />
              </div>
              <span className="text-muted-foreground ml-2 font-mono text-xs">
                noelle.dev
              </span>
            </div>

            {/* Profile */}
            <div className="mb-5 flex items-center gap-4">
              <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-xl text-xl font-bold">
                N
              </div>
              <div>
                <p className="text-foreground font-semibold">Noelle Almeida</p>
                <p className="text-muted-foreground text-sm">
                  Full Stack em forma&ccedil;&atilde;o
                </p>
              </div>
            </div>

            {/* Info blocks */}
            <div className="space-y-3">
              <div className="border-border bg-secondary/30 flex items-center gap-3 rounded-xl border p-3">
                <CodeIcon className="text-primary h-4 w-4 shrink-0" />
                <div>
                  <p className="text-muted-foreground text-xs">Foco atual</p>
                  <p className="text-foreground text-sm font-medium">
                    React, TypeScript & Next.js
                  </p>
                </div>
              </div>

              <div className="border-border bg-secondary/30 flex items-center gap-3 rounded-xl border p-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
                </svg>
                <div>
                  <p className="text-muted-foreground text-xs">Status</p>
                  <p className="text-primary text-sm font-medium">
                    Aprendendo & publicando
                  </p>
                </div>
              </div>

              <div className="border-border bg-secondary/30 flex items-center gap-3 rounded-xl border p-3">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                  <path d="M12 3v12" />
                  <path d="M5 21h14" />
                </svg>
                <div>
                  <p className="text-muted-foreground text-xs">Objetivo</p>
                  <p className="text-foreground text-sm font-medium">
                    Desenvolvedora full stack
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
