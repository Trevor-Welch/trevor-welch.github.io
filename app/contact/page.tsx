"use client";

import JumpInText from '../components/JumpInText/JumpInText';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6">
      <JumpInText as="h1" className="mb-10" text="Contact & Collaborate" />
      <div
        className="bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg p-10 max-w-md w-full
                   shadow-lg text-center"
        style={{ fontFamily: "'Noto Sans', sans-serif" }}
      >
        <h1 className="text-4xl font-bold mb-4 uppercase tracking-wider">
          Coming Soon
        </h1>
        <p className="text-lg mb-6 text-gray-900">
          I&apos;m working hard to make sure the full site is incredible. Please stay tuned!
        </p>
        <button
          className="primary px-6 py-3 text-lg font-bold rounded"
          onClick={() => alert("Thanks for your interest!")}
        >
          Test Button
        </button>
      </div>
    </main>
  );
}
