'use client';
import { useEffect, useRef } from 'react';

interface UseStaticGlitchEffectOptions {
  particleCount?: number;
  spawnInterval?: number;
  particleLifetime?: number;
  spreadRadius?: number;
  minSize?: number;
  maxSize?: number;
    zIndex?: number;
}

const grayScale = [
  '#ebebeb',
  '#dbdbdb',
  '#bbbbbb',
  '#949494',
  '#6e6e6e',
  '#494949',
  '#3d3d3d',
  '#2a2a2a'
];

export function useStaticGlitchEffect(options: UseStaticGlitchEffectOptions = {}) {
  const {
    particleCount = 2,
    spawnInterval = 80,
    particleLifetime = 240,
    spreadRadius = 100,
    minSize = 3,
    maxSize = 15,
    zIndex = 99
  } = options;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Ensure wrapper has position relative for absolute children
    wrapper.style.position = 'relative';
    wrapper.style.display = 'inline-block'; // Shrink-wrap to content

    const createParticle = () => {
      const particle = document.createElement('div');
      
      const size = Math.random() * (maxSize - minSize) + minSize;
      const offsetX = (Math.random() - 0.5) * spreadRadius;
      const offsetY = (Math.random() - 0.5) * spreadRadius;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mousePos.current.x + offsetX}px`;
      particle.style.top = `${mousePos.current.y + offsetY}px`;
      particle.style.background = grayScale[Math.floor(Math.random() * grayScale.length)];
      particle.style.opacity = `${Math.random() * 0.65}`;
      particle.style.position = 'absolute';
      particle.style.pointerEvents = 'none';
      particle.style.zIndex = `${zIndex}`;
      
      wrapper.appendChild(particle);
      
      setTimeout(() => particle.remove(), particleLifetime);
    };

    const handleMouseEnter = () => {
      intervalRef.current = setInterval(() => {
        for (let i = 0; i < particleCount; i++) {
          createParticle();
        }
      }, spawnInterval);
    };

    const handleMouseLeave = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = wrapper.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    wrapper.addEventListener('mouseenter', handleMouseEnter);
    wrapper.addEventListener('mouseleave', handleMouseLeave);
    wrapper.addEventListener('mousemove', handleMouseMove);

    return () => {
      wrapper.removeEventListener('mouseenter', handleMouseEnter);
      wrapper.removeEventListener('mouseleave', handleMouseLeave);
      wrapper.removeEventListener('mousemove', handleMouseMove);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [particleCount, spawnInterval, particleLifetime, spreadRadius, minSize, maxSize]);

  return wrapperRef;
}