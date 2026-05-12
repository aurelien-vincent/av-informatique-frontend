"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";

const navLinks = [
  {
    label: "Accueil",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "À propos",
    href: "/a-propos",
  },
  {
    label: "Réalisations",
    href: "/realisations",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={100}
            height={100}
            loading="eager"
          />

          <span className={styles.logoText}>
            <strong>AV Informatique</strong>
            <small>Dépannage & formation</small>
          </span>
        </Link>

        <button
          type="button"
          className={styles.burgerButton}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          aria-label="Ouvrir ou fermer le menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
          <span className={styles.burgerLine}></span>
        </button>

        <div
          className={`${styles.navContent} ${
            isMenuOpen ? styles.navContentOpen : ""
          }`}
        >
          <ul className={styles.navLinks}>
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`${styles.navLink} ${
                      isActive ? styles.navLinkActive : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className={styles.ctaButton}
            onClick={closeMenu}
          >
            Demander un devis
          </Link>
        </div>
      </nav>
    </header>
  );
}
