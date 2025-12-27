// /components/Header/MobileMenu/MobileMenuDrawer.tsx

'use client';
import { useState } from 'react';
import HeaderLink from '../../HeaderNavLink/HeaderNavLink';
import styles from './MobileMenu.module.css';

interface MobileMenuDrawerProps {
  isOpen: boolean;
  circlePos: { top: number; left: number };
  menuItems: Array<{ href: string; label: string }>;
  onClose: () => void;
}

export default function MobileMenuDrawer({ 
  isOpen, 
  circlePos, 
  menuItems, 
  onClose 
}: MobileMenuDrawerProps) {
  const [circleAnimating, setCircleAnimating] = useState(false);

  // Trigger circle animation when opening
  useState(() => {
    setCircleAnimating(isOpen);
  });

  return (
    <>
      {/* Expanding circle */}
      {circleAnimating && (
        <span
          className={styles.expandingCircle}
          style={{
            top: circlePos.top,
            left: circlePos.left,
          }}
          onAnimationEnd={() => setCircleAnimating(false)}
        />
      )}
      
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
            onClick={onClose}
            hideActiveBox={true}
          >
            {label}
          </HeaderLink>
        ))}
      </nav>
    </>
  );
}