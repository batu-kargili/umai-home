"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Product",   href: "/#features" },
  { label: "Use Cases", href: "/#use-cases" },
  { label: "Contact",   href: "/contact" },
  { label: "Docs",      href: "/docs" },
  { label: "Blog",      href: "/blog" },
];

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-midnight/95 backdrop-blur-md border-b border-white/5 shadow-[0_4px_24px_rgba(14,13,46,0.6)]"
          : "bg-midnight"
      }`}
    >
      <Container>
        <nav className="flex h-[68px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-island-cyan to-ocean flex items-center justify-center">
              <span className="text-white font-black text-sm">U</span>
            </div>
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-island-cyan transition-colors">
              Umai
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white rounded-md hover:bg-white/5 transition-all duration-150"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="secondary" size="sm" href="/contact">
              Try UMAI
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-white/80 hover:text-white p-2"
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </Container>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden bg-midnight border-t border-white/5">
          <Container>
            <div className="py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
                <Button variant="secondary" size="md" href="/contact">
                  Try UMAI
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
