import Link from "next/link";
import Logo from "@/components/Logo";
import { navLinks } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={36} uid="footer" />
          <div>
            <strong>Orion Nebula</strong>
            <p className="muted">Games, design and marketing</p>
          </div>
        </div>
        <ul className="footer-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="copyright">&copy; 2026 Orion Nebula | All rights reserved.</p>
    </footer>
  );
}
