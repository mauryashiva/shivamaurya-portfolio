"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shiva-maurya-14b14231b",
    icon: <Linkedin size={20} />,
  },
  {
    name: "GitHub",
    href: "https://github.com/MauryaShiva",
    icon: <Github size={20} />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917249898729",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/themauryashiva",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298L17.607 20.65z" />
      </svg>
    ),
  },
  {
    name: "Email",
    href: "mailto:mauryashiva060@gmail.com",
    icon: <Mail size={20} />,
  },
];

export function Footer() {
  return (
    <footer className="w-full mt-auto border-t border-muted/30 bg-background py-10 pb-24 md:pb-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-center gap-4">
        {/* Social Icons Row */}
        <div className="flex items-center gap-5 text-foreground/80">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">
            © 2026 Shiva Maurya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
