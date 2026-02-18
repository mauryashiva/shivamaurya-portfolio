"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "Java", "C++"],
  },
  {
    title: "AI / Machine Learning",
    skills: [
      "Machine Learning",
      "Natural Language Processing",
      "Deep Learning",
      "PyTorch",
      "Scikit-Learn",
      "Speech Recognition",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn UI",
      "Framer Motion",
      "Vite",
    ],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "Express.js", "REST APIs", "WebSockets"],
  },
  {
    title: "Database",
    skills: ["MongoDB", "MySQL", "Supabase", "PostgreSQL"],
  },
  {
    title: "Tools / DevOps",
    skills: ["Git", "Docker", "Vercel", "Render", "Cloudinary"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 pt-0 pb-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">Skills</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="rounded-xl border p-5 bg-background hover:shadow-md transition"
          >
            <h3 className="font-semibold mb-4 text-lg">{group.title}</h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1 rounded-full border bg-muted hover:bg-primary hover:text-primary-foreground transition cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
