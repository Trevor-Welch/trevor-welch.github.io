'use client';

import PatternDivider from '../PatternDivider/PatternDivider';
import { LINKS } from '@/lib/links';

export default function Footer() {
  return (
    <footer className="bg-transparent">
      <PatternDivider direction="right-to-left" />
      
      {/* Menu */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-4 py-8 gap-8">
        {/* Link Menu */}
        <nav className="flex flex-wrap gap-4 text-sm text-[var(--color-text)]">
          <a href="/about" className="hover:underline">About</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/blog" className="hover:underline">Blog</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </nav>

        {/* Contact Form (Email + Button) */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // handle form submission
          }}
          className="flex flex-wrap gap-2 text-sm"
        >
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="px-3 py-1 border rounded-md bg-transparent text-[var(--color-text)] placeholder:text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Contact Me
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto flex justify-between items-center p-4 pb-12">
        {/* Left Side */}
        <div className="text-[var(--color-text)] text-sm select-none">
          &copy; {new Date().getFullYear()} Trevor W. All rights reserved.
        </div>
        {/* Right Side */}
        <div className="flex gap-4">
          <a
            href={LINKS.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-[var(--color-text)] hover:text-blue-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4 1.6a9.14 9.14 0 01-2.88 1.1A4.48 4.48 0 0016.11.57a4.48 4.48 0 00-4.46 5.5A12.71 12.71 0 013 2.8a4.48 4.48 0 001.39 6 4.52 4.52 0 01-2.04-.57v.06a4.48 4.48 0 003.6 4.4 4.5 4.5 0 01-2.03.08 4.48 4.48 0 004.19 3.12A9 9 0 012 19.54 12.69 12.69 0 008.29 21c7.5 0 11.6-6.2 11.6-11.6 0-.18 0-.36-.01-.54A8.18 8.18 0 0023 3z" />
            </svg>
          </a>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[var(--color-text)] hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.72-4.04-1.6-4.04-1.6a3.18 3.18 0 00-1.34-1.77c-1.1-.75.08-.74.08-.74a2.53 2.53 0 011.84 1.23 2.56 2.56 0 003.5 1 2.56 2.56 0 01.76-1.6c-2.67-.3-5.47-1.33-5.47-5.92a4.62 4.62 0 011.23-3.22 4.3 4.3 0 01.12-3.18s1-.32 3.3 1.23a11.43 11.43 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.3 4.3 0 01.12 3.18 4.61 4.61 0 011.23 3.22c0 4.6-2.8 5.62-5.47 5.92a2.86 2.86 0 01.82 2.22v3.3c0 .32.21.69.83.57A12 12 0 0012 .5z" />
            </svg>
          </a>
        </div>
      </div>
      {/* Bottom Bar - END */}
    </footer>
  );
}
