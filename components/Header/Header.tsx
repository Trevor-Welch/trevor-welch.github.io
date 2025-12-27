// /components/Header/Header.tsx
'use client';
import Link from 'next/link';
import PatternDivider from '@/components/PatternDivider/PatternDivider';
import HeaderNavLink from '@/components/HeaderNavLink/HeaderNavLink';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
//import MobileMenu from './MobileMenu';
import JumpInText from '@/components/JumpInText/JumpInText';
import styles from './Header.module.css';
import VerticalBarsFlair from '../VerticalBarsFlair/VerticalBarsFlair';

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
          <JumpInText text="Trevor W." />
        </Link>
        <div className={'flex gap-6'}>
          <VerticalBarsFlair variant="faded" animation="fadeInFromRight" animationDelay={800}/>
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
        </div>
        <MobileMenu />
      </div>
      <PatternDivider direction="right-to-left" />
    </header>
  );
}