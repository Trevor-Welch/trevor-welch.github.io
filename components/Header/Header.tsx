// /components/Header/Header.tsx
'use client';

import Link from 'next/link';

import JumpInText from '@/components/JumpInText/';
import PatternDivider from '@/components/PatternDivider/';
import VerticalBarsFlair from '@/components/VerticalBarsFlair/';

import HeaderNavLink from './HeaderNavLink/HeaderNavLink';
import MobileMenu from './MobileMenu/MobileMenu';

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
        <Link href="/">
          <JumpInText text="Trevor W." className={styles.logotext} />
        </Link>
        <div className={'flex gap-4'}>
          <VerticalBarsFlair variant="faded" animation="fadeInFromRight" animationDelay={800}/>
          <nav className={styles['header-nav']}>
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
        </div>
        <MobileMenu />
      </div>
      <PatternDivider direction="right-to-left" />
    </header>
  );
}