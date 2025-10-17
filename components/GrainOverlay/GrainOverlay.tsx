// components/GrainOverlay/GrainOverlay.tsx

'use client';

import { useEffect, useRef } from 'react';
import styles from './GrainOverlay.module.css';

export default function GrainOverlay() {

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrain = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        const gray = Math.floor(Math.random() * 255);
        const alpha = 0x15; // ~8% opacity
        buffer[i] = (alpha << 24) | (gray << 16) | (gray << 8) | gray;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let timeoutId: NodeJS.Timeout;

    const loop = () => {
      drawGrain();
      timeoutId = setTimeout(loop, 150);
    };

    resizeCanvas();
    loop();

    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className={styles.grainCanvas} aria-hidden="true"/>
      <div className={styles.vignette} aria-hidden="true"/>
    </>
  );
};
