'use client';
import { useState, useEffect } from 'react';
import styles from './SimpleColumnsLayout.module.css';

interface SimpleColumnsLayoutProps {
  leftSlot: React.ReactNode;
  rightSlot: React.ReactNode;
  className?: string;
  reverseLayout?: boolean;
}

export default function SimpleColumnsLayout({ 
  leftSlot, 
  rightSlot, 
  className = '',
  reverseLayout = false 
}: SimpleColumnsLayoutProps) {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    // Show left panel immediately
    setShowLeft(true);
    
    // Show right panel after delay
    const timer = setTimeout(() => {
      setShowRight(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.container} ${className}`}
    >
      <div 
        className={`${styles.leftColumn} ${showLeft ? styles.fadeSlideIn : styles.hidden}`}
      >
        {leftSlot}
      </div>

      <div 
        className={`${styles.rightColumn} ${showRight ? styles.fadeSlideIn : styles.hidden}`}
        style={{ animationDelay: '0.2s', opacity: 0 }}
      >
        {rightSlot}
      </div>
    </div>
  );
}