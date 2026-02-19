export function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 pt-0 pb-24">
      <div className="max-w-3xl">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-6">About Me</h2>

        {/* Content */}
        <p className="text-muted-foreground leading-relaxed text-justify md:text-left">
          I am an Information Technology student with a strong foundation in
          Python and a passion for Artificial Intelligence and Full-Stack
          development. I specialize in building intelligent, scalable
          applications using Machine Learning, Natural Language Processing, and
          real-time technologies.
        </p>

        <p className="text-muted-foreground leading-relaxed mt-4 text-justify md:text-left">
          I have developed multiple production-grade projects including an
          AI-powered Supply Chain Management System, a real-time chat
          application using WebRTC, a deep learning media classification engine,
          and intelligent analytics dashboards. My goal is to contribute as a
          Machine Learning or Full-Stack Engineer and build impactful,
          real-world systems.
        </p>
      </div>
    </section>
  );
}
