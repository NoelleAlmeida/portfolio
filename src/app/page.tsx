export default function HomePage() {
  const projects = [
    {
      title: "ToDo App",
      description:
        "Meu primeiro projeto publicado. Criei essa aplicação para praticar organização de tarefas, estrutura de projeto, componentes e deploy.",
      github: "https://github.com/NoelleAlmeida/ToDo",
      demo: "https://to-do-noelle.vercel.app/",
      techs: ["React", "TypeScript", "CSS"],
    },
    {
      title: "Portfólio",
      description:
        "Meu portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS para apresentar minha evolução, estudos e projetos.",
      github: "https://github.com/NoelleAlmeida/portfolio",
      demo: "https://portfolio-eta-five-29.vercel.app",
      techs: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <h1 className="text-xl font-bold">Noelle</h1>

          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            <a href="#sobre" className="transition hover:text-white">
              Sobre
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

      <section className="mx-auto flex min-h-[75vh] max-w-6xl items-center px-6 py-16">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] text-zinc-400 uppercase">
            Desenvolvedora full stack em formação
          </p>

          <h2 className="mb-6 text-4xl leading-tight font-extrabold sm:text-6xl">
            Olá, eu sou <span className="text-violet-400">Noelle</span>
          </h2>

          <p className="mb-8 text-lg leading-8 text-zinc-300">
            Estudando React, TypeScript e Tailwind CSS. Construindo projetos na
            prática, aprendendo um passo de cada vez e desenvolvendo minha base
            no desenvolvimento web moderno.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
            >
              Ver projetos
            </a>

            <a
              href="https://github.com/NoelleAlmeida"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="mb-4 text-3xl font-bold">Sobre mim</h3>

          <p className="text-lg leading-8 text-zinc-300">
            Sou iniciante na programação e estou construindo minha jornada na
            prática. Já publiquei meus primeiros projetos e sigo evoluindo com
            foco em desenvolvimento web, estudando React, TypeScript, Tailwind
            CSS e outras tecnologias do ecossistema JavaScript.
          </p>
        </div>
      </section>

      <section id="projetos" className="mx-auto max-w-6xl px-6 py-16">
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
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-violet-400/40 hover:bg-white/10"
            >
              <h4 className="mb-3 text-2xl font-bold">{project.title}</h4>

              <p className="mb-4 leading-7 text-zinc-300">
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

              <div className="flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-zinc-800 px-4 py-2 font-medium transition hover:bg-zinc-700"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-violet-500 px-4 py-2 font-medium transition hover:bg-violet-400"
                >
                  Ver projeto
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="mb-4 text-3xl font-bold">Contato</h3>

          <p className="mb-3 text-lg leading-8 text-zinc-300">
            Estou construindo minha base como desenvolvedora e aberta a novas
            oportunidades para aprender, evoluir e contribuir com projetos.
          </p>

          <p className="mb-8 text-zinc-400">
            Você pode falar comigo pelos links abaixo.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:noellealmeidasantos@outlook.com"
              className="rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition hover:bg-violet-400"
            >
              Enviar e-mail
            </a>

            <a
              href="https://github.com/NoelleAlmeida"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/noelle-almeida-dos-santos-97a92a3a5/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
