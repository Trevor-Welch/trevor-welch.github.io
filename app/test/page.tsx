'use client';

import ContactForm from '../components/ContactForm/ContactForm'; // adjust path as needed

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px' }}>
      <h1>Contact Form</h1>
      <ContactForm actionUrl="https://trevorjwelch.com/api/contact" />
    </div>
  );
}
