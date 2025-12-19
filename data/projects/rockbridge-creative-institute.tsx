// data/projects/rockbridge-creative-institute.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['wordpress', 'website', 'bespoke'];
const year = 2025;

export const rockbridgeCreativeInstitute: Project = {
  id: 'rockbridge-creative-institute',
  title: 'Rockbridge Creative Institute',
  slug: 'rockbridge-creative-institute',
  categories: ['wordpress'],
  tags: tags,
  year: year,
  shortDescription: 'New School, New Website',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/rockbridge-creative-institute-thumbnail.webp"
        fullSrc="/images/rockbridge-creative-institute-full.webp"
        alt="Rockbridge Creative Institute"
      />
      <h3>New School, New Website</h3>
      <p>Standard brochure-style website that pitches a brand new education option in the hills of Virginia - teaching students the meaning of hard work and how to start their career in the trades.</p>
      <StylizedButton 
        label='View Live'
        href='https://rockbridgecreativeinstitute.com/'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};