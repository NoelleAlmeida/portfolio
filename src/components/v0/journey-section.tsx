const journey = [
  {
    step: "01",
    title: "Começo da jornada",
    description:
      "Comecei estudando programação do zero, aprendendo na prática e construindo minha base com muita dedicação.",
  },
  {
    step: "02",
    title: "Primeiro projeto publicado",
    description:
      "Consegui finalizar e publicar meu primeiro projeto, um ToDo App, colocando em prática o que venho estudando.",
  },
  {
    step: "03",
    title: "Construindo meu portfólio",
    description:
      "Agora estou desenvolvendo meu portfólio para apresentar minha evolução, meus projetos e meu objetivo de crescer como full stack.",
  },
  {
    step: "04",
    title: "Próximos passos",
    description:
      "Quero continuar estudando bastante, criar novos projetos e avançar cada vez mais para atuar como desenvolvedora full stack.",
  },
];

export function JourneySection() {
  return (
    <section id="jornada" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-primary mb-2 text-xs font-medium tracking-widest uppercase">
          Trajet&oacute;ria
        </p>
        <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Minha jornada
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl">
          Um resumo do caminho que estou construindo na
          programa&ccedil;&atilde;o, estudando, praticando e transformando
          aprendizado em projetos reais.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {journey.map((item, index) => (
          <article
            key={item.step}
            className={`animate-fade-up group border-border bg-card hover:border-primary/30 hover:bg-card/80 hover:shadow-primary/5 relative rounded-2xl border p-6 transition-all duration-300 hover:shadow-lg`}
            style={{ animationDelay: `${index * 100 + 200}ms` }}
          >
            {/* Step number */}
            <span className="text-primary/20 group-hover:text-primary/40 mb-4 inline-block font-mono text-3xl font-bold transition-colors">
              {item.step}
            </span>

            <h3 className="text-foreground mb-2 text-lg font-bold">
              {item.title}
            </h3>

            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>

            {/* Connector line for desktop */}
            {index < journey.length - 1 && (
              <div className="bg-border absolute top-1/2 -right-2 hidden h-px w-4 lg:block" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
