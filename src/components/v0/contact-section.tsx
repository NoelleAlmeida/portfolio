import { MailIcon, GithubIcon, LinkedinIcon } from "~/components/icons";

export function ContactSection() {
  return (
    <section id="contato" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="border-border bg-card relative overflow-hidden rounded-2xl border p-8 sm:p-12">
        {/* Subtle glow */}
        <div className="bg-primary/5 absolute -top-20 -right-20 h-40 w-40 rounded-full blur-[80px]" />

        <div className="relative max-w-2xl">
          <p className="text-primary mb-2 text-xs font-medium tracking-widest uppercase">
            Contato
          </p>
          <h2 className="text-foreground mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Vamos conversar?
          </h2>

          <p className="text-muted-foreground mb-3 text-base leading-relaxed">
            Estou construindo minha base como desenvolvedora e aberta a novas
            oportunidades para aprender, evoluir e contribuir com projetos.
          </p>

          <p className="text-muted-foreground mb-8 text-sm">
            Voc&ecirc; pode falar comigo pelos links abaixo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:noellealmeidasantos@outlook.com"
              className="group bg-primary text-primary-foreground hover:shadow-primary/20 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all hover:shadow-lg hover:brightness-110"
            >
              <MailIcon className="h-4 w-4" />
              Enviar e-mail
            </a>

            <a
              href="https://github.com/NoelleAlmeida"
              target="_blank"
              rel="noreferrer"
              className="border-border bg-secondary/50 text-foreground hover:bg-secondary inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/noelle-almeida-dos-santos-97a92a3a5/"
              target="_blank"
              rel="noreferrer"
              className="border-border bg-secondary/50 text-foreground hover:bg-secondary inline-flex items-center justify-center gap-2 rounded-xl border px-6 py-3 text-sm font-semibold transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
