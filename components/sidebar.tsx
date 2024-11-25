"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Mail } from "lucide-react";

const navItems = [
  { name: "home", href: "/" },
  { name: "experience", href: "/experience" },
  { name: "projects", href: "/projects" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative h-screen">
      {/* Vertical line */}
      {/*    */}

      <nav className="absolute left-0 flex h-full flex-col items-center nav">
        <ul className="relative flex w-28 max-h-[750px] flex-col z-10 list-inside justify-around h-[70%] list-disc top-1/2 translate-y-1/2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.name}
                className={`relative top-[-5px] transition-colors cursor-pointer ease-in-out ${
                  isActive
                    ? "text-foreground before:left-[-33px] before:text-foreground is-active"
                    : "text-muted-foreground"
                } text-xs`}
              >
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative top-[3px] left-2.5 text-foreground text-sm font-light"
                  )}
                >
                  <span className={cn(isActive ? "opacity-100" : "opacity-35")}>
                    {item.name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="absolute bottom-8 left-4 right-4">
        <div className="flex gap-2">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-white/50 hover:text-white"
          >
            <Github className="mr-2 h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm text-white/50 hover:text-white"
          >
            <Linkedin className="mr-2 h-4 w-4" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="flex items-center text-sm text-white/50 hover:text-white"
          >
            <Mail className="mr-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
