// components/Header/MobileMenu/MobileMenu.tsx
'use client';

import { useState, useEffect, useRef } from 'react';

import HeaderNavLink from '../HeaderNavLink';
import MobileMenuButton from './MobileMenuButton';

import styles from './MobileMenu.module.css';

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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
    setIsClosing(false);
  };
  
  // Handle close with fade out and scroll to top
  const handleClose = () => {
    // Scroll to top instantly
    window.scrollTo(0, 0);
    
    // Start closing animation
    setIsClosing(true);
    
    // Wait for fade out animation to complete before unmounting
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 600); // Match this to the CSS animation duration
  };
  
  
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
      <MobileMenuButton
        ariaLabel="Open menu"
        onClick={handleOpen}
        className={styles.mobileMenuButtonWrapper}
      >
        <div className={styles.lineWrapper}>
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </div>
      </MobileMenuButton>
      
      {/* Overlay container with sticky positioning */}
      {isOpen && (
        <div 
          ref={overlayRef}
          className={`clampMaxWidth ${styles.overlay}`}
        >
          {/* Expanding circle from mouse position */}
          <span
            className={`${styles.expandingCircle} ${isClosing ? styles.fadeOut : ''}`}
            style={{
              top: circlePos.top,
              left: circlePos.left,
            }}
          />
          
          {/* Close button */}
          <MobileMenuButton
            ariaLabel="Close menu"
            onClick={handleClose}
            className={`${styles.mobileMenuButtonWrapper} ${styles.closePosition} ${
              isClosing ? styles.fadeOut : ''
            }`}
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
          </MobileMenuButton>

          
          {/* Navigation menu */}
          <nav
            className={`${styles.menu} ${isOpen && !isClosing ? styles.menuOpen : ''} ${isClosing ? styles.fadeOut : ''}`}
            aria-hidden={!isOpen}
          >
            {menuItems.map(({ href, label }, i) => (
              <HeaderNavLink
                key={href}
                href={href}
                animationDelay={i * 0.1 + 0.3}
                onClick={handleClose}
                hideActiveBox={true}
              >
                {label}
              </HeaderNavLink>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}