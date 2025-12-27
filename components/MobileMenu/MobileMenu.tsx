// components/MobileMenu.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import HeaderLink from '../HeaderNavLink/HeaderNavLink';
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
  const overlayRef = useRef<HTMLDivElement>(null);
  
  // Track mouse position for expanding circle
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });
  
  // Handle button click with mouse position
  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCirclePos({
      top: e.clientY,
      left: e.clientX,
    });
    setIsOpen(true);
  };
  
  // Handle close
  const handleClose = () => {
    setIsOpen(false);
  };
  
  // Toggle circle animation
  useEffect(() => {
    setCircleAnimating(isOpen);
  }, [isOpen]);
  
  // Handle scroll behavior - use position sticky instead of overflow hidden
  useEffect(() => {
    if (isOpen && overlayRef.current) {
      // Store current scroll position
      const scrollY = window.scrollY;
      overlayRef.current.style.top = `${scrollY}px`;
    }
  }, [isOpen]);
  
  return (
    <div className={styles.mobileMenuContainer}>
      {/* Hamburger button */}
      <div className={styles.hamburgerWrapper}>
        <button
          ref={buttonRef}
          aria-label="Open menu"
          className={styles.hamburger}
          onClick={handleOpen}
        >
          <div className={styles.lineWrapper}>
            <span className={styles.line} />
            <span className={styles.line} />
            <span className={styles.line} />
          </div>
        </button>
        <div className={styles.borderTop} />
        <div className={styles.borderBottom} />
      </div>
      
      {/* Overlay container with sticky positioning */}
      {isOpen && (
        <div 
          ref={overlayRef}
          className={styles.overlay}
        >
          {/* Expanding circle from mouse position */}
          {circleAnimating && (
            <span
              className={styles.expandingCircle}
              style={{
                top: circlePos.top,
                left: circlePos.left,
              }}
            />
          )}
          
          {/* Close button */}
          <div className={styles.closeButtonWrapper}>
            <button
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close menu"
            >
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 32 32" 
                fill="none"
                className={styles.closeIcon}
              >
                <path 
                  d="M24 8L8 24M8 8L24 24" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className={styles.closeBorderTop} />
            <div className={styles.closeBorderBottom} />
          </div>
          
          {/* Navigation menu */}
          <nav
            className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}
            aria-hidden={!isOpen}
          >
            {menuItems.map(({ href, label }, i) => (
              <HeaderLink
                key={href}
                href={href}
                animationDelay={i * 0.1 + 0.3}
                onClick={handleClose}
                hideActiveBox={true}
              >
                {label}
              </HeaderLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}