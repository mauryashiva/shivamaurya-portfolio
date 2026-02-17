"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 pt-20 pb-16">
      <div className="space-y-6">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hi, I'm <span className="text-primary">Shiva Maurya</span>
        </motion.h1>

        {/* Animated Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground"
        >
          Full-Stack Developer • AI / Machine Learning Engineer
        </motion.h2>

        {/* Animated Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-2xl text-muted-foreground"
        >
          Building scalable full-stack and AI-powered systems with modern
          technologies like Next.js, FastAPI, Machine Learning, and Real-Time
          Architecture. Focused on performance, clean design, and real-world
          problem solving.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-3"
        >
          <Button
            className="gap-2"
            onClick={() =>
              window.open("mailto:mauryashiva060@gmail.com", "_blank")
            }
          >
            <Mail size={16} />
            Contact
          </Button>

          <Button
            variant="outline"
            className="gap-2"
            onClick={() =>
              window.open("https://github.com/MauryaShiva", "_blank")
            }
          >
            <Github size={16} />
            GitHub
          </Button>

          <Button
            variant="outline"
            className="gap-2"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            <FileText size={16} />
            Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
