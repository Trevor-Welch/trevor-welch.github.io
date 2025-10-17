"use client";
import PanelContainer, { PanelContainerItem } from '@/components/PanelContainer/PanelContainer';
import JumpInText from '@/components/JumpInText/JumpInText';
import InfoBox from '@/components/InfoBox/InfoBox';
import CardGroup from '@/components/CardGroup/CardGroup';
import CardData from '@/components/CardData/CardData';
import StylizedButton from '@/components/StylizedButton/StylizedButton';
import ContactForm from '@/components/ContactForm/ContactForm';
import OpenForWork from '@/components/OpenForWork/OpenForWork';

const items: PanelContainerItem[] = [
  {
    id: 'intro',
    label: 'Intro',
    content: <InfoBox title="introductoryMessage.exe" note="SGVsbG8gV29ybGQ="  className="position-relative">
        <CardGroup gap={16}  className="position-relative">
          <OpenForWork />
          <h2>Full-Stack Developer</h2>
          <p><i className="opacity-50">Welcome to my corner of the internet!</i></p>
          <p>My name is <b>Trevor Welch</b> and I am an <b>end-to-end software engineer</b> based out of Raleigh, NC, helping local and remote clients alike.</p>
          <p>I help turn ideas into reality - from simple websites to complex web applications.</p>
          <div className="flex gap-4 mb-8 mt-4">
            <StylizedButton
              label='Past Projects'
              href="/projects"
              variant="dark"
              inline
            />
            <StylizedButton
              label='Let&apos;s Chat'
              href="/contact"
              variant="dark"
              inline
            />
          </div>
          
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
      </InfoBox>
  },
  {
    id: 'skills',
    label: 'Skills',
    content: <InfoBox title="skillsOverview.exe" note="SG93IG11Y2ggZG8geW91IGtub3c/">
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
      </InfoBox>,
  },
  {
    id: 'contact',
    label: 'Contact Info',
    content: <InfoBox title="contactMe.exe" note="SWYgeW91J3JlIHJlYWRpbmcgdGhpcywgbGV0J3MgY2hhdA==">
        <p>Whether you have a project in mind, a question, or just want to say hi, I&apos;m here to help.</p>
        <ContactForm />
      </InfoBox>,
  },
];

export default function Home() {
  return (
    <main className="page-container">
      <JumpInText
        text="Home Page"
        as="h1"
        className="mb-10"
        />
      
      <PanelContainer items={items}/>
    </main>
  );
}
