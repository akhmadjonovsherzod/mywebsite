import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Import shared layout components
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sherzodbek Akhmadjonov – Portfolio",
    template: "%s – Sherzodbek Akhmadjonov",
  },
  description:
    "Personal portfolio of Sherzodbek Akhmadjonov showcasing projects, blog posts, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Global navigation appears at the top of every page */}
        <Nav />
        {/* Render the actual page content */}
        <main className="container mx-auto px-4">{children}</main>
        {/* Global footer appears at the bottom of every page */}
        <Footer />
      </body>
    </html>
  );
}
