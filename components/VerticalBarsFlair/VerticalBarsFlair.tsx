'use client'
import animations from '@/styles/animations.module.css';
import styles from './VerticalBarsFlair.module.css';

type VerticalBarsFlairProps = {
  variant?: '' | 'faded';
  animation?: 'stretchIn' | 'fadeInFromRight';
  animationDelay?: number | string; // e.g. 200, "200ms", "0.4s"
};

export default function VerticalBarsFlair({
  variant = '',
  animation = 'stretchIn',
  animationDelay = 0,
}: VerticalBarsFlairProps) {
  return (
    <div
      className={`
        ${styles.container}
        ${variant && styles[variant]}
        ${animation && animations[animation]}
      `}
      style={{ 'animationDelay': typeof animationDelay === 'number' ? `${animationDelay}ms` : animationDelay } as React.CSSProperties}
    >
      <div className={styles.barLarge} />
      <div className={styles.barSmall} />
    </div>
  );
}
