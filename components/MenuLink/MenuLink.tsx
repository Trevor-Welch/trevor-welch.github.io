// components/MenuLink/MenuLink.tsx
'use client';
import { useState, useEffect } from 'react';
import styles from './MenuLink.module.css';
import ScrambledText from '../ScrambledText/ScrambledText';
import SelectorIcon from '../icons/SelectorIcon';

interface MenuLinkProps {
  label: string;
  active?: boolean;
  animationDelay?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  scrambleText?: boolean;
  showSelector?: boolean;
  invertSelectorDiamond?: boolean;
  variant?: 'default' | 'submenu';
  transparentBackground?: boolean;
  disableFade?: boolean;
  smaller?: boolean;
}

export default function MenuLink({
  label,
  active = false,
  animationDelay = 0,
  onClick,
  onMouseEnter,
  onMouseLeave,
  scrambleText = false,
  showSelector = false,
  invertSelectorDiamond = false,
  variant = 'default',
  transparentBackground = false,
  disableFade = false,
}: MenuLinkProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const shouldAnimate = hasMounted && variant !== 'submenu' && !disableFade;

  const handleMouseEnter = () => {
    setIsHovered(true);
    onMouseEnter?.();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onMouseLeave?.();
  };

  return (
    <div
      className={`${styles['menu-link-wrapper']} ${shouldAnimate ? styles.animate : styles.dontAnimate}`}
      style={{ 
        '--delay': `${animationDelay}s`,
      } as React.CSSProperties}
      data-variant={variant}
    >
      {/* Selector SVG */}
      {showSelector && (
        <div className={styles.selector}>
          <SelectorIcon 
            size={28} 
            isHovered={isHovered} 
            isActive={active} 
            invertSelectorDiamond={invertSelectorDiamond} 
          />
        </div>
      )}

      <div
        className={`${styles['menu-link']} ${active ? styles.active : ''}`}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-variant={variant}
        data-transparent={transparentBackground}
      >
        <span className={styles['menu-link-bg']} />
        <span className={styles.squareIndicator} />
        
        {scrambleText ? (
          <ScrambledText
            text={label}
            delay={20}
            scrambleRounds={2}
            initialDelay={animationDelay * 1000}
          />
        ) : (
          label
        )}

        <div className={styles['border-top']} />
        <div className={styles['border-bottom']} />
        
        {active && <span className={styles.activeBox} />}
      </div>
    </div>
  );
}