function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12 2C6.477 2 2 6.589 2 12.248c0 4.526 2.865 8.367 6.839 9.722.5.096.682-.222.682-.495 0-.245-.009-.894-.014-1.754-2.782.615-3.369-1.37-3.369-1.37-.455-1.177-1.11-1.49-1.11-1.49-.908-.637.069-.624.069-.624 1.004.072 1.532 1.057 1.532 1.057.892 1.562 2.341 1.111 2.91.85.091-.664.349-1.112.635-1.368-2.22-.259-4.555-1.139-4.555-5.068 0-1.119.39-2.034 1.029-2.751-.103-.259-.446-1.301.098-2.713 0 0 .84-.276 2.75 1.051A9.352 9.352 0 0 1 12 7.179c.85.004 1.706.118 2.505.346 1.909-1.327 2.748-1.051 2.748-1.051.546 1.412.202 2.454.1 2.713.64.717 1.027 1.632 1.027 2.751 0 3.939-2.338 4.806-4.566 5.06.359.318.678.944.678 1.903 0 1.374-.012 2.481-.012 2.819 0 .275.18.595.688.494C19.138 20.61 22 16.772 22 12.248 22 6.589 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedinIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.56C7.15 3.87 6.28 3 5.28 3S3.4 3.87 3.4 4.94c0 1.05.86 1.9 1.86 1.9h.02c1 0 1.88-.85 1.88-1.9ZM20.6 13.02c0-3.1-1.65-4.54-3.85-4.54-1.78 0-2.57.99-3.01 1.68V8.5H10.4c.04 1.09 0 11.5 0 11.5h3.35v-6.42c0-.34.02-.68.12-.92.27-.68.87-1.39 1.89-1.39 1.34 0 1.88 1.05 1.88 2.6V20H21V13.02h-.4Z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 14v5H5V5h5" />
    </svg>
  );
}

