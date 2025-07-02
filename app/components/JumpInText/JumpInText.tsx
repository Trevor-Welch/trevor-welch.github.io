'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface JumpInTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'span' | 'div' | 'p';
  delayStep?: number;
}

const JumpInText: React.FC<JumpInTextProps> = ({
  text,
  className = '',
  as: Tag = 'span',
  delayStep = 0.05,
}) => {
  const elements: React.ReactNode[] = [];
  let charIndex = 0;

  // Split the text by <br> but retain structure
  const parts = text.split(/(<br\s*\/?>)/i); // keep <br> tags in the array

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (/<br\s*\/?>/i.test(part)) {
      // It's a <br>, just insert a line break
      elements.push(<br key={`br-${i}`} />);
    } else {
      // It's regular text, animate each letter
      for (let j = 0; j < part.length; j++) {
        const char = part[j];
        elements.push(
          <motion.span
            key={`char-${charIndex}`}
            initial={{ opacity: 0, scale: 0.85, x: 8 }}
            animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            transition={{
              delay: charIndex * delayStep,
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
        charIndex++;
      }
    }
  }

  return React.createElement(Tag, { className: `tracking-wider ${className}` }, elements);
};

export default JumpInText;
