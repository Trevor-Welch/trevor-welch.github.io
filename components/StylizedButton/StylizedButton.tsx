'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './StylizedButton.module.css';
import ScrambledText from '../ScrambledText/ScrambledText';
import { useStaticGlitchEffect } from '@/hooks/useStaticGlitchEffect';

interface StylizedButtonProps {
  label: string;
  href: string;
  variant?: 'light' | 'dark';
  external?: boolean;
  scrambleText?: boolean;
  active?: boolean;
  animationDelay?: number;
  block?: boolean;
  inline?: boolean;
  effect?: 'glitch' | 'none';
}

export default function StylizedButton({
  label,
  href,
  variant = 'light',
  external = false,
  scrambleText = false,
  active = false,
  animationDelay = 0,
  block = false,
  inline = false,
  effect,
}: StylizedButtonProps) {
  const [hasMounted, setHasMounted] = useState(false);
  
  const glitchRef = useStaticGlitchEffect();
  const effectRef = effect === 'glitch' ? glitchRef : null;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const wrapperClassNames = [styles['button-wrapper']];
  if (hasMounted) wrapperClassNames.push();

  const buttonClassNames = [styles.button, styles[variant]];
  if (active) buttonClassNames.push(styles.active);
  if (block) wrapperClassNames.push(styles.block);
  if (inline) wrapperClassNames.push(styles.inline);

  const linkContent = (
    <>
      <span className={styles.bg} />
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
    </>
  );

  return (
    <div
      ref={effectRef}
      className={wrapperClassNames.join(' ')}
      style={{ '--delay': `${animationDelay}s` } as React.CSSProperties}
    >
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClassNames.join(' ')}
          style={{ alignItems: 'center' }}
        >
          {linkContent}
        </a>
      ) : (
        <Link
          href={href}
          className={buttonClassNames.join(' ')}
          style={{ alignItems: 'center' }}
        >
          {linkContent}
        </Link>
      )}
    </div>
  );
}