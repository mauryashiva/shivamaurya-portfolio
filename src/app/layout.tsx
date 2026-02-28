import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://shivamaurya.in"),

  title: {
    default: "Shiva Maurya | Full Stack Developer & AI Engineer",
    template: "%s | Shiva Maurya",
  },

  description:
    "Shiva Maurya is a Full Stack Developer and AI Engineer specializing in Next.js, FastAPI, Machine Learning, and scalable real-time applications.",

  keywords: [
    "Shiva Maurya",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js Developer",
    "FastAPI Developer",
    "Machine Learning Engineer",
    "React Developer",
    "Portfolio",
  ],

  authors: [{ name: "Shiva Maurya" }],
  creator: "Shiva Maurya",

  /* Google Search Console Verification */
  verification: {
    google: "hnBrxWt8yxOYPpmL9phrnafil1PuppbzS5_aJ_y9a3k",
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Shiva Maurya | Full Stack Developer & AI Engineer",
    description:
      "Portfolio of Shiva Maurya showcasing AI, Full-Stack and Machine Learning projects.",
    url: "https://shivamaurya.in",
    siteName: "Shiva Maurya Portfolio",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Shiva Maurya",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shiva Maurya | Full Stack Developer",
    description:
      "Portfolio of Shiva Maurya showcasing AI and Full Stack projects.",
    images: ["/profile.jpeg"],
    creator: "@themauryashiva",
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
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shiva Maurya",
    url: "https://shivamaurya.in",
    image: "https://shivamaurya.in/profile.jpeg",
    sameAs: [
      "https://github.com/mauryashiva",
      "https://www.linkedin.com/in/mauryashiva/",
      "https://x.com/themauryashiva",
    ],
    jobTitle: "Full Stack Developer",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex flex-col min-h-screen flex-1">{children}</main>

          {/* Google Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personSchema),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
