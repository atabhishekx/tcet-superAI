"use client";
import { Moon, Sun } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return true;

  try {
    const storedTheme = window.localStorage.getItem("superai-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return true;
  }
}

export function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    const nextTheme = dark ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;

    try {
      window.localStorage.setItem("superai-theme", nextTheme);
    } catch {
      // Ignore storage errors in restricted environments
    }
  }, [dark]);

  function toggle() {
    setDark((prev) => !prev);
  }

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}
