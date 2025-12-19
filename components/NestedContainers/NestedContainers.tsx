// components/NestedContainers/NestedContainers.tsx
'use client';
import { useState, useEffect, useRef } from 'react';
import MenuLink from '../MenuLink/MenuLink';
import VerticalBarsFlair from '../VerticalBarsFlair/VerticalBarsFlair';
import InfoBox from './InfoBox';
import styles from './NestedContainers.module.css';

interface NestedItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface NestedCategory {
  id: string;
  label: string;
  items: NestedItem[];
}

interface NestedContainersProps {
  data: NestedCategory[];
  defaultCategoryId?: string;
  defaultItemId?: string;
  className?: string;
}

export default function NestedContainers({
  data,
  defaultCategoryId,
  defaultItemId,
  className = ''
}: NestedContainersProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const categoryLeaveTimeout = useRef<NodeJS.Timeout | null>(null);
  const itemLeaveTimeout = useRef<NodeJS.Timeout | null>(null);


  const currentCategory = activeCategory 
    ? data.find(c => c.id === activeCategory) 
    : null;
  const currentItem = currentCategory && activeItem
    ? currentCategory.items.find(i => i.id === activeItem)
    : null;

  // Set defaults on mount
  useEffect(() => {
    if (defaultCategoryId) {
      setActiveCategory(defaultCategoryId);
    }
    if (defaultItemId) {
      const category = data.find(c => c.id === defaultCategoryId);
      const itemExists = category?.items.some(i => i.id === defaultItemId);
      if (itemExists) {
        setActiveItem(defaultItemId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Clear item when category changes
  useEffect(() => {
    setActiveItem(null);
  }, [activeCategory]);

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

  const layoutClass = !activeCategory 
    ? styles.layoutNoSelection 
    : !activeItem 
    ? styles.layoutCategoryOnly 
    : styles.layoutFullSelection;

  return (
    <div className={`${styles.container} ${layoutClass} ${className}`}>
      {/* Left Column - Primary Menu */}
      <div className={styles.leftColumn}>
        <VerticalBarsFlair variant="faded" />
        <div className={styles.menuContainer}>
          <div className={styles.menuList}>
            {data.map((category, i) => {
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

      {/* Center Column - Secondary Menu */}
      <div className={styles.centerColumn}>
        {currentCategory && (
          <>
           <InfoBox
              key={activeCategory}  // This resets scroll automatically
              title={currentCategory.label}
              showDecorators={true}
              visible={!!activeCategory}
            >
              <div className={styles.menuItemsContainer} key={activeCategory}>
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
                      onClick={() => setActiveItem(item.id)}
                      onMouseEnter={() => handleItemMouseEnter(item.id)}
                      onMouseLeave={handleItemMouseLeave}
                      showSelector={shouldShowSelector}
                      variant={'submenu'}
                    />
                  );
                })}
              </div>
            </InfoBox>
          </>
        )}
      </div>

      {/* Right Column - Detail Content */}
      <div className={styles.rightColumn}>
        {currentItem && (
          <InfoBox
            key={activeItem}
            title={currentItem.label}
            visible={!!activeItem}
          >
            <div className={styles.contentPadding}>
              {currentItem.content}
            </div>
          </InfoBox>
        )}
      </div>
    </div>
  );
}