'use client';

import { useState, ChangeEvent, FormEvent, useRef } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot
};

type ContactFormProps = {
  actionUrl?: string;
};

const MIN_SUBMIT_TIME_MS = 3000;

export default function ContactForm({
  actionUrl = 'https://trevorjwelch.com/api/contact',
}: ContactFormProps) {
  console.log('[ContactForm] Component render');

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    company: '', // honeypot
  });

  const [status, setStatus] = useState<string | null>(null);
  const formLoadedAt = useRef<number>(Date.now());

  /* -------------------------
     Handlers
  --------------------------*/
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log('[Form] Field change:', name, value);

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.group('[Form Submit]');
    console.log('Form data:', formData);

    // 1️⃣ Honeypot check
    if (formData.company) {
      console.warn('[Spam] Honeypot triggered');
      setStatus('Submission rejected.');
      console.groupEnd();
      return;
    }

    // 2️⃣ Timing check
    const elapsed = Date.now() - formLoadedAt.current;
    console.log('[Spam] Time to submit (ms):', elapsed);

    if (elapsed < MIN_SUBMIT_TIME_MS) {
      console.warn('[Spam] Submitted too quickly');
      setStatus('Submission rejected.');
      console.groupEnd();
      return;
    }

    setStatus('Sending...');

    try {
      const response = await fetch(actionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer a98f3249823fh9df32f9hf932h9f23h9',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company,           // honeypot
          formStartedAt: formLoadedAt.current, // timing
        }),
      });

      console.log('[Submit] Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      console.log('[Submit] Success');
      setStatus('Message sent!');
      setFormData({
        name: '',
        email: '',
        message: '',
        company: '',
      });
      formLoadedAt.current = Date.now();
    } catch (err) {
      console.error('[Submit] Error:', err);
      setStatus(
        err instanceof Error ? `Error: ${err.message}` : 'Unexpected error'
      );
    } finally {
      console.groupEnd();
    }
  };

  /* -------------------------
     Render
  --------------------------*/
  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Honeypot field (hidden from users) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '-9999px',
          height: 0,
          overflow: 'hidden',
        }}
      >
        <label>
          Company:
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
      </div>

      <label>
        Name:
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border"
        />
      </label>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border"
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border"
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 transition mt-3"
      >
        Send Form
      </button>

      {status && (
        <p
          className={`mt-4 ${
            status.startsWith('Error') ? 'text-red-600' : 'text-green-600'
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
}
