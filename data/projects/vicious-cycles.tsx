// data/projects/vicious-cycles.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';

const tags = ['design', 'website', 'practice'];
const year = 2020;

export const viciousCycles: Project = {
  id: 'viciousCycles',
  title: 'Vicious Cycles',
  slug: 'vicious-cycles',
  categories: ['design'],
  tags: tags,
  year: year,
  shortDescription: 'Website Design Practice',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/vicious-cycles-thumbnail.webp"
        fullSrc="/images/vicious-cycles-full.webp"
        alt="Vicious Cycles Website"
      />
      <h3>Design Practice</h3>
      <p className="pb-3">Project for college. Both logo and website designed by me.</p>
    </div>
  ),
};