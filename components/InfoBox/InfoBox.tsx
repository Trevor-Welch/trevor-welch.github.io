// /components/InfoBox/InfoBox.tsx
'use client';
import { ReactNode } from 'react';
import styles from './InfoBox.module.css';

interface InfoBoxProps {
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
}

export default function InfoBox({ title, note, children, className = '' }: InfoBoxProps) {
  return (
    <div className={`${styles.infoBox} ${className}`}>
      <div className={styles.titleBar}>
        {title}
      </div>

      <div className={styles.content}>
        {children}
      </div>

      {note && (
        <div className={styles.note}>
          {note}
        </div>
      )}
    </div>
  )
}