// /components/HeaderNavLink/HeaderNavLink.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import {AboutIcon, HomeIcon, SelectorIcon} from '@/components/icons/';

import styles from './HeaderNavLink.module.css';

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  animationDelay?: number;
  onClick?: () => void;
  hideActiveBox?: boolean;
}

// Define the icon props type based on your icon components
interface IconProps {
  size?: number;
  variant?: 'light' | 'dark';
}

// Icon mapping based on children text
const iconMap: Record<string, React.ComponentType<IconProps>> = {
  'Home': HomeIcon,
  'About': AboutIcon,
  'Contact': SelectorIcon
};

export default function HeaderNavLink({
  href,
  animationDelay = 0,
  children,
  onClick,
  hideActiveBox
}: HeaderLinkProps) {
  const pathname = usePathname();
  const hasAnimatedRef = useRef(false);
  const [animate, setAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!hasAnimatedRef.current) {
      setAnimate(true);
      hasAnimatedRef.current = true;
    }
  }, []);

  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';
  const isActive = normalizePath(pathname) === normalizePath(href);

  // Get the icon component based on children text
  const childText = typeof children === 'string' ? children : '';
  const IconComponent = iconMap[childText] || SelectorIcon; // fallback to SelectorIcon

  // Determine variant: dark if active or hovered, light otherwise
  const iconVariant = (isActive || isHovered) ? 'dark' : 'light';

  const wrapperClassNames = [
    styles['menu-link-wrapper'],
    animate ? styles.animate : '',
  ].filter(Boolean).join(' ');

  const linkClassNames = [
    styles['menu-link'],
    isActive ? styles.active : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={wrapperClassNames}
      style={{ '--delay': `${animationDelay}s` } as React.CSSProperties}
    >
      <Link 
        href={href} 
        className={linkClassNames} 
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {!isActive && <span className={styles['menu-link-bg']} />}
        
        <span className={styles['icon-box']}>
          <IconComponent size={18} variant={iconVariant} />
        </span>
        
        {children}
        <div className={styles['border-top']} />
        <div className={styles['border-bottom']} />
        {!hideActiveBox && isActive && <span className={styles.activeBox} />}
      </Link>
    </div>
  );
}