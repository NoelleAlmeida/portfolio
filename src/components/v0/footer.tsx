import { GithubIcon, LinkedinIcon, MailIcon } from "~/components/icons";

export function Footer() {
  return (
    <footer className="border-border border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <p className="text-muted-foreground text-sm">
            &copy; 2026 Noelle Almeida
          </p>
          <p className="text-muted-foreground/60 text-xs">
            Constru&iacute;do com Next.js, TypeScript & Tailwind CSS
          </p>
        </div>

        <div className="flex items-center gap-4">
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
      </div>
    </footer>
  );
}
