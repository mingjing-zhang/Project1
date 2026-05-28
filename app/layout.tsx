import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aaron Zhang — Bitcoin Engineer",
  description:
    "Aaron Zhang — Bitcoin Layer 1 engineer, OpenSats grantee, and author of Mastering Taproot. Currently rounding out backend protocol experience with modern fullstack web development.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <nav className="border-b border-zinc-200 bg-white">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-semibold tracking-tight">
              Aaron Zhang
            </Link>
            <ul className="flex gap-6 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-zinc-600 transition-colors hover:text-zinc-900"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-zinc-200">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-zinc-500 sm:flex-row">
            <span>© {new Date().getFullYear()} Aaron Zhang</span>
            <a
              href="https://github.com/aaron-recompile"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-zinc-900"
            >
              github.com/aaron-recompile
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
