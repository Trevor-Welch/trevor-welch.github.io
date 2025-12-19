// data/projects/notiice-website.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['squarespace', 'website', 'design'];
const year = 2024;

export const notiiceWebsite: Project = {
  id: 'notiice-website',
  title: 'Notiice Website',
  slug: 'notiice-website',
  categories: ['design', 'other'],
  tags: tags,
  year: year,
  shortDescription: 'Helping an artist be seen',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/notiice-website-thumbnail.webp"
        fullSrc="/images/notiice-website-full.webp"
        alt="Notiice Website"
      />
      <h3>Helping an artist be seen</h3>
      <p>This <b>incredible</b> artist had almost no followers at the time, despite being so talented. They had already purchased a slot on Squarespace but didn't want to jump through the hoops to actually make the site.</p>
      <p>This was a site created from scratch rather than using the pre-built templates.</p>
      <StylizedButton 
        label='View Live'
        href='https://notiice.me/'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};