"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client.
  // Setting mounted to true ensures we only render theme-dependent UI on the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  // While the component is not mounted, render a placeholder
  // with the same dimensions to maintain layout stability.
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" disabled>
        <div className="h-4.5 w-4.5" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      title="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={18} className="transition-all" />
      ) : (
        <Moon size={18} className="transition-all" />
      )}
    </Button>
  );
}
