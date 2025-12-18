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
  variant?: string;
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
  variant = ''
}: MenuLinkProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const wrapperClassNames = [styles['menu-link-wrapper']];
  
  if (hasMounted && variant!=='submenu'){
    wrapperClassNames.push(styles.animate);
  } else {
    wrapperClassNames.push(styles.dontAnimate);
  }

  const linkClassNames = [styles['menu-link']];
  if (active) linkClassNames.push(styles.active);

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
      className={wrapperClassNames.join(' ')}
      style={{ 
        '--delay': `${animationDelay}s`,
        position: 'relative'
      } as React.CSSProperties}
    >
      {/* Selector SVG - positioned at wrapper level */}
      {showSelector && (
        <div
          className={styles.selector}
          style={{
            position: 'absolute',
            left: '-36px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SelectorIcon size={28} isHovered={isHovered} isActive={active} invertSelectorDiamond={invertSelectorDiamond} />
        </div>
      )}

      <div
        className={linkClassNames.join(' ')}
        onClick={onClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ alignItems: 'center' }}
      >
        <span 
          className={styles['menu-link-bg']} 
          style={{ 
            backgroundColor: variant == 'submenu' ? 'transparent' : undefined 
          }}
        />
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