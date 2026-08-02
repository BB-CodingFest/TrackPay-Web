"use client";

import { useState } from "react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#team", label: "Team" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy/85 border-b border-brand/7 w-full">
      <div className="flex h-16 items-center justify-between max-w-6xl px-4 sm:px-8 mx-auto">
        <div className="flex gap-2.5 items-center">
          <img src="/icons/logo.svg" alt="TrackPay" className="size-9" />
          <span className="font-heading font-bold text-xl">TrackPay</span>
        </div>

        <nav className="hidden md:flex gap-8 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#get-started"
          className="hidden md:inline-flex bg-brand text-navy font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`block h-0.5 w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-brand/7 px-4 sm:px-8 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get-started"
            onClick={() => setOpen(false)}
            className="bg-brand text-navy font-semibold text-sm px-5 py-2 rounded-full text-center"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
