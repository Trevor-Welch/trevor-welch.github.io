import React from 'react';
import { useScrambleText } from '../../hooks/useScrambleText';

interface ScrambledTextProps {
  text: string;
  delay?: number;
  scrambleRounds?: number;
  initialDelay?: number;
}

export function ScrambledText({
  text,
  delay = 20,
  scrambleRounds = 2,
  initialDelay = 0,
}: ScrambledTextProps) {
  const scrambled = useScrambleText(text, delay, scrambleRounds, initialDelay);

  return <>{scrambled}</>;
}
