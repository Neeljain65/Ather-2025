import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Aether 2025 - National Level Technical Conference | TCET Mumbai",
  description: "Join Aether 2025, a premier national-level technical conference at TCET Mumbai. Participate in competitions, attend expert talks, and network with innovators. Registration open for HerSpark Ideathon, Hackconquest, Paper & Poster Presentations.",
  keywords: "Aether 2025, technical conference, TCET Mumbai, hackathon, ideathon, paper presentation, poster presentation, technology, innovation, students",
  authors: [{ name: "TCET Students" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Aether 2025 - National Level Technical Conference",
    description: "Where Innovation Meets Excellence. Join us on 26 September 2025 at TCET Mumbai.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether 2025 - National Level Technical Conference",
    description: "Where Innovation Meets Excellence. Join us on 26 September 2025 at TCET Mumbai.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
