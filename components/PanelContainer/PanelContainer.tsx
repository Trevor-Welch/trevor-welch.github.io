// components/PanelContainer/PanelContainer.tsx
'use client';
import MenuLink from '../MenuLink/MenuLink';
import { useState, useEffect, useRef } from 'react';
import styles from './PanelContainer.module.css';
import VerticalBarsFlair from '../VerticalBarsFlair/VerticalBarsFlair';

export interface PanelContainerItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface PanelContainerProps {
  items: PanelContainerItem[];
  defaultId?: string;
  className?: string;
}

export default function PanelContainer({ items, defaultId, className = '' }: PanelContainerProps) {
  const [activeId, setActiveId] = useState(defaultId || items[0]?.id);
  const activeItem = items.find((item) => item.id === activeId);
  const [showContent, setShowContent] = useState(false);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  const probeWidthRef = useRef<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
    }
    
    leaveTimeoutRef.current = setTimeout(() => {
      setHoveredId(null);
    }, 200);
  };

  const handleMouseEnter = (id: string) => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setHoveredId(id);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) {
        clearTimeout(leaveTimeoutRef.current);
      }
    };
  }, []);

  // Animation setup
  useEffect(() => {
    const totalAnimationTime = (items.length - 1) * 0.1 + 0.4;
    setShowContent(false);
    probeWidthRef.current = null;

    const panelTimer = setTimeout(() => {
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 300);
      return () => clearTimeout(contentTimer);
    }, totalAnimationTime * 1000);

    return () => clearTimeout(panelTimer);
  }, [items.length]);

  // ResizeObserver for height tracking
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

  // Reset scroll when active content changes
  useEffect(() => {
    if (!contentRef.current) return;
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
    <div className={`${styles.container} ${className}`}>
      {/* Left menu */}
      <div className={styles.leftMenu}>
        <VerticalBarsFlair variant="faded" />
        
        <div className={styles.menuList}>
          {items.map((item, i) => {
            const isActive = item.id === activeId;
            const shouldShowSelector = hoveredId ? hoveredId === item.id : isActive;
            return (
              <MenuLink
                key={item.id}
                label={item.label}
                active={isActive}
                animationDelay={i * 0.1}
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                scrambleText={true}
                showSelector={shouldShowSelector}
              />
            );
          })}
        </div>
      </div>

      {/* Right panel */}
      <div className={styles.rightPanel}>
        <div
          ref={panelRef}
          className={`${styles.panel} ${showContent ? styles.fadeShow : styles.fadeHide}`}
          style={{
            height: finalHeight,
          }}
        >
          <div className={styles.panelInner}>
            <div ref={contentRef} className={styles.content}>
              {activeItem?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}