// data/projects/next-video-roulette.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['react', 'firebase', 'real-time multiplayer'];
const year = 2025;

export const pvpCookieClicker: Project = {
  id: 'pvp-cookie-clicker',
  title: 'PVP Cookie Clicker',
  slug: 'pvp-cookie-clicker',
  categories: ['react'],
  tags: tags,
  year: year,
  shortDescription: 'A classic, made multiplayer',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/pvp-cookie-clicker-thumbnail.webp"
        fullSrc="/images/pvp-cookie-clicker-full.webp"
        alt="PVP Cookie Clicker"
      />
      <h3>A classic, made multiplayer</h3>
      <p>A joke project whipped up in under 24 hours.</p>
      <p>Inspired by the classic, <a href="https://orteil.dashnet.org/cookieclicker/" target="_blank"><u>Cookie Clicker</u></a>, this project is a multiplayer version of the game.</p>
      <p>While it is <i>very</i> incomplete, it was an interesting learning experience when it came to managing state that updates every second and keeping that state uniform across the two players.</p>
      
      <span className="block mt-5 mb-6 text-xs">It was a lot more fun as an idea, ngl...</span>
      <StylizedButton 
        label='View Live'
        href='https://pvp-clicker.vercel.app/'
        external = {true}
        variant= 'dark'
      />
      <div 
        className="mb-3"></div>
      <StylizedButton 
        label='View on GitHub'
        href='https://github.com/trevor-welch/pvp-cookie-clicker'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};