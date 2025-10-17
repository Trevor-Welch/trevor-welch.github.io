import React from 'react';

interface CardDataProps {
  label: string;
  content: string | React.ReactNode;
}

const CardData: React.FC<CardDataProps> = ({ label, content }) => {
  return (
    <div className="flex flex-col justify-between items-start w-full gap-1">
      <span className="font-medium text-[var(--color-text)]"><b>{label}</b></span>
      <span className="width-full break-words text-[var(--color-text)]">
        {content}
      </span>
    </div>
  );
};

export default CardData;
