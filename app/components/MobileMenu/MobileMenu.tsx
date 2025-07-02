'use client';

import { useState, useEffect, useRef } from 'react';
import HeaderLink from '../HeaderLink/HeaderLink';
import styles from './MobileMenu.module.css';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [circleAnimating, setCircleAnimating] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Track button center for expanding circle position
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });

  // Update circle position on open/close
  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCirclePos({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
  }, [isOpen]);

  // Lock scroll when menu is open & toggle circle animation
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    setCircleAnimating(isOpen);
  }, [isOpen]);

  return (
    <div className={styles.mobileMenuContainer}>
        
      {/* Hamburger/Close button */}
      <div className={styles.hamburgerWrapper}>
        
        <button
        ref={buttonRef}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        >
        <div className={styles.lineWrapper}>
            <span className={styles.line}  />
            <span className={styles.line}  />
            <span className={styles.line}  />
        </div>
        
        </button>
        <div className={styles.borderTop} />
        <div className={styles.borderBottom} />
        
    </div>
    
    

      {/* Expanding circle from button center */}
      {circleAnimating && (
        <span
          className={styles.expandingCircle}
          style={{
            top: circlePos.top,
            left: circlePos.left,
          }}
          onAnimationEnd={() => {
            // Optional: handle after circle expands (if needed)
          }}
        />
      )}

      {/* Navigation menu with fade-in */}
      <nav
        className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
        aria-hidden={!isOpen}
      >
        {menuItems.map(({ href, label }, i) => (
          <HeaderLink
            key={href}
            href={href}
            animationDelay={i * 0.1 + 0.3}
            onClick={() => setIsOpen(false)}
            hideActiveBox={true}
        >
            {label}
        </HeaderLink>
        ))}
      </nav>
    </div>
  );
}
