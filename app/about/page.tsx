"use client";
import PanelContainer, { PanelContainerItem } from '@/components/PanelContainer/PanelContainer';
import JumpInText from '@/components/JumpInText/JumpInText';
import InfoBox from '@/components/InfoBox/InfoBox';
import CardGroup from '@/components/CardGroup/CardGroup';

export default function Home() {

const items: PanelContainerItem[] = [
  {
    id: 'professional',
    label: 'Professional Life',
    content: 
    <InfoBox title="career.txt" note="10+ years in the field">
      <CardGroup gap={16}>
        <p>Over the past decade, I’ve worked across a wide range of technical and creative projects — often serving as the go-to person for anything web or automation related.</p>

        <p>My work has included:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Developing full WordPress websites from concept to launch</li>
          <li>Building interactive React apps with Firebase and serverless functions</li>
          <li>Setting up email automation and CRM workflows for marketing teams</li>
          <li>Managing hosting, DNS, and deployment pipelines</li>
          <li>Consulting non-technical teams on tech strategy and UX best practices</li>
        </ul>

        <p>Project clients have ranged from small businesses and artists to large-scale conventions and nonprofit orgs. Whether working solo or embedded in a team, I value clear communication, thoughtful problem-solving, and creating products that last and can grow.</p>

        <p>Currently, I’m focused on improving my skills further and seeking a larger team to collaborate on. My goal is to be a part of a team solving problems one person could not handle alone.</p>
      </CardGroup>
    </InfoBox>
  },
  {
    id: 'journey',
    label: 'My Journey',
    content: 
      <InfoBox title="journey.txt" note="10+ years in the field">
      <CardGroup gap={16}>
        <p>I didn&rsquo;t <i>set out</i> to become a developer in the traditional sense. I just liked the limitless possibility of computers. At ten, I was writing mods for video games without realizing I <em>was</em> coding. Later, I went to school for IT, but after losing my father, I left and kept teaching myself instead.</p>

        <p>By day, I worked weddings and events. On the side, I built websites for friends and followed my curiosity wherever it led. A chance tech conference reignited my drive, and I eventually completed an Associate&rsquo;s in Computer Science. During the pandemic, I co-developed an Animal Crossing price tracker for in-game prices that unexpectedly landed on the front page of Forbes.</p>

        <p>That project helped me get hired at a marketing agency. I started as a WordPress developer, became lead dev, and eventually took on the role of technical project manager. For over three years, I handled full site builds, automation workflows, hosting migrations, and technical guidance for 40+ clients.</p>

        <p>Now, I&rsquo;m back to freelance work &mdash; helping people bring their products, services, and ideas online. Whether it&rsquo;s solving bugs, launching something new, or just making tech feel less intimidating, I enjoy helping others use web-based solutions to solve real-world problems.</p>
      </CardGroup>
    </InfoBox>
  },
  {
    id: 'stack',
    label: 'What I Use',
    content: 
      <InfoBox title="stack.txt" note="Tools I trust in production">
        <CardGroup gap={16}>
          <p>
            I try not to get too attached to tools, as new ones are created every month it feels, but I do have favorites. Whether I’m spinning up a React app, wrangling WordPress to do my bidding, or automating something locally with Python, I use what gets the job done cleanly.
          </p>
          <ul className="list-disc list-inside pl-4">
            <li><strong>Front-end:</strong> React, Vue, Tailwind CSS, JavaScript, TypeScript, HTML, CSS, Elementor</li>
            <li><strong>Back-end:</strong> WordPress, Next.js, Laravel, Node.js, PHP, Python</li>
            <li><strong>Cloud:</strong> Netlify, Vercel, Firebase, Cloudflare, GitHub Actions, WP Engine</li>
            <li><strong>Tools:</strong> Git, GitHub, VS Code, Figma, Notion, Slack</li>
            <li><strong>Analytics:</strong> GA4, Search Console, Tag Manager, Hotjar, Meta Pixel</li>
          </ul>
        </CardGroup>
      </InfoBox>
  },
  {
    id: 'collaborating',
    label: 'Working With Me',
    content: 
      <InfoBox title="collaborating.txt" note="What to expect if we team up">
        <CardGroup>
          <p>When working with me, you&rsquo;ll find someone who values clear deadlines and careful planning&mdash;habits I sharpened as an event coordinator and carried into technical project management.</p>
          <p>Keeping everyone aligned, whether clients or teammates, is key. I lean on tools like Slack and Asana to make sure nothing gets lost in the chaos. I enjoy digging into analytics and optimizing workflows, but the real value I bring is a deep understanding of code across multiple languages, helping others turn ideas into reality without confusion.</p>
        </CardGroup>
      </InfoBox>
  },
  {
    id: 'me',
    label: 'Beyond Code',
    content: <InfoBox title="me.txt" note="SGVsbG8gV29ybGQ=">
        <CardGroup gap={16}>
          <p>
            I grew up in a military family, constantly moving and rarely staying in one place long enough to build lasting friendships. So I found my community online. I was always on the internet, exploring the latest websites, playing games, and eventually building my own spaces just for fun. I loved how easy it was to share what I made and how many people could access it. That love never really went away.
          </p>
          <p>
            Today, the world lives online, and my passion for creating things for my own screen has become a career of crafting experiences for everyone’s. I still enjoy playing games (sometimes competitively) and spinning up little side projects just for the joy of it. These days, though, I spend more time hiking with my wife, learning about local nature, and, of course, making sure the bills get paid.
          </p>
        </CardGroup>
      </InfoBox>
  },
  
];

  return (
    <main className="page-container">
      <JumpInText
        text="About Me"
        as="h1"
        className="mb-10"
      />
      
      <PanelContainer items={items}/>
    </main>
  );
}
