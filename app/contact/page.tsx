"use client";

import JumpInText from '@/components/JumpInText/JumpInText';
import ContactForm from '@/components/ContactForm/ContactForm';
import SimpleColumnsLayout from '@/components/SimpleColumnsLayout/SimpleColumnsLayout';
import InfoBox from '@/components/InfoBox/InfoBox';
import SocialBar from '@/components/SocialBar/SocialBar';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="page-container">
      <JumpInText
        text="Contact & Collaborate" 
        as="h1" 
        className="mb-10"
      >
      </JumpInText>
      <SimpleColumnsLayout reverseLayout
        leftSlot={
          <SocialBar title="Ways To Contact">
            <Link href="mailto:welch.trevor@yahoo.com">welch.trevor@yahoo.com</Link>
            <Link href="https://www.linkedin.com/in/trevorjwelch/">LinkedIn</Link>
            <Link href="https://x.com/trevorjwelch">X (Twitter)</Link>
          </SocialBar>
        }
        rightSlot={
          <InfoBox title="Contact Form" note="SWYgeW91J3JlIHJlYWRpbmcgdGhpcywgbGV0J3MgY2hhdA==">
            <p>
              Let&apos;s connect! Whether you have a project in mind, a question, or just want to say hi, I&apos;m here to help.
            </p>
        
            <ContactForm />
          </InfoBox>
              
        }
      />
      
    </main>
  );
}
