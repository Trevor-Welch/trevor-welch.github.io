'use client';

import PatternDivider from '../PatternDivider/PatternDivider';
import HeaderLink from '../HeaderLink/HeaderLink';
import MobileMenu from '../MobileMenu/MobileMenu';
import JumpInText from '../JumpInText/JumpInText';

export default function Header() {
  const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-transparent">
      <div className="container mx-auto flex justify-between items-center p-4 overflow-hidden">
        <JumpInText
          as="span"
          className="header-styled font-700 lg:text-[1.75rem] md:text-[1.35rem] xs:text-[1.2rem] text-[1.75rem]"
          text="Trevor W."
        />
        {/* Desktop menu - hidden on small screens */}
        <nav className="hidden md:flex gap-4">
          {menuItems.map(({ href, label }, i) => (
            <HeaderLink
              key={href}
              href={href}
              animationDelay={0.2 * (i + 1)}
            >
              {label}
            </HeaderLink>
          ))}
        </nav>

        {/* Mobile menu - visible only on small screens */}
        <div className="block md:hidden">
          <MobileMenu />
        </div>
      </div>
      <PatternDivider direction="right-to-left" />
      
    </header>
  );
}
