import React, { ReactNode } from 'react';

interface CardGroupProps {
  children: ReactNode;
  gap?: number; // gap in px, default 16
  row?: boolean; // if true, use flex-row
}

const CardGroup: React.FC<CardGroupProps> = ({ children, gap = 16, row = false }) => {
  return (
    <div
      className={`flex w-full ${row ? 'flex-row items-start flex-wrap' : 'flex-col'}`}
      style={{ gap: `${gap}px` }}
    >
      {children}
    </div>
  );
};

export default CardGroup;
