// components/NestedContainers/InfoBox.tsx
'use client';
import { ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './InfoBox.module.css';

interface InfoBoxProps {
  title: string;
  children: ReactNode;
  showTitleIndicator?: boolean;
  showDecorators?: boolean;
  height?: number;
  visible?: boolean;
  className?: string;
}

export interface InfoBoxRef {
  scrollToTop: () => void;
}

const InfoBox = forwardRef<InfoBoxRef, InfoBoxProps>(({
  title,
  children,
  showDecorators = false,
  height,
  visible = true,
  className = ''
}, ref) => {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      scrollWrapperRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }));

  return (
    <div
      className={`${styles.infoBox} ${visible ? styles.visible : styles.hidden} ${className}`}
      style={{
        height: height ? `${height}px` : 'auto',
      }}
    >
      <div className={styles.titleBar}>
        {title}
      </div>

      <div className={styles.contentWrapper}>
        {showDecorators && (
          <>
            <div className={styles.upperLine} />
            <div className={styles.upperDot} />
          </>
        )}
        
        <div className={styles.scrollWrapper} ref={scrollWrapperRef}>
          <div className={styles.scrollContent}>
            {children}
          </div>
        </div>
        
        {showDecorators && (
          <>
            <div className={styles.lowerDot} />
            <div className={styles.lowerLine} />
          </>
        )}
      </div>
    </div>
  );
});

InfoBox.displayName = 'InfoBox';

export default InfoBox;