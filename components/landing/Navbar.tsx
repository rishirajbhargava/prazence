"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled
          ? "rgba(13,13,13,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #2E2E2E" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#F5F5F5",
              letterSpacing: "-0.03em",
            }}
          >
            Pra<span style={{ color: "#FF4D00" }}>z</span>ence
          </span>
        </Link>

        {/* Desktop Nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
          className="hidden-mobile"
        >
          <style>{`
            @media (max-width: 768px) {
              .hidden-mobile { display: none !important; }
              .show-mobile { display: flex !important; }
            }
            @media (min-width: 769px) {
              .show-mobile { display: none !important; }
            }
          `}</style>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-brand"
            style={{
              padding: "10px 22px",
              borderRadius: "8px",
              fontSize: "0.9rem",
              fontWeight: 600,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            Get started
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="show-mobile"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#F5F5F5",
            padding: "4px",
            display: "none",
            flexDirection: "column",
            gap: "5px",
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: isOpen && i === 1 ? "transparent" : "#F5F5F5",
                borderRadius: "2px",
                transition: "all 0.2s ease",
                transform:
                  isOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" :
                  isOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: "#1A1A1A",
            borderTop: "1px solid #2E2E2E",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              style={{
                color: "#BBBBBB",
                textDecoration: "none",
                fontSize: "1rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-brand"
            style={{
              padding: "12px 20px",
              borderRadius: "8px",
              fontSize: "0.95rem",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            Get started
          </a>
        </div>
      )}
    </header>
  );
}
