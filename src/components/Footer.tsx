import Link from "next/link";

/**
 * Site footer component. Displays copyright information and
 * social links. Feel free to extend with additional links or
 * icons. Keeps consistent spacing and dark/light mode support
 * via Tailwind's utility classes.
 */
export default function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-16 text-sm text-muted-foreground">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 space-y-4 md:space-y-0">
        <p>
          © {new Date().getFullYear()} Sherzodbek Akhmadjonov. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link
            href="https://github.com/akhmadjonovsherzod"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/sherzodbekakhmadjonov/"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
}