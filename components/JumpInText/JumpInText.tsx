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
  
  // Split text into words
  const words = text.split(' ');
  let charIndex = 0;
  
  return (
    <Component className={className} aria-label={text}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        
        return (
          <span
            key={`word-${wordIndex}`}
            style={{ 
              display: 'inline-block',
              whiteSpace: 'nowrap'
            }}
          >
            {wordChars.map((char, charIndexInWord) => {
              const delay = charIndex * delayStep + staggerDelay;
              charIndex++;
              
              return (
                <motion.span
                  key={`char-${wordIndex}-${charIndexInWord}`}
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
                  {char}
                </motion.span>
              );
            })}
            {/* Add space after word (except last word) */}
            {wordIndex < words.length - 1 && '\u00A0'}
          </span>
        );
      })}
    </Component>
  );
}