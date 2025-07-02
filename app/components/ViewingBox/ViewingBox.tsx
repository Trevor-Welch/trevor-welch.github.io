'use client';

import MenuLink from '../MenuLink/MenuLink';
import { useState, useEffect, useRef } from 'react';
import styles from './ViewingBox.module.css';

export interface ViewingBoxItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface ViewingBoxProps {
  items: ViewingBoxItem[];
  defaultId?: string;
  className?: string;
}

export default function ViewingBox({ items, defaultId, className = '' }: ViewingBoxProps) {
  const [activeId, setActiveId] = useState(defaultId || items[0]?.id);
  const activeItem = items.find((item) => item.id === activeId);

  const [showRightPanel, setShowRightPanel] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  const probeWidthRef = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Animation setup
  useEffect(() => {
    const totalAnimationTime = (items.length - 1) * 0.1 + 0.4;
    setShowRightPanel(false);
    setShowContent(false);
    probeWidthRef.current = null;

    const panelTimer = setTimeout(() => {
      setShowRightPanel(true);
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 300);
      return () => clearTimeout(contentTimer);
    }, totalAnimationTime * 1000);

    return () => clearTimeout(panelTimer);
  }, [items.length]);

  // ResizeObserver — for height tracking
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerSize({ width, height });
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [activeId, showContent]);

  useEffect(() => {
  if (!contentRef.current) return;

  // Reset scroll smoothly when active content changes
  contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
}, [activeId]);

  // Width probing
  useEffect(() => {
    if (!showContent) return;

    const measureWidth = () => panelRef.current?.getBoundingClientRect().width || 0;

    let probeInterval: NodeJS.Timeout | null = null;
    let lastMeasuredWidth = 0;
    let currentProbeWidth = measureWidth() || 300;

    const step = 40;
    const maxProbeWidth = 1200;

    const probeStep = () => {
      currentProbeWidth += step;
      probeWidthRef.current = currentProbeWidth;

      requestAnimationFrame(() => {
        const contentWidth = measureWidth();

        if (lastMeasuredWidth === 0) lastMeasuredWidth = contentWidth;

        if (contentWidth <= lastMeasuredWidth || currentProbeWidth >= maxProbeWidth) {
          probeWidthRef.current = null;
          if (probeInterval) clearInterval(probeInterval);
        } else {
          lastMeasuredWidth = contentWidth;
        }
      });
    };

    probeInterval = setInterval(probeStep, 1000);

    return () => {
      if (probeInterval) clearInterval(probeInterval);
      probeWidthRef.current = null;
    };
  }, [activeId, showContent]);

  const finalHeight = containerSize.height ? `${containerSize.height}px` : 'auto';

  return (
    <div
      className={`flex flex-col items-start md:flex-row gap-8 md:gap-0 w-full mx-auto min-h-[400px] ${className} ${styles.viewingBox}`}
    >
      {/* Left menu */}
      <div className="flex items-stretch w-full md:w-1/3 pr-0 md:pr-6">
        {/* Flair */}
        <div
          className={`flex flex-row items-stretch gap-[5px] ${styles.animateFlairIn}`}
        >
          <div className="w-[12px] bg-[#9b947f] h-full" />
          <div className="w-[4px] bg-[#9b947f] h-full" />
        </div>

        {/* Menu list */}
        <div className="pl-4 space-y-4 flex-1 text-[var(--color-text)]">
          {items.map((item, i) => {
            const isActive = item.id === activeId;
            return (
              <MenuLink
                key={item.id}
                label={item.label}
                active={isActive}
                animationDelay={i * 0.2}
                onMouseEnter={() => setActiveId(item.id)}
                onClick={() => setActiveId(item.id)}
                scrambleText={true}
              />
            );
          })}
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full md:w-2/3 max-w-full md:max-w-2/3"> {/* or use max-w-[66.66%] */}
      <div
        ref={panelRef}
        className={`flex flex-col items-start text-[var(--color-text)] bg-[var(--color-bg)] shadow-lg ${
          showRightPanel ? styles.fadeShow : styles.fadeHide
        }`}
        style={{
          width: 'fit-content',
          maxWidth: '100%',
          height: finalHeight,
          transition: 'width 0.3s ease, height 0.1s ease',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ width: 'auto', boxSizing: 'border-box', minWidth: 0 }}>
          <div
            ref={contentRef}
            className={`${showContent ? styles.fadeShow : styles.fadeHide}`}
            style={{
              width: '100%',
              maxWidth: '100%',
              boxSizing: 'border-box',
              position: 'relative',
              minWidth: 0,
            }}
          >
            {activeItem?.content}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
