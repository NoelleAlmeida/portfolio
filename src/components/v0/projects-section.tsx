import { GithubIcon, ExternalLinkIcon } from "~/components/icons";

const projects = [
  {
    title: "CineBusca",
    description:
      "App para buscar filmes/séries, ver detalhes e salvar favoritos. Inclui histórico de buscas, URL compartilhável, acessibilidade (atalhos) e testes.",
    github: "https://github.com/NoelleAlmeida/buscador-filmes",
    demo: "https://buscador-filmes-navy.vercel.app",
    techs: [
      "React",
      "Vite",
      "React Router",
      "LocalStorage",
      "Vitest",
      "Vercel",
    ],
    highlight: "Projeto em destaque",
    status: "Publicado",
  },
  {
    title: "ToDo App",
    description:
      "Meu primeiro projeto publicado. Criei essa aplicação para praticar organização de tarefas, componentes, estrutura de projeto e deploy.",
    github: "https://github.com/NoelleAlmeida/ToDo",
    demo: "https://to-do-noelle.vercel.app/",
    techs: ["React", "TypeScript", "CSS"],
    highlight: "Projeto em destaque",
    status: "Publicado",
  },
  {
    title: "Portfólio",
    description:
      "Meu portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS para apresentar minha evolução, meus estudos e meus projetos.",
    github: "https://github.com/NoelleAlmeida/portfolio",
    demo: "https://portfolio-eta-five-29.vercel.app",
    techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlight: "Projeto pessoal",
    status: "Em evolução",
  },
];

export function ProjectsSection() {
  return (
    <section id="projetos" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-primary mb-2 text-xs font-medium tracking-widest uppercase">
          Trabalhos
        </p>
        <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Projetos
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl">
          Projetos que mostram minha evolu&ccedil;&atilde;o, pr&aacute;tica e
          aprendizado no desenvolvimento web.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={`animate-fade-up group border-border bg-card hover:border-primary/30 hover:shadow-primary/5 relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl`}
            style={{ animationDelay: `${index * 150 + 200}ms` }}
          >
            {/* Project header with gradient accent */}
            <div className="border-border bg-secondary/20 relative border-b px-6 pt-6 pb-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="border-primary/20 bg-primary/10 text-primary rounded-full border px-3 py-1 text-xs font-medium">
                  {project.highlight}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.status === "Publicado"
                      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                      : "border border-amber-500/20 bg-amber-500/10 text-amber-400"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h3 className="text-foreground text-2xl font-bold">
                {project.title}
              </h3>
            </div>

            {/* Project body */}
            <div className="p-6">
              <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="border-border bg-secondary/30 text-muted-foreground rounded-md border px-2.5 py-1 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="border-border bg-secondary/50 text-foreground hover:bg-secondary inline-flex flex-1 items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors"
                >
                  <GithubIcon className="h-4 w-4" />
                  C&oacute;digo
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn bg-primary text-primary-foreground hover:shadow-primary/20 inline-flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all hover:shadow-lg hover:brightness-110"
                >
                  Ver projeto
                  <ExternalLinkIcon className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
