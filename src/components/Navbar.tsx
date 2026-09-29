"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "제품소개", href: "#products" },
  { label: "특징", href: "#features" },
  { label: "제작과정", href: "#process" },
  { label: "가맹점", href: "#branches" },
];

const SMARTSTORE_URL = "https://smartstore.naver.com/jangjackrevo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(12,11,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-new.png"
            alt="장작혁명"
            width={120}
            height={48}
            className="object-contain"
            style={{ mixBlendMode: "screen", filter: "brightness(1.2)" }}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white text-sm tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={SMARTSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2 text-sm font-bold text-white transition-colors hover:opacity-90"
            style={{ backgroundColor: "#D4611B" }}
          >
            구매하기
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 space-y-4 border-t border-white/10"
          style={{ backgroundColor: "rgba(12,11,10,0.98)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-white/80 hover:text-white text-base py-2"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={SMARTSTORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-full px-5 py-3 text-sm font-bold text-white"
            style={{ backgroundColor: "#D4611B" }}
          >
            구매하기
          </a>
        </div>
      )}
    </nav>
  );
}
