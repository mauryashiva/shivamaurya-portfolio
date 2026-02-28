"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText, Linkedin, Twitter } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
export function Hero() {
  const [radius, setRadius] = useState(130);

  // Update radius based on screen size to keep icons on the edge
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth >= 768) {
        setRadius(160); // Desktop
      } else if (window.innerWidth >= 640) {
        setRadius(144); // SM
      } else {
        setRadius(128); // Mobile
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius);
    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  const socialIcons = [
    {
      icon: <Mail size={18} color="#EA4335" />,
      link: "mailto:mauryashiva060@gmail.com",
      hoverBg: "hover:bg-[#EA4335]/10",
    },
    {
      icon: <Twitter size={18} color="#1DA1F2" />,
      link: "https://x.com/themauryashiva",
      hoverBg: "hover:bg-[#1DA1F2]/10",
    },
    {
      icon: <Github size={18} color="#333" />,
      link: "https://github.com/mauryashiva",
      hoverBg: "hover:bg-[#333]/10",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      link: "https://wa.me/917249898729",
      hoverBg: "hover:bg-[#25D366]/10",
    },
    {
      icon: <Linkedin size={18} color="#0077B5" />,
      link: "https://www.linkedin.com/in/mauryashiva",
      hoverBg: "hover:bg-[#0077B5]/10",
    },
  ];

  const step = (2 * Math.PI) / socialIcons.length;

  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-14 md:pt-10 md:pb-20 overflow-hidden"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Section */}
        <div className="relative shrink-0">
          <div
            className="relative flex items-center justify-center
            w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80"
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-muted-foreground/20" />

            {/* Profile Image */}
            <div
              className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-56 md:h-56
                rounded-full overflow-hidden border-4 border-primary shadow-xl z-10"
            >
              <Image
                src="/profile.jpeg"
                alt="Shiva Maurya"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Icons */}
            {socialIcons.map((item, i) => {
              const angle = step * i - Math.PI / 2;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <button
                  key={i}
                  onClick={() => window.open(item.link, "_blank")}
                  className={`absolute p-2.5 rounded-full bg-background border shadow-sm hover:scale-110 transition-all duration-300 z-20 ${item.hoverBg}`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {item.icon}
                </button>
              );
            })}
          </div>
        </div>
        {/* Text Content */}
        <div className="w-full max-w-3xl space-y-5 text-center md:text-left">
          {/* Title */}
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-6xl 
             font-bold leading-snug relative inline-block"
          >
            {/* Base Text */}
            <span className="text-foreground">
              Hi, I'm <span>Shiva Maurya</span>
            </span>

            {/* Animated Color Overlay */}
            <motion.span
              className="absolute inset-0 bg-linear-to-r 
               from-indigo-500 via-pink-500 to-cyan-500 
               bg-clip-text text-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1.5,
                ease: "easeInOut",
              }}
              style={{ whiteSpace: "nowrap", overflow: "hidden" }}
            >
              Hi, I'm <span>Shiva Maurya</span>
            </motion.span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground 
             min-h-12 md:min-h-12 
             flex items-center justify-center md:justify-start
             text-center md:text-left"
          >
            <span className="block leading-tight">
              <Typewriter
                words={[
                  "Full-Stack Engineer (React, Next.js, Node.js/Express)",
                  "Machine Learning & AI Engineer",
                  "Backend & Data Engineer (Python/FastAPI, SQL & NoSQL Databases)",
                ]}
                loop
                cursor
                cursorStyle
                typeSpeed={60}
                deleteSpeed={30}
                delaySpeed={1200}
              />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-sm sm:text-base text-muted-foreground 
                       text-justify md:text-left leading-relaxed"
          >
            Building scalable full-stack and AI-powered systems using modern
            technologies like Next.js, FastAPI, Machine Learning, and real-time
            architectures. Focused on performance, clean design, and solving
            real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-nowrap gap-2 pt-3 justify-between md:justify-start"
          >
            <Button
              className="gap-2 flex-1 md:flex-none text-xs sm:text-sm"
              onClick={() =>
                window.open("mailto:mauryashiva060@gmail.com", "_blank")
              }
            >
              <Mail size={16} />
              Contact
            </Button>

            <Button
              variant="outline"
              className="gap-2 flex-1 md:flex-none text-xs sm:text-sm"
              onClick={() =>
                window.open("https://github.com/mauryashiva", "_blank")
              }
            >
              <Github size={16} />
              GitHub
            </Button>

            <Button
              variant="outline"
              className="gap-2 flex-1 md:flex-none text-xs sm:text-sm"
              onClick={() => window.open("/Shiva_Maurya_Resume.pdf", "_blank")}
            >
              <FileText size={16} />
              Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
