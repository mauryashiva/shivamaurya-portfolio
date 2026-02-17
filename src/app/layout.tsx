import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Shiva Maurya | Full Stack & AI Developer",
    template: "%s | Shiva Maurya",
  },
  description:
    "Portfolio of Shiva Maurya — Full Stack Developer and AI Engineer specializing in Next.js, FastAPI, Machine Learning, Real-Time Systems, and scalable web applications.",
  keywords: [
    "Shiva Maurya",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "FastAPI Developer",
    "Machine Learning",
    "MERN Stack",
    "React Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Shiva Maurya" }],
  creator: "Shiva Maurya",
  metadataBase: new URL("https://your-domain.vercel.app"), // update after deploy
  openGraph: {
    title: "Shiva Maurya | Full Stack & AI Developer",
    description:
      "Explore the portfolio of Shiva Maurya — Full Stack Developer and AI Engineer building real-world scalable applications.",
    url: "https://your-domain.vercel.app",
    siteName: "Shiva Maurya Portfolio",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
