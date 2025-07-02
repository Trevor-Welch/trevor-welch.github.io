'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './HeaderLink.module.css';

interface HeaderLinkProps {
  href: string;
  children: React.ReactNode;
  animationDelay?: number;
  onClick?: () => void;
  hideActiveBox?: boolean;
}

export default function HeaderLink({
  href,
  animationDelay = 0,
  children,
  onClick,
  hideActiveBox
}: HeaderLinkProps) {
  const pathname = usePathname();
  const hasAnimatedRef = useRef(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!hasAnimatedRef.current) {
      setAnimate(true);
      hasAnimatedRef.current = true;
    }
  }, []);

  const normalizePath = (path: string) => path.replace(/\/+$/, '') || '/';
  const isActive = normalizePath(pathname) === normalizePath(href);

  // Wrapper container classes: fade-in animation once on mount
  const wrapperClassNames = [
    styles['menu-link-wrapper'],
    animate ? styles.animate : '',
  ].filter(Boolean).join(' ');

  // Link classes: just active or normal (no animation here)
  const linkClassNames = [
    styles['menu-link'],
    isActive ? styles.active : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={wrapperClassNames}
      style={{ '--delay': `${animationDelay}s` } as React.CSSProperties}
    >
      <Link href={href} className={linkClassNames} onClick={onClick}>
        {!isActive && <span className={styles['menu-link-bg']} />}
        {children}
        <div className={styles['border-top']} />
        <div className={styles['border-bottom']} />
        {!hideActiveBox && isActive && <span className={styles.activeBox} />}
      </Link>
    </div>
  );
}
