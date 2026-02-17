"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-16 border-t">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Contact</h2>

      <div className="grid gap-4 sm:grid-cols-2">
        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="rounded-xl border p-5 bg-background hover:shadow-md transition"
        >
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="font-medium mt-1 mb-4">mauryashiva060@gmail.com</p>

          <Button
            className="w-full gap-2"
            onClick={() =>
              window.open("mailto:mauryashiva060@gmail.com", "_blank")
            }
          >
            <Mail size={16} />
            Send Email
          </Button>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="rounded-xl border p-5 bg-background hover:shadow-md transition"
        >
          <p className="text-sm text-muted-foreground">Phone</p>
          <p className="font-medium mt-1 mb-4">+91 7249898729</p>

          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() => window.open("tel:+917249898729")}
          >
            <Phone size={16} />
            Call
          </Button>
        </motion.div>

        {/* GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-xl border p-5 bg-background hover:shadow-md transition"
        >
          <p className="text-sm text-muted-foreground">GitHub</p>
          <p className="font-medium mt-1 mb-4">MauryaShiva</p>

          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() =>
              window.open("https://github.com/MauryaShiva", "_blank")
            }
          >
            <Github size={16} />
            Open GitHub
          </Button>
        </motion.div>

        {/* LinkedIn */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="rounded-xl border p-5 bg-background hover:shadow-md transition"
        >
          <p className="text-sm text-muted-foreground">LinkedIn</p>
          <p className="font-medium mt-1 mb-4">Shiva Maurya</p>

          <Button
            variant="outline"
            className="w-full gap-2"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shiva-maurya-14b14231b",
                "_blank",
              )
            }
          >
            <Linkedin size={16} />
            Open LinkedIn
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
