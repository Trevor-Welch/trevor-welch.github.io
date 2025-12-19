// data/projects/hunny-bunny.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['WordPress', 'website', 'bespoke'];
const year = 2025;

export const hunnyBunny: Project = {
  id: 'hunny-bunny',
  title: 'Hunny Bunny',
  slug: 'hunny-bunny',
  categories: ['design', 'wordpress'],
  tags: tags,
  year: year,
  shortDescription: 'Adorable art by a certain someone',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/hunny-bunny-thumbnail.webp"
        fullSrc="/images/hunny-bunny-full.webp"
        alt="Hunny Bunny Website"
      />
      <h3>Adorable art by a certain someone</h3>
      <p>A bespoke WordPress site for my wife designed in Figma (with her input), built with Elementor, and has ecommerce features using WooCommerce.</p>
      <p>You should check out her work!</p>
      <StylizedButton 
        label='View Live'
        href='http://hunnybunny.shop/'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};