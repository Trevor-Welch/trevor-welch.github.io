// /components/InfoBox/InfoBox.tsx
'use client';
import { ReactNode } from 'react';
import styles from './SocialBar.module.css';

interface SocialBarProps {
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
}

export default function SocialBar({ title, note, children, className = '' }: SocialBarProps) {
  return (
    <div className={`${styles.socialBar} ${className}`}>
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