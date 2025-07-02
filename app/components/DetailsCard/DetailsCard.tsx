'use client';

import React, { ReactNode } from 'react';
import styles from './DetailsCard.module.css';

interface DetailsCardProps {
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ title, note, children, className = ''}) => {
  // Wrap each top-level child in a section with a divider (except the first one)
  const childrenArray = React.Children.toArray(children);

  return (
    <div className={`DetailsCard relative w-full min-h-[400px] bg-[var(--color-bg)] text-[var(--color-text)] shadow-md overflow-hidden ${className}`}>
      {/* Title bar */}
      <div className="bg-[var(--color-text)] text-[var(--color-bg)] px-6 py-3 text-lg tracking-widest">
        {title}
      </div>

      {/* Content area */}
      <div className={`p-6 pb-16 flex flex-col gap-6 ${styles.detailsCardContent}`}>
        {childrenArray.map((child, index) => (
          <div key={index} className={`${index > 0 ? 'pt-6 border-t border-[#b7b09a]' : ''}`}>
            {child}
          </div>
        ))}
      </div>

      {/* Note in bottom-right */}
      {note && (
        <div className="absolute bottom-4 right-6 text-sm text-[#b7b09a]">
          {note}
        </div>
      )}
    </div>
  );
};

export default DetailsCard;