export default function HomePage() {
  const projects = [
    {
      title: "ToDo App",
      description:
        "Meu primeiro projeto publicado. Criei essa aplicação para praticar organização de tarefas, estrutura de projeto, componentes e deploy.",
      github: "https://github.com/NoelleAlmeida/ToDo",
      demo: "https://to-do-noelle.vercel.app/",
      techs: ["React", "TypeScript", "CSS"],
      highlight: "Projeto em destaque",
      status: "Publicado",
    },
    {
      title: "Portfólio",
      description:
        "Meu portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS para apresentar minha evolução, estudos e projetos.",
      github: "https://github.com/NoelleAlmeida/portfolio",
      demo: "https://portfolio-eta-five-29.vercel.app",
      techs: ["Next.js", "TypeScript", "Tailwind CSS"],
      highlight: "Projeto pessoal",
      status: "Em evolução",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "GitHub",
  ];

  const journey = [
    {
      title: "Começo da jornada",
      description:
        "Comecei estudando programação do zero, aprendendo na prática e construindo minha base com muita dedicação.",
    },
    {
      title: "Primeiro projeto publicado",
      description:
        "Consegui finalizar e publicar meu primeiro projeto, um ToDo App, colocando em prática o que venho estudando.",
    },
    {
      title: "Construindo meu portfólio",
      description:
        "Agora estou desenvolvendo meu portfólio para apresentar minha evolução, meus projetos e meu objetivo de crescer como full stack.",
    },
    {
      title: "Próximos passos",
      description:
        "Quero continuar estudando bastante, criar novos projetos e avançar cada vez mais para atuar como desenvolvedora full stack.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 sm:py-6">
          <h1 className="text-xl font-bold">Noelle</h1>

          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#sobre" className="transition hover:text-white">
              Sobre
            </a>
            <a href="#jornada" className="transition hover:text-white">
              Jornada
            </a>
            <a href="#tecnologias" className="transition hover:text-white">
              Tecnologias
            </a>
            <a href="#projetos" className="transition hover:text-white">
              Projetos
            </a>
            <a href="#contato" className="transition hover:text-white">
              Contato
            </a>
          </nav>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.18),transparent_35%),radial-gradient(circle_at_right,rgba(59,130,246,0.12),transparent_30%)]" />

        <div className="relative mx-auto grid min-h-[70vh] max-w-6xl gap-8 px-4 py-10 sm:px-6 sm:py-16 lg:min-h-[80vh] lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-10">
          <div>
            <div className="mb-6 flex flex-wrap gap-3">
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
                Desenvolvedora full stack em formação
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300">
                Construindo projetos reais
              </span>
            </div>

            <h2 className="mb-6 max-w-4xl text-4xl leading-tight font-extrabold sm:text-5xl lg:text-6xl">
              Transformando estudo em{" "}
              <span className="text-violet-400">projetos práticos</span> e
              evolução constante.
            </h2>

            <p className="mb-8 max-w-3xl text-base leading-8 text-zinc-300 sm:text-lg">
              Olá, eu sou{" "}
              <span className="font-semibold text-white">Noelle</span>. Estou
              estudando React, TypeScript e Tailwind CSS, criando projetos na
              prática e construindo minha base no desenvolvimento web moderno.
            </p>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400 sm:w-auto"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Ver projetos
              </a>

              <a
                href="https://github.com/NoelleAlmeida"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                <GithubIcon className="h-5 w-5" />
                GitHub
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                React
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                TypeScript
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Tailwind CSS
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Next.js
              </span>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-950/20 backdrop-blur sm:p-6">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-2xl font-bold text-violet-300">
                  N
                </div>

                <div>
                  <p className="text-lg font-semibold text-white">Noelle</p>
                  <p className="text-sm text-zinc-400">
                    Portfólio em construção
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <p className="text-sm text-zinc-400">Foco atual</p>
                  <p className="mt-1 font-semibold text-white">
                    React, TypeScript e Tailwind CSS
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <p className="text-sm text-zinc-400">Objetivo</p>
                  <p className="mt-1 font-semibold text-white">
                    Evoluir como desenvolvedora full stack
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-4">
                  <p className="text-sm text-zinc-400">Status</p>
                  <p className="mt-1 font-semibold text-emerald-400">
                    Aprendendo e publicando projetos
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <a
                  href="mailto:noellealmeidasantos@outlook.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <MailIcon className="h-4 w-4" />
                  E-mail
                </a>

                <a
                  href="https://www.linkedin.com/in/noelle-almeida-dos-santos-97a92a3a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sobre"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h3 className="mb-4 text-3xl font-bold">Sobre mim</h3>

            <p className="mb-5 text-base leading-8 text-zinc-300 sm:text-lg">
              Sou uma desenvolvedora em formação, com foco em me tornar cada vez
              mais uma profissional{" "}
              <span className="font-semibold text-white">full stack</span>.
              Estou estudando bastante, praticando todos os dias e criando
              projetos reais para aprender de forma consistente e aplicar na
              prática tudo o que venho estudando.
            </p>

            <p className="text-base leading-8 text-zinc-300 sm:text-lg">
              Meu objetivo é evoluir continuamente no desenvolvimento web,
              fortalecendo minha base no front-end e avançando cada vez mais no
              caminho para atuar como desenvolvedora full stack, construindo
              soluções completas, bem estruturadas e funcionais.
            </p>
          </div>

          <div className="rounded-3xl border border-violet-400/20 bg-violet-500/10 p-6 sm:p-8">
            <h3 className="mb-4 text-2xl font-bold text-white">
              Objetivo profissional
            </h3>

            <p className="mb-4 leading-7 text-violet-100">
              Busco crescer como desenvolvedora full stack, estudando bastante,
              criando projetos práticos e transformando conhecimento em
              experiência real.
            </p>

            <div className="space-y-3 text-sm text-violet-100">
              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="font-semibold text-white">Foco:</span> evolução
                constante com projetos reais
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="font-semibold text-white">Estudos:</span>{" "}
                React, TypeScript, Tailwind CSS e Next.js
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
                <span className="font-semibold text-white">Direção:</span>{" "}
                desenvolvimento full stack
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="jornada"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="mb-8">
          <h3 className="text-3xl font-bold">Minha jornada</h3>
          <p className="mt-2 max-w-3xl text-zinc-400">
            Um resumo do caminho que estou construindo na programação,
            estudando, praticando e transformando aprendizado em projetos reais.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {journey.map((item, index) => (
            <article
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/30 hover:bg-white/10"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-sm font-bold text-violet-300">
                  0{index + 1}
                </div>

                <h4 className="text-xl font-bold text-white">{item.title}</h4>
              </div>

              <p className="leading-7 text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="tecnologias"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="mb-4 text-3xl font-bold">Tecnologias</h3>

          <p className="mb-6 text-base leading-8 text-zinc-300 sm:text-lg">
            Estas são algumas das tecnologias e ferramentas que estou estudando
            e praticando nos meus projetos.
          </p>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projetos"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="mb-8">
          <h3 className="text-3xl font-bold">Projetos</h3>
          <p className="mt-2 text-zinc-400">
            Projetos que mostram minha evolução, prática e aprendizado.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-gradient-to-b from-white/8 to-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20"
            >
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold tracking-wide text-violet-200 uppercase">
                  {project.highlight}
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  {project.status}
                </span>
              </div>

              <h4 className="mb-3 text-2xl font-bold text-white">
                {project.title}
              </h4>

              <p className="mb-5 min-h-[84px] leading-7 text-zinc-300">
                {project.description}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-zinc-900 px-3 py-1 text-sm text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-800 px-4 py-2 font-medium transition hover:bg-zinc-700"
                >
                  <GithubIcon className="h-5 w-5" />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-4 py-2 font-medium text-white transition hover:bg-violet-400"
                >
                  <ExternalLinkIcon className="h-4 w-4" />
                  Ver projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contato"
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
          <h3 className="mb-4 text-3xl font-bold">Contato</h3>

          <p className="mb-3 text-base leading-8 text-zinc-300 sm:text-lg">
            Estou construindo minha base como desenvolvedora e aberta a novas
            oportunidades para aprender, evoluir e contribuir com projetos.
          </p>

          <p className="mb-8 text-zinc-400">
            Você pode falar comigo pelos links abaixo.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="mailto:noellealmeidasantos@outlook.com"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
            >
              <MailIcon className="h-5 w-5" />
              Enviar e-mail
            </a>

            <a
              href="https://github.com/NoelleAlmeida"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <GithubIcon className="h-5 w-5" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/noelle-almeida-dos-santos-97a92a3a5/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <LinkedinIcon className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-400 sm:px-6 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 Noelle. Construído com Next.js, TypeScript e Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/NoelleAlmeida"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/noelle-almeida-dos-santos-97a92a3a5/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>

            <a
              href="mailto:noellealmeidasantos@outlook.com"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <MailIcon className="h-4 w-4" />
              E-mail
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
