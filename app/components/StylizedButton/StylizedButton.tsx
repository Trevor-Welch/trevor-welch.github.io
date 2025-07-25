'use client';

import { useState, useEffect } from 'react';
import styles from './StylizedButton.module.css';
import { ScrambledText } from '../ScrambledText/ScrambledText';

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
  inline = false
}: StylizedButtonProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const wrapperClassNames = [styles['button-wrapper']];
  if (hasMounted) wrapperClassNames.push();

  const buttonClassNames = [styles.button, styles[variant]];
  if (active) buttonClassNames.push(styles.active);
  if (block) wrapperClassNames.push(styles.block);
  if (inline) wrapperClassNames.push(styles.inline);

  return (
    <div
      className={wrapperClassNames.join(' ')}
      style={{ '--delay': `${animationDelay}s` } as React.CSSProperties}
    >
      <a
        href={href}
        target={external ? '_blank' : '_self'}
        rel={external ? 'noopener noreferrer' : undefined}
        className={buttonClassNames.join(' ')}
        style={{ alignItems: 'center' }}
      >
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
      </a>
    </div>
  );
}
