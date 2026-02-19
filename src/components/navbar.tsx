"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Color Typing Reveal Effect */}
        <div className="relative font-bold text-lg overflow-hidden">
          {/* Base Text */}
          <span className="text-foreground">Shiva Maurya</span>

          {/* Animated Color Overlay */}
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            style={{ whiteSpace: "nowrap" }}
          >
            Shiva Maurya
          </motion.span>
        </div>

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
