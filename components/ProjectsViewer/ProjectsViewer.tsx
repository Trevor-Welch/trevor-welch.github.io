import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Mock icons - replace with your actual icons
const SelectorIcon = ({ size = 24, variant = 'dark' }) => (
  <svg width={size} height={(size * 12) / 18} viewBox="0 0 18 12" fill="none">
    <path d="M2 6 L6 3 L16 6 L6 9 Z" fill={variant === 'dark' ? '#3d3d3d' : '#DADADA'} stroke={variant === 'dark' ? '#3d3d3d' : '#DADADA'} strokeWidth="1" />
    <circle cx="5.5" cy="6" r="1" fill={variant === 'dark' ? '#DADADA' : '#3d3d3d'} />
    <circle cx="17" cy="2" r="1" fill={variant === 'dark' ? '#3d3d3d' : '#DADADA'} />
    <circle cx="17" cy="10" r="1" fill={variant === 'dark' ? '#3d3d3d' : '#DADADA'} />
  </svg>
);

// Types
interface ProjectItem {
  id: string;
  label: string;
  description?: string;
  details: React.ReactNode;
}

interface ProjectCategory {
  id: string;
  label: string;
  items: ProjectItem[];
}

interface ProjectsViewerProps {
  categories: ProjectCategory[];
}

