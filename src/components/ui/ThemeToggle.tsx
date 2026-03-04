"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
    const { setTheme, theme, systemTheme } = useTheme();

    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />;
    }

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <button
            onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
            className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 hover:bg-violet-50 dark:hover:bg-violet-500/15 hover:border-violet-300 dark:hover:border-violet-500/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all flex items-center justify-center"
            aria-label="Toggle theme"
        >
            {currentTheme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>
    );
}
