"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { name: "LinkedIn", Icon: FaLinkedin, link: "https://www.linkedin.com/in/joseph-benjamin-barrera-034a6024b/" },
  { name: "GitHub", Icon: FaGithub, link: "https://github.com/Norlant1" },
];

export default function Footer() {
  return (
    <footer className="relative w-full border-t border-line bg-background px-6 pb-10 pt-16 md:px-10 md:pt-20">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-5">Have something in mind?</p>
            <Link
              href="mailto:jobenbarrera@gmail.com"
              className="link-underline text-3xl font-medium tracking-tight text-ink sm:text-4xl md:text-5xl"
            >
              jobenbarrera@gmail.com
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {socials.map(({ name, Icon, link }) => (
              <Link
                key={name}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="-m-2.5 inline-flex p-2.5 text-muted transition-colors duration-300 hover:text-ink"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <span className="mono">© 2026 Joseph Barrera</span>
          <span className="mono hidden sm:block">Full-Stack Developer · Tarlac, Philippines</span>
          <a href="#top" className="link-underline mono text-muted transition-colors hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
