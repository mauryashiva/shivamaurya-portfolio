"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <h1 className="font-bold text-lg">Shiva Maurya</h1>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
