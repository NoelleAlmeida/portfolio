"use client";

import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon, MailIcon } from "~/components/icons";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#jornada", label: "Jornada" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-border/50 bg-background/80 border-b backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="group text-foreground flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-8 w-8 items-center justify-center rounded-lg font-mono text-sm font-bold transition-colors">
            N
          </span>
          <span className="hidden sm:inline">Noelle</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-lg px-3 py-2 text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://github.com/NoelleAlmeida"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-lg p-2 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/noelle-almeida-dos-santos-97a92a3a5/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-lg p-2 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:noellealmeidasantos@outlook.com"
            className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-lg p-2 transition-colors"
            aria-label="E-mail"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 rounded-lg p-2 md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <span
            className={`bg-foreground block h-0.5 w-5 transition-transform ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`bg-foreground block h-0.5 w-5 transition-opacity ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`bg-foreground block h-0.5 w-5 transition-transform ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-border/50 bg-background/95 border-t backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-muted-foreground hover:bg-secondary hover:text-foreground rounded-lg px-3 py-3 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="border-border/50 mt-4 flex items-center gap-3 border-t pt-4">
              <a
                href="https://github.com/NoelleAlmeida"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground rounded-lg p-2 transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/noelle-almeida-dos-santos-97a92a3a5/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground rounded-lg p-2 transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:noellealmeidasantos@outlook.com"
                className="text-muted-foreground hover:text-foreground rounded-lg p-2 transition-colors"
                aria-label="E-mail"
              >
                <MailIcon className="h-5 w-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
