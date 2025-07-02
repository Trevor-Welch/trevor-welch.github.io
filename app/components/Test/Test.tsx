'use client';

import { useScrambleText } from '../../hooks/useScrambleText';

export default function TestScramble() {
  const scrambled = useScrambleText('Hello World', 20, 3, 500);

  return <p style={{ fontFamily: 'monospace' }}>{scrambled}</p>;
}
