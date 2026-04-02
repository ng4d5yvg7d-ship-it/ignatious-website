"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "About You", href: "/about-you" },
  { label: "About Us", href: "/about" },
  { label: "Capabilities", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Transactions", href: "/transactions" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-site flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-navy font-black text-xl tracking-tight hover:text-blue transition-colors"
        >
          Ignatious
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive ? "text-blue" : "text-gray-700 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-block bg-blue text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-blue-dark transition-colors"
          >
            Let&apos;s Connect
          </Link>
          <button
            className="md:hidden text-gray-700 hover:text-navy p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="container-site py-5 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm font-medium py-1 transition-colors ${
                    isActive ? "text-blue" : "text-gray-700 hover:text-navy"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="inline-block bg-blue text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center hover:bg-blue-dark transition-colors mt-2"
            >
              Let&apos;s Connect
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
