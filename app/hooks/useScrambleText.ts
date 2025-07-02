import { useEffect, useState } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function getRandomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

/**
 * Scrambles text typing one letter at a time,
 * with scramble animation on the current letter.
 *
 * @param text - The final text to reveal
 * @param delay - Delay between scramble updates (ms)
 * @param scrambleRounds - How many times to scramble each letter
 * @param initialDelay - Delay before starting animation (ms)
 */
export function useScrambleText(
  text: string,
  delay = 50,
  scrambleRounds = 3,
  initialDelay = 0
) {
  const [scrambled, setScrambled] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let scrambleCount = 0;
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const startInterval = () => {
      interval = setInterval(() => {
        if (currentIndex >= text.length) {
          setScrambled(text);
          clearInterval(interval);
          return;
        }

        const revealed = text.slice(0, currentIndex);
        const scramblingChar =
          scrambleCount < scrambleRounds ? getRandomChar() : text[currentIndex];
        const rest = ' '.repeat(text.length - currentIndex - 1);

        setScrambled(revealed + scramblingChar + rest);

        scrambleCount++;

        if (scrambleCount > scrambleRounds) {
          scrambleCount = 0;
          currentIndex++;
        }
      }, delay);
    };

    if (initialDelay > 0) {
      timeout = setTimeout(() => {
        startInterval();
      }, initialDelay);
    } else {
      startInterval();
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, delay, scrambleRounds, initialDelay]);

  return scrambled;
}
