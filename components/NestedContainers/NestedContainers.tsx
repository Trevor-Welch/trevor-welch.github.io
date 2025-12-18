// components/NestedContainers/NestedContainers.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import MenuLink from '../MenuLink/MenuLink';
import VerticalBarsFlair from '../VerticalBarsFlair/VerticalBarsFlair';
import styles from './NestedContainers.module.css';

export interface NestedItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface NestedCategory {
  id: string;
  label: string;
  items: NestedItem[];
}

interface NestedContainersProps {
  categories: NestedCategory[];
  defaultCategoryId?: string;
  defaultItemId?: string;
  className?: string;
}

export default function NestedContainers({
  categories,
  defaultCategoryId,
  defaultItemId,
  className = ''
}: NestedContainersProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showCenterPanel, setShowCenterPanel] = useState(false);
  const [showRightPanel, setShowRightPanel] = useState(false);
  const [centerHeight, setCenterHeight] = useState(0);
  const [rightHeight, setRightHeight] = useState(0);
  
  const categoryLeaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const itemLeaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const centerPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const centerContentRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);

  const currentCategory = activeCategory 
    ? categories.find(c => c.id === activeCategory) 
    : null;
  const currentItem = currentCategory && activeItem
    ? currentCategory.items.find(i => i.id === activeItem)
    : null;

  useEffect(() => {
    setActiveItem(null);
  }, [activeCategory]);

  useEffect(() => {
  if (!activeCategory) {
    setShowCenterPanel(false);
    setShowRightPanel(false);
    return;
  }
  
  // Immediately show panels when category changes
  setShowCenterPanel(true);
  setShowRightPanel(true);
}, [activeCategory]);

  useEffect(() => {
    const el = centerContentRef.current;
    if (!el) return;
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setCenterHeight(entry.contentRect.height);
      }
    });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [activeCategory, showCenterPanel]);

  useEffect(() => {
    const el = rightContentRef.current;
    if (!el) return;
    
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setRightHeight(entry.contentRect.height);
      }
    });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [activeItem, showRightPanel]);

  useEffect(() => {
    if (centerContentRef.current) {
      centerContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeCategory]);

  useEffect(() => {
    if (rightContentRef.current) {
      rightContentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeItem]);

  const handleCategoryMouseEnter = (id: string) => {
    if (categoryLeaveTimeout.current) {
      clearTimeout(categoryLeaveTimeout.current);
    }
    setHoveredCategory(id);
  };

  const handleCategoryMouseLeave = () => {
    categoryLeaveTimeout.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 200);
  };

  const handleItemMouseEnter = (id: string) => {
    if (itemLeaveTimeout.current) {
      clearTimeout(itemLeaveTimeout.current);
    }
    setHoveredItem(id);
  };

  const handleItemMouseLeave = () => {
    itemLeaveTimeout.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (categoryLeaveTimeout.current) clearTimeout(categoryLeaveTimeout.current);
      if (itemLeaveTimeout.current) clearTimeout(itemLeaveTimeout.current);
    };
  }, []);

  const getLayoutClass = () => {
    if (!activeCategory) {
      return styles.layoutNoSelection;
    } else if (!activeItem) {
      return styles.layoutCategoryOnly;
    } else {
      return styles.layoutFullSelection;
    }
  };

  return (
    <div className={`${styles.nestedContainers} ${getLayoutClass()} ${className}  fadeIn`}>
      {/* Left Column - Primary Menu */}
      <div className={`${styles.leftColumn} fadeIn`} >
        <VerticalBarsFlair variant="faded" />
        <div className={styles.menuContainer}>
          <div className={styles.menuList}>
            {categories.map((category, i) => {
              const isActive = category.id === activeCategory;
              const shouldShowSelector = hoveredCategory 
                ? hoveredCategory === category.id 
                : isActive;
              
              return (
                <MenuLink
                  key={category.id}
                  label={category.label}
                  active={isActive}
                  animationDelay={i * 0.1}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => handleCategoryMouseEnter(category.id)}
                  onMouseLeave={handleCategoryMouseLeave}
                  scrambleText={true}
                  showSelector={shouldShowSelector}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Center Column - Secondary Menu (InfoBox style) */}
      <div className={styles.centerColumn}>
        {currentCategory && (
          <>
            <VerticalBarsFlair variant="faded" animation="stretchIn" animationDelay={0} />
            <div
              ref={centerPanelRef}
              className={`${styles.infoBox} ${
                showCenterPanel ? styles.fadeShow : styles.fadeHide
              }`}
              style={{
                height: centerHeight ? `${centerHeight + 83}px` : 'auto',
                transition: 'height 0.3s ease, opacity 0.5s ease-in-out',
              }}
            >
              <div className={styles.titleBar}>
                <span className={styles.squareIndicator} />
                {currentCategory.label}
              </div>

              <div className={styles.contentWrapper}>
                <div className={styles.upperLine} />
                <div className={styles.upperDot} />
                
              <div className={styles.scrollWrapper}>
              <div
                ref={centerContentRef}
                className={styles.scrollContent}
                key={activeCategory}
              >
                <div className={styles.menuItemsContainer}>
                  {currentCategory.items.map((item) => {
                    const isActive = item.id === activeItem;
                    const shouldShowSelector = hoveredItem 
                      ? hoveredItem === item.id 
                      : isActive;
                    
                    return (
                      <MenuLink
                        key={item.id}
                        label={item.label}
                        active={isActive}
                        animationDelay={0}
                        onClick={() => setActiveItem(item.id)}
                        onMouseEnter={() => handleItemMouseEnter(item.id)}
                        onMouseLeave={handleItemMouseLeave}
                        scrambleText={false}
                        showSelector={shouldShowSelector}
                        variant={'submenu'}
                      />
                    );
                  })}
                </div>
              </div>
                  
              </div>
              <div className={styles.lowerDot} />
              <div className={styles.lowerLine} />
                
              </div>
            </div>
          </>
        )}
      </div>

      {/* Right Column - Detail Content (InfoBox style) */}
      <div className={styles.rightColumn}>
        {currentItem && (
          <div
            ref={rightPanelRef}
            className={`${styles.infoBox} ${
              showRightPanel ? styles.fadeShow : styles.fadeHide
            }`}
            style={{
              height: rightHeight ? `${rightHeight + 100}px` : 'auto',
              transition: 'height 0.3s ease, opacity 0.5s ease-in-out',
            }}
          >
            <div className={styles.titleBar}>
              {currentItem.label}
            </div>
            <div
              ref={rightContentRef}
              className={styles.scrollContent}
            >
              <div className={styles.contentPadding}>
                {currentItem.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}