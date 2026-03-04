const skills = [
  { name: "HTML", category: "core" },
  { name: "CSS", category: "core" },
  { name: "JavaScript", category: "core" },
  { name: "TypeScript", category: "core" },
  { name: "React", category: "framework" },
  { name: "Next.js", category: "framework" },
  { name: "Tailwind CSS", category: "styling" },
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
];

export function TechSection() {
  return (
    <section id="tecnologias" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-primary mb-2 text-xs font-medium tracking-widest uppercase">
          Tech Stack
        </p>
        <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Tecnologias & ferramentas
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl">
          Tecnologias que estou estudando e aplicando nos meus projetos.
        </p>
      </div>

      <div className="border-border bg-card rounded-2xl border p-6 sm:p-8">
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`animate-fade-up group border-border bg-secondary/20 hover:border-primary/30 hover:bg-primary/5 flex items-center gap-3 rounded-xl border px-4 py-3 transition-all duration-300`}
              style={{ animationDelay: `${index * 60 + 200}ms` }}
            >
              <span className="bg-primary/10 text-primary group-hover:bg-primary/20 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold transition-colors">
                {skill.name.slice(0, 2).toUpperCase()}
              </span>
              <div>
                <p className="text-foreground text-sm font-medium">
                  {skill.name}
                </p>
                <p className="text-muted-foreground text-xs capitalize">
                  {skill.category === "core"
                    ? "Fundamento"
                    : skill.category === "framework"
                      ? "Framework"
                      : skill.category === "styling"
                        ? "Estiliza\u00e7\u00e3o"
                        : "Ferramenta"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
