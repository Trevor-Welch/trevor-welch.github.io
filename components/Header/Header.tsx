// /components/Header/Header.tsx

'use client';

import PatternDivider from '@/components/PatternDivider/PatternDivider';
import HeaderNavLink from '@/components/HeaderNavLink/HeaderNavLink';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import JumpInText from '@/components/JumpInText/JumpInText';
import styles from './Header.module.css';

export default function Header() {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header>
      <div className={styles['header-contents']}>
        <JumpInText>
          <span className={styles['logotext']}>Trevor W.</span>
        </JumpInText>
        <nav>
          {menuItems.map(({ href, label }, i) => (
            <HeaderNavLink
              key={href}
              href={href}
              animationDelay={0.2 * (i + 1)}
            >
              {label}
            </HeaderNavLink>
          ))}
        </nav>
        <MobileMenu />
      </div>
      <PatternDivider direction="right-to-left" />
    </header>
  );
}
