'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://trevorjwelch.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setStatus(`Error: ${errorText}`);
        return;
      }

      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err:unknown ) {
        if (err instanceof Error) {
            console.error(err.message);
            setStatus(`Error: ${err.message}`);
        } else {
            console.error('Unexpected error:', err);
        }
      
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mb-3 p-2 border rounded"
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
            className="w-full mb-3 p-2 border rounded"
          />
        </label>

        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full mb-3 p-2 border rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>

      {status && (
        <p className={`mt-4 ${status.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {status}
        </p>
      )}
    </div>
  );
}
