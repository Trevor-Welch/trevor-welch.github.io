'use client';

import { useState, ChangeEvent, FormEvent, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormProps = {
  actionUrl?: string;
};

export default function ContactForm({ actionUrl = "https://trevorjwelch.com/api/contact" }: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string | null>(null);
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!captchaToken) {
      setStatus('Please complete the CAPTCHA');
      return;
    }

    setStatus('Sending...');

    try {
      const payload = {
        ...formData,
        captchaToken, // include captcha token for backend verification
      };

      const response = await fetch(actionUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer a98f3249823fh9df32f9hf932h9f23h9',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        setStatus(`Error: ${errorText}`);
        recaptchaRef.current?.reset(); // reset captcha on error to allow retry
        setCaptchaToken(null);
        return;
      }

      setStatus('Message sent!');
      setFormData({ name: '', email: '', message: '' });
      recaptchaRef.current?.reset(); // reset captcha after success
      setCaptchaToken(null);
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
        setStatus(`Error: ${err.message}`);
      } else {
        console.error('Unexpected error:', err);
        setStatus('Unexpected error occurred');
      }
      recaptchaRef.current?.reset(); // reset captcha on error
      setCaptchaToken(null);
    }
  };

  return (
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

      <ReCAPTCHA
        sitekey="6LdHi5krAAAAAMj_vZYjDXwbB31ccofE2Vj0sha5"
        onChange={onCaptchaChange}
        size="invisible"
        ref={recaptchaRef}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-3"
      >
        Send
      </button>

      {status && (
        <p className={`mt-4 ${status.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {status}
        </p>
      )}
    </form>
  );
}
