"use client";

import JumpInText from '../components/JumpInText/JumpInText';
import ContactForm from '../components/ContactForm/ContactForm';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-6">
      <JumpInText as="h1" className="mb-10" text="Contact & Collaborate" />
      <div
        className="bg-[var(--color-bg)] text-[var(--color-text)] rounded-lg p-10 max-w-lg w-full
                   shadow-lg"
        style={{ fontFamily: "'Noto Sans', sans-serif" }}
      >
        <p className="text-lg mb-6 text-gray-900">
          Let's connect! Whether you have a project in mind, a question, or just want to say hi, I'm here to help.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
