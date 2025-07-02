"use client";
import ViewingBox, { ViewingBoxItem } from './components/ViewingBox/ViewingBox';
import JumpInText from './components/JumpInText/JumpInText';
import DetailsCard from './components/DetailsCard/DetailsCard';
import CardGroup from './components/CardGroup/CardGroup';
import CardData from './components/CardData/CardData';
import StylizedButton from './components/StylizedButton/StylizedButton';

const items: ViewingBoxItem[] = [
  {
    id: 'intro',
    label: 'Intro',
    content: <DetailsCard title="Introductory Message" note="SGVsbG8gV29ybGQ=" className="max-w-4xl">
        <CardGroup gap={16}>
          <p>Welcome!</p>
          <p>I’m Trevor Welch, a freelance web developer based in Raleigh, NC. I’m passionate about crafting websites that make the internet a more beautiful and engaging place to explore.</p>
          <p>I’ve helped over 40 clients turn their underperforming websites into solid sales funnels that actually bring in traffic and sales — with designs unique to them, no boring cookie-cutter stuff here.</p>
          <p>I’ve also contributed to an open-source project that got some love from Forbes and enjoyed supporting a handful of non-profits to boost their online presence.</p>
          <p>For me, my favorite projects are one where we have chance to shake things up.</p>
          <p>I could yap more about myself, but let’s get you where you want to be.</p>
        
        </CardGroup>
        <CardGroup gap={16} row>
          <StylizedButton
            label='"Show Me Your Past Projects"'
            href="/projects"
            variant="dark"
          />
          
          <StylizedButton
            label='"What Services Do You Offer?"'
            href="/services"
            variant="dark"
            external
          />


          <StylizedButton
            label='"Actually, I Want To Learn More About You"'
            href="/about"
            variant="dark" 
          />

        </CardGroup>  
        <CardGroup >
          <p>Interested in collaborating on a project or upgrading your business’s website? Get in touch for affordable rates.</p>
          <CardGroup row>
            <StylizedButton
            label='"Let’s Chat"'
            href="/contact"
            variant="dark"
          />
          </CardGroup>
        </CardGroup>
      </DetailsCard>
  },
  {
    id: 'skills',
    label: 'Skills',
    content: <DetailsCard title="Knowledge Base" note="SG93IG11Y2ggZG8geW91IGtub3c/" className="max-w-4xl">
        <CardGroup gap={16}>
          <p><i>No flashy bar graphs here measuring how proficient I feel in every trendy technology.</i> I&apos;d rather keep it simple.</p>
          <p>If it’s listed below, rest assured: I can deploy it in a production environment without breaking the build — probably. Think of this as a straightforward inventory of the tools on my toolbelt, not a self-esteem exercise.</p>
        </CardGroup>
        <CardGroup gap={8}>
          <CardData label="Frontend" content="React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, TypeScript" />
          <CardData label="Frontend" content="React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, TypeScript" />
          <CardData label="Frontend" content="React, Next.js, Tailwind CSS, HTML, CSS, JavaScript, TypeScript" />
        </CardGroup>  
        <p>Interested in working together on a project or upgrading your existing business&apos;s website? Contact me for affordable rates, flexible to your budget.</p>
      </DetailsCard>,
  },
  {
    id: 'contact',
    label: 'Contact Info',
    content: <DetailsCard title="Let's Collaborate" note="SWYgeW91J3JlIHJlYWRpbmcgdGhpcywgbGV0J3MgY2hhdA==" className="max-w-2xl">
        <p>Whether you have a project in mind, a question, or just want to say hi, I’m here to help.</p>
        <CardGroup gap={8}>
          <p>Stuff goes here.</p>
        </CardGroup>  
        <p><i>Looking forward to hearing from you!</i></p>
      </DetailsCard>,
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-start max-w-5xl mx-auto">
      <JumpInText as="h1" className="mb-10" text="Home Page" />
      
      <ViewingBox items={items}/>
    </main>
  );
}
