// /components/Header/MobileMenu/HamburgerButton.tsx
'use client';
import { forwardRef } from 'react';
import styles from './MobileMenu.module.css';

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ isOpen, onClick }, ref) => {
    return (
      <div className={styles.hamburgerWrapper}>
        <button
          ref={ref}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
          onClick={onClick}
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
    );
  }
);

HamburgerButton.displayName = 'HamburgerButton';

export default HamburgerButton;