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
      <h3>Adorable art by a certain someone</h3>
      <p>A bespoke WordPress site for my wife designed in Figma, built with Elementor, and has ecommerce features using WooCommerce.</p>
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