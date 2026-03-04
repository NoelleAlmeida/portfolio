export function AboutSection() {
  return (
    <section id="sobre" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <p className="text-primary mb-2 text-xs font-medium tracking-widest uppercase">
          Sobre mim
        </p>
        <h2 className="text-foreground text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Constru&iacute;ndo meu caminho no desenvolvimento web
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Main about card */}
        <div className="border-border bg-card rounded-2xl border p-6 sm:p-8 lg:col-span-3">
          <p className="text-muted-foreground mb-5 text-base leading-relaxed">
            Sou uma desenvolvedora em forma&ccedil;&atilde;o, com foco em me
            tornar cada vez mais uma profissional{" "}
            <span className="text-foreground font-semibold">full stack</span>.
            Estou estudando bastante, praticando todos os dias e criando
            projetos reais para aprender de forma consistente e aplicar na
            pr&aacute;tica tudo o que venho estudando.
          </p>

          <p className="text-muted-foreground text-base leading-relaxed">
            Meu objetivo &eacute; evoluir continuamente no desenvolvimento web,
            fortalecendo minha base no front-end e avan&ccedil;ando cada vez
            mais no caminho para atuar como desenvolvedora full stack,
            construindo solu&ccedil;&otilde;es completas, bem estruturadas e
            funcionais.
          </p>
        </div>

        {/* Objective card */}
        <div className="border-primary/20 bg-primary/5 rounded-2xl border p-6 sm:p-8 lg:col-span-2">
          <h3 className="text-foreground mb-4 text-lg font-bold">
            Objetivo profissional
          </h3>

          <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
            Busco crescer como desenvolvedora full stack, estudando bastante,
            criando projetos pr&aacute;ticos e transformando conhecimento em
            experi&ecirc;ncia real.
          </p>

          <div className="space-y-2.5">
            {[
              { label: "Foco", value: "Evolu\u00e7\u00e3o com projetos reais" },
              { label: "Estudos", value: "React, TS, Tailwind & Next.js" },
              {
                label: "Dire\u00e7\u00e3o",
                value: "Desenvolvimento full stack",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="border-border bg-background/50 rounded-xl border px-4 py-3"
              >
                <span className="text-primary text-xs font-medium">
                  {item.label}
                </span>
                <p className="text-foreground mt-0.5 text-sm font-medium">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
