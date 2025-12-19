// data/projects/badge-reader.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['vanilla js', 'tesseract', 'prototype'];
const year = 2025;

export const badgeReader: Project = {
  id: 'badge-reader',
  title: 'Badge Reader',
  slug: 'badge-reader',
  categories: ['other'],
  tags: tags,
  year: year,
  shortDescription: 'An easier attendee experience',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/badge-reader-thumbnail.webp"
        fullSrc="/images/badge-reader-full.webp"
        alt="Badge Reader"
      />
      <h3>An interesting prototype</h3>
      <p>Friend and I were talking about an idea for an app where you "catch" fellow attendees by scanning their badge and finding a valid ID. It would pull up their "profile" with all their social links.</p>
      <p>This is just a prototype that displays a badge with an ID on screen (desktop), you open the app on your phone as well, then you can scan the badge for some simple image-to-text conversion.</p>
      <StylizedButton 
        label='View Live'
        href='https://badge-reader.vercel.app/'
        external = {true}
        variant= 'dark'
      />
      <div className="mb-5"></div>
      <StylizedButton 
        label='View GitHub'
        href='https://github.com/Trevor-Welch/Badge-Reader'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};