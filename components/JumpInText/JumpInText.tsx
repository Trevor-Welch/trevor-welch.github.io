// components/JumpInText/JumpInText.tsx
'use client';
import { motion } from 'framer-motion';
import React from 'react';

interface JumpInTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: string;
  delayStep?: number;
  staggerDelay?: number;
}

export default function JumpInText({
  text,
  as: Component = 'span',
  className = '',
  delayStep = 0.05,
  staggerDelay = 0,
}: JumpInTextProps) {

  if (!text) {
    return null;
  }
  
  const chars = text.split('');

  return (
    <Component className={className} aria-label={text}>
      {chars.map((char, index) => {
        const delay = index * delayStep + staggerDelay;
        return (
          <motion.span
            key={`char-${index}`}
            initial={{ opacity: 0, scale: 0.85, x: 8 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              delay,
              duration: 0.4,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{ display: 'inline-block' }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        );
      })}
    </Component>
  );
}