'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';
import styles from './Nav.module.css';

export const Nav = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Prevent hydration mismatch — only render theme UI after mount
  useEffect(() => {
    const handleMount = () => setMounted(true);

    if (!mounted) {
      handleMount();
    }
  });

  // Close mobile menu when clicking outside the nav
  useEffect(() => {
    if (!menuOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      ref={navRef}
      role='navigation'
      aria-label='Main navigation'
      className={styles.nav}
    >
      {/* Logo */}
      <Link
        href='#'
        onClick={() => {
          closeMenu();
          scrollToTop();
        }}
        aria-label='Gabrielle Ford — back to top'
        className={styles.logo}
      >
        Gabrielle Ford
      </Link>

      {/* Right side: links + theme toggle + hamburger */}
      <div className={styles.right}>
        {/* Desktop links */}
        <ul
          className={styles.links}
          role='list'
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Theme toggle — mounted guard prevents hydration flash */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            aria-pressed={isDark}
            className={styles.themeToggle}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
            <span>{isDark ? 'Light' : 'Dark'}</span>
          </button>
        )}

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          aria-expanded={menuOpen}
          aria-controls='mobile-nav'
          className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </button>
      </div>

      {/* Mobile dropdown — always rendered so CSS transition can animate it */}
      <div
        id='mobile-nav'
        role='dialog'
        aria-modal='false'
        aria-label='Mobile navigation'
        aria-hidden={!menuOpen}
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
