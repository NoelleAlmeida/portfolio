"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "~/components/icons";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#top"
      className={`border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary fixed right-5 bottom-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-xl border shadow-lg transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUpIcon className="h-4 w-4" />
    </a>
  );
}
