"use client";

import { useEffect, useState } from "react";
import { Home, User, Code2, FolderGit2, Mail } from "lucide-react";

const sections = [
  { id: "top", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: Code2, label: "Skills" },
  { id: "projects", icon: FolderGit2, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function MobileNav() {
  const [active, setActive] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;

      sections.forEach((section) => {
        const el =
          section.id === "top"
            ? document.body
            : document.getElementById(section.id);

        if (!el) return;

        const offsetTop =
          section.id === "top" ? 0 : (el as HTMLElement).offsetTop;
        const height =
          section.id === "top"
            ? window.innerHeight
            : (el as HTMLElement).offsetHeight;

        if (scrollPos >= offsetTop && scrollPos < offsetTop + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur md:hidden">
      <div className="grid grid-cols-5 py-2">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = active === section.id;

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="flex flex-col items-center justify-center gap-1 py-1"
            >
              <Icon
                size={18}
                className={isActive ? "text-primary" : "text-muted-foreground"}
              />
              <span
                className={`text-[10px] ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
