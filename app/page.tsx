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
        <CardGroup gap={16}>
          <p>Anyways, where are we going?</p>
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
            label='"I Want To Learn More About You"'
            href="/about"
            variant="dark" 
          />

        </CardGroup>  
      </DetailsCard>
  },
  {
    id: 'skills',
    label: 'Skills',
    content: <DetailsCard title="skillsOverview.exe" note="SG93IG11Y2ggZG8geW91IGtub3c/" className="max-w-4xl">
        <CardGroup gap={16}>
          <p><i>Let&apos;s keep it simple.</i></p>
          <p>If it&apos;s listed below, rest assured: I can use it in a production environment without breaking anything. This is a quick list of the tools on my toolbelt.</p>
        </CardGroup>
        <CardGroup gap={16}>
          <CardData label="Soft Skills" content="Project Management, Client Communication, Complex Problem Solving, Remote Collaboration, Documentation" />
          <CardData label="Front-end" content="Elementor, React, Vue, Tailwind CSS, HTML, CSS, JavaScript, TypeScript" />
          <CardData label="Back-end" content="WordPress, Next.js, Laravel, PHP, Python, Node.js" />
          <CardData label="Cloud" content="Netlify, Vercel, GitHub Actions, Cloudflare Workers, Firebase, GoDaddy, WP Engine" />
          <CardData label="Tools" content="Git, GitHub, Figma, VS Code, Slack, Notion, Google Workspace" />
          <CardData label="Analytics" content="Google Analytics, Google Search Console, Google Tag Manager, Hotjar, Meta Pixel" />
        </CardGroup>  
        <CardGroup gap={16}>
          <StylizedButton
            label='"Can I see something more like a resume?"'
            href="/resume"
            variant="dark"
          />
          <StylizedButton
            label='"We should collaborate. Let&apos;s chat!'
            href="/contact"
            variant="dark"
          />
        </CardGroup>
      </DetailsCard>,
  },
  {
    id: 'contact',
    label: 'Contact Info',
    content: <DetailsCard title="contactMe.exe" note="SWYgeW91J3JlIHJlYWRpbmcgdGhpcywgbGV0J3MgY2hhdA==" className="max-w-2xl">
        <p>Whether you have a project in mind, a question, or just want to say hi, I&apos;m here to help.</p>
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
