"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { navLinks } from "@/data/site";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand">
          <Logo size={38} uid="nav" />
          <span className="gradient-text">Orion Nebula</span>
        </Link>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>

        <ul className={open ? "nav-links open" : "nav-links"}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={isActive(link.href) ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
