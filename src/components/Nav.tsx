"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Primary navigation component. Renders a responsive navigation bar
 * with links to the main sections of the site. The current route is
 * highlighted via an underline for better orientation.
 */
export default function Nav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-30 backdrop-blur supports-backdrop-blur:bg-background/80 border-b border-border">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          Sherzodbek Akhmadjonov
        </Link>
        <ul className="flex space-x-4 text-sm font-medium">
          {links.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`hover:underline-offset-4 hover:underline transition-colors ${isActive ? "underline" : "no-underline"}`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}