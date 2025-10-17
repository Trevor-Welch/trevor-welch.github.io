"use client";
import PanelContainer, { PanelContainerItem } from '@/components/PanelContainer/PanelContainer';
import JumpInText from '@/components/JumpInText/JumpInText';
import DetailsCard from '@/components/DetailsCard/DetailsCard';
import CardGroup from '@/components/CardGroup/CardGroup';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const items: PanelContainerItem[] = [
  {
    id: 'recentProjects',
    label: 'Recent Projects',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=">
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
    id: 'wordpress',
    label: 'WordPress',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=">
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
    id: 'react',
    label: 'React',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=">
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
    id: 'vue',
    label: 'Vue',
    content: <DetailsCard title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ=">
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
    <main className="page-container">
      <JumpInText
        text="Projects Showcase"
        as="h1"
        className="mb-10"
      />
      
      <PanelContainer items={items}/>
    </main>
  );
}
