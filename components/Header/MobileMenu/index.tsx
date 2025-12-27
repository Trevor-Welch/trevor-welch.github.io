'use client';
import { useState, useEffect, useRef } from 'react';
import HamburgerButton from './HamburgerButton';
import MobileMenuDrawer from './MobileMenuDrawer';
import { MOBILE_NAVIGATION_MENU_ITEMS } from '@/config/navigation';
import styles from './MobileMenu.module.css';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Update circle position when opening
  useEffect(() => {
    if (isOpen && buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setCirclePos({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
  }, [isOpen]);

  // Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={styles.mobileMenuContainer}>
      <HamburgerButton 
        isOpen={isOpen} 
        onClick={handleToggle} 
        ref={buttonRef} 
      />
      <MobileMenuDrawer
        isOpen={isOpen}
        circlePos={circlePos}
        menuItems={MOBILE_NAVIGATION_MENU_ITEMS}
        onClose={handleClose}
      />
    </div>
  );
}