// Styles object
const styles = {
  container: {
    display: 'flex',
    gap: '0',
    width: '100%',
    minHeight: '500px',
    fontFamily: 'monospace',
  },
  panel: {
    backgroundColor: '#f5f5f5',
    border: '2px solid #3d3d3d',
    position: 'relative' as const,
  },
  categoryPanel: {
    width: '280px',
    flexShrink: 0,
  },
  itemPanel: {
    width: '320px',
    flexShrink: 0,
    marginLeft: '-2px',
  },
  detailPanel: {
    flex: 1,
    marginLeft: '-2px',
    minWidth: '400px',
  },
  header: {
    backgroundColor: '#6b6b6b',
    color: '#f5f5f5',
    padding: '0.75rem 1rem',
    fontSize: '0.9rem',
    letterSpacing: '0.05em',
    borderBottom: '2px solid #3d3d3d',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  listContainer: {
    padding: '0.5rem',
  },
  menuItem: {
    position: 'relative' as const,
    padding: '0.75rem 1rem',
    cursor: 'pointer',
    backgroundColor: '#fff',
    marginBottom: '0.5rem',
    border: '1px solid #3d3d3d',
    transition: 'all 0.2s ease',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  menuItemActive: {
    backgroundColor: '#3d3d3d',
    color: '#fff',
  },
  menuItemHover: {
    backgroundColor: '#3d3d3d',
    color: '#fff',
  },
  selectorContainer: {
    position: 'absolute' as const,
    left: '-32px',
    top: '50%',
    transform: 'translateY(-50%)',
  },
  squareIndicator: {
    width: '12px',
    height: '12px',
    backgroundColor: '#3d3d3d',
    flexShrink: 0,
    transition: 'background-color 0.2s ease',
  },
  squareIndicatorActive: {
    backgroundColor: '#fff',
  },
  detailContent: {
    padding: '1.5rem',
    backgroundColor: '#fff',
    height: 'calc(100% - 48px)',
    overflowY: 'auto' as const,
  },
  itemDescription: {
    fontSize: '0.85rem',
    color: '#6b6b6b',
    marginTop: '0.25rem',
  },
  fadeIn: {
    animation: 'fadeIn 0.3s ease-in-out',
  },
  imageContainer: {
    position: 'relative' as const,
    width: '100%',
    height: '150px',
    marginBottom: '1rem',
  },
};

const MenuItem = ({ 
  label, 
  active, 
  hovered, 
  onClick, 
  onMouseEnter, 
  onMouseLeave,
  showSelector,
  description 
}: {
  label: string;
  active: boolean;
  hovered: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  showSelector: boolean;
  description?: string;
}) => {
  const itemStyle = {
    ...styles.menuItem,
    ...(active ? styles.menuItemActive : {}),
    ...(hovered && !active ? styles.menuItemHover : {}),
  };

  const squareStyle = {
    ...styles.squareIndicator,
    ...(active || hovered ? styles.squareIndicatorActive : {}),
  };

  return (
    <div style={{ position: 'relative' }}>
      {showSelector && (
        <div style={styles.selectorContainer}>
          <SelectorIcon size={28} variant={active ? 'light' : 'dark'} />
        </div>
      )}
      <div
        style={itemStyle}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div style={squareStyle} />
        <div style={{ flex: 1 }}>
          <div>{label}</div>
          {description && (
            <div style={styles.itemDescription}>{description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function ProjectsViewer({ categories }: ProjectsViewerProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  
  const categoryHoverTimeout = useRef<NodeJS.Timeout | null>(null);
  const itemHoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const currentCategory = categories.find(c => c.id === activeCategory);
  const currentItem = currentCategory?.items.find(i => i.id === activeItem);

  // Set first item when category changes
  useEffect(() => {
    if (currentCategory && currentCategory.items.length > 0) {
      setActiveItem(currentCategory.items[0].id);
    }
  }, [activeCategory, currentCategory]);

  const handleCategoryMouseEnter = (id: string) => {
    if (categoryHoverTimeout.current) {
      clearTimeout(categoryHoverTimeout.current);
    }
    setHoveredCategory(id);
  };

  const handleCategoryMouseLeave = () => {
    categoryHoverTimeout.current = setTimeout(() => {
      setHoveredCategory(null);
    }, 200);
  };

  const handleItemMouseEnter = (id: string) => {
    if (itemHoverTimeout.current) {
      clearTimeout(itemHoverTimeout.current);
    }
    setHoveredItem(id);
  };

  const handleItemMouseLeave = () => {
    itemHoverTimeout.current = setTimeout(() => {
      setHoveredItem(null);
    }, 200);
  };

  return (
    <div style={styles.container}>
      {/* Category Panel */}
      <div style={{ ...styles.panel, ...styles.categoryPanel }}>
        <div style={styles.header}>
          <div style={{ width: '12px', height: '12px', backgroundColor: '#f5f5f5' }} />
          All Categories
        </div>
        <div style={styles.listContainer}>
          {categories.map((category) => {
            const isActive = category.id === activeCategory;
            const isHovered = hoveredCategory === category.id;
            const shouldShowSelector = hoveredCategory ? isHovered : isActive;
            
            return (
              <MenuItem
                key={category.id}
                label={category.label}
                active={isActive}
                hovered={isHovered}
                onClick={() => setActiveCategory(category.id)}
                onMouseEnter={() => handleCategoryMouseEnter(category.id)}
                onMouseLeave={handleCategoryMouseLeave}
                showSelector={shouldShowSelector}
              />
            );
          })}
        </div>
      </div>

      {/* Items Panel */}
      {currentCategory && (
        <div style={{ ...styles.panel, ...styles.itemPanel, ...styles.fadeIn }}>
          <div style={styles.header}>
            <div style={{ width: '12px', height: '12px', backgroundColor: '#f5f5f5' }} />
            {currentCategory.label}
          </div>
          <div style={styles.listContainer}>
            {currentCategory.items.map((item) => {
              const isActive = item.id === activeItem;
              const isHovered = hoveredItem === item.id;
              const shouldShowSelector = hoveredItem ? isHovered : isActive;
              
              return (
                <MenuItem
                  key={item.id}
                  label={item.label}
                  description={item.description}
                  active={isActive}
                  hovered={isHovered}
                  onClick={() => setActiveItem(item.id)}
                  onMouseEnter={() => handleItemMouseEnter(item.id)}
                  onMouseLeave={handleItemMouseLeave}
                  showSelector={shouldShowSelector}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* Detail Panel */}
      {currentItem && (
        <div style={{ ...styles.panel, ...styles.detailPanel, ...styles.fadeIn }}>
          <div style={styles.header}>
            {currentItem.label}
          </div>
          <div style={styles.detailContent}>
            {currentItem.details}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

// Demo usage
const demoCategories: ProjectCategory[] = [
  {
    id: 'weapons',
    label: 'Weapons',
    items: [
      {
        id: 'bare-fists',
        label: 'Bare Fists',
        description: 'Basic unarmed combat',
        details: <div>
          <h3>Bare Fists</h3>
          <p>Your most basic form of combat. No special abilities, just raw determination.</p>
          <p><strong>Attack:</strong> 50-70</p>
          <p><strong>Combo:</strong> Lt 3 Hv 1</p>
        </div>
      },
      {
        id: 'virtuous-treaty',
        label: 'Virtuous Treaty',
        description: 'A white katana kept by samurai of the East',
        details: <div>
          <h3>Virtuous Treaty</h3>
          <div style={styles.imageContainer}>
            <Image 
              src="https://via.placeholder.com/300x150" 
              alt="Virtuous Treaty"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <p>A white katana kept by samurai of the East.</p>
          <p><strong>Attack:</strong> 300-330</p>
          <p><strong>Combo:</strong> Lt 2 Hv 2</p>
        </div>
      },
      {
        id: 'cruel-oath',
        label: 'Cruel Oath',
        description: 'A black katana with dark powers',
        details: <div>
          <h3>Cruel Oath</h3>
          <p>The dark counterpart to Virtuous Treaty. Its power comes at a cost.</p>
          <p><strong>Attack:</strong> 300-330</p>
          <p><strong>Combo:</strong> Lt 2 Hv 2</p>
          <p><strong>Special:</strong> Drains health on hit</p>
        </div>
      },
    ],
  },
  {
    id: 'armor',
    label: 'Armor',
    items: [
      {
        id: 'light-armor',
        label: 'Light Armor',
        description: 'Basic protection',
        details: <div>
          <h3>Light Armor</h3>
          <p>Provides basic protection without sacrificing mobility.</p>
          <p><strong>Defense:</strong> 100</p>
        </div>
      },
      {
        id: 'heavy-armor',
        label: 'Heavy Armor',
        description: 'Maximum protection',
        details: <div>
          <h3>Heavy Armor</h3>
          <p>Maximum protection at the cost of movement speed.</p>
          <p><strong>Defense:</strong> 250</p>
          <p><strong>Penalty:</strong> -20% movement speed</p>
        </div>
      },
    ],
  },
];

// Render demo
// const App = () => <ProjectsViewer categories={demoCategories} />;