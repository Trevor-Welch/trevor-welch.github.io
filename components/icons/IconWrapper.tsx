// /components/icons/IconWrapper.tsx

interface IconWrapperProps {
  size?: number;
  variant?: 'dark' | 'light';
  viewBox?: string;
  aspectRatio?: number; // width / height
  children: (colors: { primary: string; secondary: string }) => React.ReactNode;
}

export default function IconWrapper({
  size = 24,
  variant = 'dark',
  viewBox = '0 0 18 12',
  aspectRatio = 18 / 12,
  children,
}: IconWrapperProps) {
  const width = size;
  const height = size / aspectRatio;

  // Define color schemes
  const colors = {
    dark: {
      primary: 'var(--color-text)',
      secondary: 'var(--color-white)',
    },
    light: {
      primary: 'var(--color-white)',
      secondary: 'var(--color-text)',
    },
  };

  const selectedColors = colors[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      {children(selectedColors)}
    </svg>
  );
}