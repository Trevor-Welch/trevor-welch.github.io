import { useState, useEffect } from 'react';
import styles from './MenuLink.module.css';
import { ScrambledText } from '../ScrambledText/ScrambledText'; // adjust path

interface MenuLinkProps {
  label: string;
  active?: boolean;
  animationDelay?: number;
  onClick?: () => void;
  onMouseEnter?: () => void;
  scrambleText?: boolean;
}

export default function MenuLink({
  label,
  active = false,
  animationDelay = 0,
  onClick,
  onMouseEnter,
  scrambleText = false,
}: MenuLinkProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const wrapperClassNames = [styles['menu-link-wrapper']];
  if (hasMounted) wrapperClassNames.push(styles.animate);

  const linkClassNames = [styles['menu-link']];
  if (active) linkClassNames.push(styles.active);

  return (
    <div
      className={wrapperClassNames.join(' ')}
      
      style={{ '--delay': `${animationDelay}s` } as React.CSSProperties}
    >
      <div className={linkClassNames.join(' ')}
      onClick={onClick}
      onMouseEnter={onMouseEnter} style={{ alignItems:'center'}}>
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
