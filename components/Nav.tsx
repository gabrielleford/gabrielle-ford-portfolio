'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export const Nav = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent hydration mismatch — only render theme UI after mount
  useEffect(() => {
    const handleMount = () => setMounted(true);

    if (!mounted) {
      handleMount();
    }
  });

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
    <nav>
      {mounted && (
        <>
          <h1>Gabrielle Ford</h1>
          <p>Full Stack Web Developer</p>
          {/* Desktop Navigation */}
          {/* <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#devtools'>DevTools</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul> */}

          {/* Mobile Navigation */}
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#devtools'>DevTools</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};
