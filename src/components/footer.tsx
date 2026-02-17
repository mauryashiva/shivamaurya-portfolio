export function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Shiva Maurya</p>
        <p className="mt-1">
          Full-Stack Developer • AI Engineer • Built with Next.js
        </p>
      </div>
    </footer>
  );
}
