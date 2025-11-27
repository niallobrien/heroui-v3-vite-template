import { Link } from "@heroui/react";
import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, DiscordIcon } from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-divider bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-2" href="/">
              <Logo />
              <p className="font-bold text-inherit">ACME</p>
            </Link>
            <div className="hidden gap-6 lg:flex">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  className="text-foreground transition-colors hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <div className="hidden gap-2 sm:flex">
              <a
                aria-label="Twitter"
                className="text-default-500 transition-colors hover:text-foreground"
                href={siteConfig.links.twitter}
                rel="noopener noreferrer"
                target="_blank"
              >
                <TwitterIcon />
              </a>
              <a
                aria-label="Discord"
                className="text-default-500 transition-colors hover:text-foreground"
                href={siteConfig.links.discord}
                rel="noopener noreferrer"
                target="_blank"
              >
                <DiscordIcon />
              </a>
              <a
                aria-label="GitHub"
                className="text-default-500 transition-colors hover:text-foreground"
                href={siteConfig.links.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <GithubIcon />
              </a>
              <ThemeSwitch />
            </div>
            <button
              aria-label="Toggle menu"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-2 lg:hidden">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                className="block py-2 text-foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
