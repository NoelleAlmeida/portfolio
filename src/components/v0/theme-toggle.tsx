"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
type Theme = "dark" | "light";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) ?? "dark";
    const initial: Theme = saved === "light" ? "light" : "dark";

    setTheme(initial);
    document.documentElement.classList.toggle("light", initial === "light");
  }, []);
  function setLight() {
    setTheme("light");
    document.documentElement.classList.add("light");
    localStorage.setItem("theme", "light");
  }

  function setDark() {
    setTheme("dark");
    document.documentElement.classList.remove("light");
    localStorage.setItem("theme", "dark");
  }

  const base =
    "inline-flex h-8 w-8 items-center justify-center rounded-lg transition-colors";
  const active = "bg-primary text-primary-foreground";
  const inactive = "text-muted-foreground hover:text-foreground";
  return (
    <div className="border-border bg-secondary/50 inline-flex items-center gap-1 rounded-xl border p-1">
      <button
        type="button"
        onClick={setLight}
        className={base + " " + (theme === "light" ? active : inactive)}
        aria-label="Modo claro"
        title="Modo claro"
      >
        <Sun className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={setDark}
        className={base + " " + (theme === "dark" ? active : inactive)}
        aria-label="Modo escuro"
        title="Modo escuro"
      >
        <Moon className="h-4 w-4" />
      </button>
    </div>
  );
}
