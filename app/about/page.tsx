"use client";
import ViewingBox, { ViewingBoxItem } from '@/app/components/ViewingBox/ViewingBox';
import JumpInText from '@/app/components/JumpInText/JumpInText';
import DetailsCard from '@/app/components/DetailsCard/DetailsCard';
import CardGroup from '@/app/components/CardGroup/CardGroup';
import CardData from '@/app/components/CardData/CardData';
import StylizedButton from '@/app/components/StylizedButton/StylizedButton';
import ContactForm from '@/app/components/ContactForm/ContactForm';

const items: ViewingBoxItem[] = [
  {
    id: 'professional',
    label: 'Professional Life',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome to my corner of the web.</p>
          <p>I&apos;m Trevor Welch, an end-to-end software developer based in Raleigh, NC.</p>
          <p>My passion is to help make life easier for others through the use of technology - regardless if I&apos;m making a website for someone&apos;s business, creating a script for a Raspberry Pi, or contributing to open source tools.</p>
          <p>I&apos;ve helped over 40 clients in my 10+ years of experience, including: An artist&apos;s online shop, an aquatic pet store&apos;s e-commerce storefront, a non-profit helping implement recycling infrastructure in my city, a large-scale convention with thousands of people, and more.</p>
          <p>I truly believe there are people in the world doing great things. They just need some help being seen.</p>
          <p>That&apos;s where I help.</p>
          <p>If you need someone who is passionate about what they do, is versed in multiple programming languages and libraries to help bring your idea to life, and has experience handling projects solo or in a team-environment, consider reaching out.</p>
          <StylizedButton
            label='"Let&apos;s Chat"'
            href="/contact"
            variant="dark"
            inline
          />
        </CardGroup>
      </DetailsCard>
  },
  {
    id: 'journey',
    label: 'My Journey',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome to my corner of the web.</p>
          <p>I&apos;m Trevor Welch, an end-to-end software developer based in Raleigh, NC.</p>
          <p>My passion is to help make life easier for others through the use of technology - regardless if I&apos;m making a website for someone&apos;s business, creating a script for a Raspberry Pi, or contributing to open source tools.</p>
          <p>I&apos;ve helped over 40 clients in my 10+ years of experience, including: An artist&apos;s online shop, an aquatic pet store&apos;s e-commerce storefront, a non-profit helping implement recycling infrastructure in my city, a large-scale convention with thousands of people, and more.</p>
          <p>I truly believe there are people in the world doing great things. They just need some help being seen.</p>
          <p>That&apos;s where I help.</p>
          <p>If you need someone who is passionate about what they do, is versed in multiple programming languages and libraries to help bring your idea to life, and has experience handling projects solo or in a team-environment, consider reaching out.</p>
          <StylizedButton
            label='"Let&apos;s Chat"'
            href="/contact"
            variant="dark"
            inline
          />
        </CardGroup>
      </DetailsCard>
    },
  {
    id: 'skills',
    label: 'What I Use',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome to my corner of the web.</p>
          <p>I&apos;m Trevor Welch, an end-to-end software developer based in Raleigh, NC.</p>
          <p>My passion is to help make life easier for others through the use of technology - regardless if I&apos;m making a website for someone&apos;s business, creating a script for a Raspberry Pi, or contributing to open source tools.</p>
          <p>I&apos;ve helped over 40 clients in my 10+ years of experience, including: An artist&apos;s online shop, an aquatic pet store&apos;s e-commerce storefront, a non-profit helping implement recycling infrastructure in my city, a large-scale convention with thousands of people, and more.</p>
          <p>I truly believe there are people in the world doing great things. They just need some help being seen.</p>
          <p>That&apos;s where I help.</p>
          <p>If you need someone who is passionate about what they do, is versed in multiple programming languages and libraries to help bring your idea to life, and has experience handling projects solo or in a team-environment, consider reaching out.</p>
          <StylizedButton
            label='"Let&apos;s Chat"'
            href="/contact"
            variant="dark"
            inline
          />
        </CardGroup>
      </DetailsCard>
  },
  {
    id: 'favorites',
    label: 'Favorite Projects',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome to my corner of the web.</p>
          <p>I&apos;m Trevor Welch, an end-to-end software developer based in Raleigh, NC.</p>
          <p>My passion is to help make life easier for others through the use of technology - regardless if I&apos;m making a website for someone&apos;s business, creating a script for a Raspberry Pi, or contributing to open source tools.</p>
          <p>I&apos;ve helped over 40 clients in my 10+ years of experience, including: An artist&apos;s online shop, an aquatic pet store&apos;s e-commerce storefront, a non-profit helping implement recycling infrastructure in my city, a large-scale convention with thousands of people, and more.</p>
          <p>I truly believe there are people in the world doing great things. They just need some help being seen.</p>
          <p>That&apos;s where I help.</p>
          <p>If you need someone who is passionate about what they do, is versed in multiple programming languages and libraries to help bring your idea to life, and has experience handling projects solo or in a team-environment, consider reaching out.</p>
          <StylizedButton
            label='"Let&apos;s Chat"'
            href="/contact"
            variant="dark"
            inline
          />
        </CardGroup>
      </DetailsCard>
  },
  {
    id: 'work',
    label: 'Working With Me',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome to my corner of the web.</p>
          <p>I&apos;m Trevor Welch, an end-to-end software developer based in Raleigh, NC.</p>
          <p>My passion is to help make life easier for others through the use of technology - regardless if I&apos;m making a website for someone&apos;s business, creating a script for a Raspberry Pi, or contributing to open source tools.</p>
          <p>I&apos;ve helped over 40 clients in my 10+ years of experience, including: An artist&apos;s online shop, an aquatic pet store&apos;s e-commerce storefront, a non-profit helping implement recycling infrastructure in my city, a large-scale convention with thousands of people, and more.</p>
          <p>I truly believe there are people in the world doing great things. They just need some help being seen.</p>
          <p>That&apos;s where I help.</p>
          <p>If you need someone who is passionate about what they do, is versed in multiple programming languages and libraries to help bring your idea to life, and has experience handling projects solo or in a team-environment, consider reaching out.</p>
          <StylizedButton
            label='"Let&apos;s Chat"'
            href="/contact"
            variant="dark"
            inline
          />
        </CardGroup>
      </DetailsCard>
  },
  {
    id: 'testimonials',
    label: 'What Others Say',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome to my corner of the web.</p>
          <p>I&apos;m Trevor Welch, an end-to-end software developer based in Raleigh, NC.</p>
          <p>My passion is to help make life easier for others through the use of technology - regardless if I&apos;m making a website for someone&apos;s business, creating a script for a Raspberry Pi, or contributing to open source tools.</p>
          <p>I&apos;ve helped over 40 clients in my 10+ years of experience, including: An artist&apos;s online shop, an aquatic pet store&apos;s e-commerce storefront, a non-profit helping implement recycling infrastructure in my city, a large-scale convention with thousands of people, and more.</p>
          <p>I truly believe there are people in the world doing great things. They just need some help being seen.</p>
          <p>That&apos;s where I help.</p>
          <p>If you need someone who is passionate about what they do, is versed in multiple programming languages and libraries to help bring your idea to life, and has experience handling projects solo or in a team-environment, consider reaching out.</p>
          <StylizedButton
            label='"Let&apos;s Chat"'
            href="/contact"
            variant="dark"
            inline
          />
        </CardGroup>
      </DetailsCard>
  },
  {
    id: 'more',
    label: 'Beyond Code',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome to my corner of the web.</p>
          <p>I&apos;m Trevor Welch, an end-to-end software developer based in Raleigh, NC.</p>
          <p>My passion is to help make life easier for others through the use of technology - regardless if I&apos;m making a website for someone&apos;s business, creating a script for a Raspberry Pi, or contributing to open source tools.</p>
          <p>I&apos;ve helped over 40 clients in my 10+ years of experience, including: An artist&apos;s online shop, an aquatic pet store&apos;s e-commerce storefront, a non-profit helping implement recycling infrastructure in my city, a large-scale convention with thousands of people, and more.</p>
          <p>I truly believe there are people in the world doing great things. They just need some help being seen.</p>
          <p>That&apos;s where I help.</p>
          <p>If you need someone who is passionate about what they do, is versed in multiple programming languages and libraries to help bring your idea to life, and has experience handling projects solo or in a team-environment, consider reaching out.</p>
          <StylizedButton
            label='"Let&apos;s Chat"'
            href="/contact"
            variant="dark"
            inline
          />
        </CardGroup>
      </DetailsCard>
  },
  
];

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start max-w-5xl mx-auto">
      <JumpInText as="h1" className="mb-10" text="About Me" />
      
      <ViewingBox items={items}/>
    </main>
  );
}
