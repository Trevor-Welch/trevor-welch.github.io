// components/Header/MobileMenu/MobileMenuButton.tsx

import styles from './MobileMenu.module.css';

type MobileMenuButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
};

export default function MobileMenuButton({
  onClick,
  ariaLabel,
  className,
  children,
}: MobileMenuButtonProps) {
  return (
    <div className={className}>
      <button
        className={styles.mobileMenuButton}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {children}
      </button>
      <span className="mobileMenuWrapperBorderTop" />
      <span className="mobileMenuWrapperBorderBottom" />
    </div>
  );
}
