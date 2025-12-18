// /components/icons/HomeIcon.tsx
import IconWrapper from './IconWrapper';

export default function HomeIcon({
  size = 24,
  variant = 'dark',
}: {
  size?: number;
  variant?: 'dark' | 'light';
}) {
  return (
    <IconWrapper size={size} variant={variant} viewBox="0 0 18 12" aspectRatio={18 / 12}>
      {({ primary, secondary }) => (
        <>
          <path
            d="M2 6 L6 3 L16 6 L6 9 Z"
            fill={primary}
            stroke={primary}
            strokeWidth="1"
          />
          <circle cx="5.5" cy="6" r="1" fill={secondary} />
          <circle cx="17" cy="2" r="1" fill={primary} />
          <circle cx="17" cy="10" r="1" fill={primary} />
        </>
      )}
    </IconWrapper>
  );
}