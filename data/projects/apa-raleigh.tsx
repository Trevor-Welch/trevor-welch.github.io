// data/projects/apa-raleigh.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['WordPress', 'website', 'bespoke'];
const year = 2025;

export const apaRaleigh: Project = {
  id: 'apa-raleigh',
  title: 'APA Raleigh',
  slug: 'apa-raleigh',
  categories: ['design', 'wordpress'],
  tags: tags,
  year: year,
  shortDescription: 'Modernization of a chapter website',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/apa-raleigh-thumbnail.webp"
        fullSrc="/images/apa-raleigh-full.webp"
        alt="APA Raleigh Website"
      />
      <h3>Modernization of a chapter website</h3>
      <p>Helping a local branch of the American Poolplayers Association upgrade from a static HTML and CSS website, to a modern WordPress site with room for growth.</p>
      <StylizedButton 
        label='View Live'
        href='https://apa-raleigh.com/'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};