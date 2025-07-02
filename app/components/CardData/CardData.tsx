import React from 'react';

interface CardDataProps {
  label: string;
  content: string | React.ReactNode;
}

const CardData: React.FC<CardDataProps> = ({ label, content }) => {
  return (
    <div className="flex flex-row justify-between items-start w-full gap-4">
      <span className="font-medium text-[var(--color-text)]">{label}</span>
      <span className="text-right max-w-[70%] break-words text-[var(--color-text)]">
        {content}
      </span>
    </div>
  );
};

export default CardData;
