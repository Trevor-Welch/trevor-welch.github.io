// data/projects/next-video-roulette.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['react', 'next', 'firebase'];
const year = 2025;

export const nextVideoRoulette: Project = {
  id: 'next-video-roulette',
  title: 'Next Video Roulette',
  slug: 'next-video-roulette',
  categories: ['react', 'recent'],
  tags: tags,
  year: year,
  shortDescription: 'Can&apos;t decide what to watch?',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/next-video-roulette-thumbnail.webp"
        fullSrc="/images/next-video-roulette-full.webp"
        alt="Next Video Roulette"
      />
      <h3>Can&apos;t decide what to watch?</h3>
      <p>A spiritual successor to a forgotten internet classic, <a href="https://z0r.de/" target="_blank"><u>https://z0r.de/</u></a>, that hosts a collection of <i>very old</i> memes and shorts.</p>
      <p>My version is a minimalist video player that randomly selects a video or music video from a curated list of YouTube URLs.</p>
      <StylizedButton 
        label='View Live'
        href='https://next-video-roulette.vercel.app/'
        external = {true}
        variant= 'dark'
      />
      <div 
        className="mb-3"></div>
      <StylizedButton 
        label='View on GitHub'
        href='https://github.com/trevor-welch/next-video-roulette'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};