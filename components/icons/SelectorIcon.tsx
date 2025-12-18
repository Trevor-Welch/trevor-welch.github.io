// /components/icons/SelectorIcon.tsx
import IconWrapper from './IconWrapper';

export default function SelectorIcon({
  size = 24,
  variant = 'dark',
  isHovered = false,
  isActive = false,
  invertSelectorDiamond = false,
}: {
  size?: number;
  variant?: 'dark' | 'light';
  isHovered?: boolean;
  isActive?: boolean;
  invertSelectorDiamond?: boolean;
}) {
  return (
    <IconWrapper 
      size={size} 
      variant={variant} 
      viewBox="0 0 18 12" 
      aspectRatio={18 / 12}
    >
      {({ primary, secondary }) => {
        let pathFill, pathStroke, smallCircleFill, largeCirclesFill;

        if (variant === 'dark') {
          if (isActive) {
            if (invertSelectorDiamond) {

              pathFill = secondary;
              pathStroke = secondary;
              smallCircleFill = primary;
              largeCirclesFill = primary;
              // Inverted active state - flip path and small circle
              if (isHovered) {
                pathFill = primary;
                pathStroke = primary;
                smallCircleFill = secondary;
                largeCirclesFill = primary;
              }
            } else {
              // Normal active state
              pathFill = primary;
              pathStroke = primary;
              smallCircleFill = secondary;
              largeCirclesFill = primary;
            }
          } else {
            // Default state - path is secondary, circles are primary
            pathFill = primary;
              pathStroke = primary;
              smallCircleFill = secondary;
              largeCirclesFill = primary;
          }
        } else {
          // Light variant - flip everything
          if (isActive) {
            if (invertSelectorDiamond) {
              // Inverted active state - flip path and small circle
              pathFill = secondary;
              pathStroke = secondary;
              smallCircleFill = primary;
              largeCirclesFill = primary;
            } else {
              // Normal active state
              pathFill = primary;
              pathStroke = primary;
              smallCircleFill = secondary;
              largeCirclesFill = primary;
            }
          } else if (isHovered) {
            pathFill = secondary;
            pathStroke = secondary;
            smallCircleFill = primary;
            largeCirclesFill = secondary;
          } else {
            pathFill = primary;
            pathStroke = primary;
            smallCircleFill = secondary;
            largeCirclesFill = secondary;
          }
        }

        return (
          <>
            <path
              d="M2 6 L6 3 L16 6 L6 9 Z"
              fill={pathFill}
              stroke={pathStroke}
              strokeWidth="1"
              style={{ transition: 'fill 0.3s ease-out, stroke 0.3s ease-out' }}
            />
            <circle 
              cx="5.5" 
              cy="6" 
              r="1" 
              fill={smallCircleFill}
              style={{ transition: 'fill 0.3s ease-out' }}
            />
            <circle 
              cx="17" 
              cy="2" 
              r="1" 
              fill={largeCirclesFill}
              style={{ transition: 'fill 0.3s ease-out' }}
            />
            <circle 
              cx="17" 
              cy="10" 
              r="1" 
              fill={largeCirclesFill}
              style={{ transition: 'fill 0.3s ease-out' }}
            />
          </>
        );
      }}
    </IconWrapper>
  );
}