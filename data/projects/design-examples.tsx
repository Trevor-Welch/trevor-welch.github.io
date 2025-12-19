// data/projects/design-examples.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['WordPress', 'website', 'non-profit'];
const year = 2025;

export const fursonacon: Project = {
  id: 'fursonacon',
  title: 'FursonaCon',
  slug: 'fursonacon',
  categories: ['design', 'wordpress'],
  tags: tags,
  year: year,
  shortDescription: 'Yearly custom themed websites',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/fursonacon-2024-thumbnail.webp"
        fullSrc="/images/fursonacon-2024-full.webp"
        alt="Fursonacon Website"
      />
      <h3>Yearly custom themed websites</h3>
      <p className="pb-3">For 5 years now, I've been the web developer for FursonaCon, a convention held annually in Virginia.</p>
      <ImageModal
        thumbnailSrc="/images/fursonacon-2025-thumbnail.webp"
        fullSrc="/images/fursonacon-2025-full.webp"
        alt="Fursonacon Website"
      />
      <p className="mt-5">Each year the convention has a unique theme, and I ensure their WordPress site is tailored to that theme while still following UX principles.</p>
      <ImageModal
        thumbnailSrc="/images/fursonacon-2026-thumbnail.webp"
        fullSrc="/images/fursonacon-2026-full.webp"
        alt="Fursonacon Website"
      />
      <ul className="mt-5 mb-8">
        <li className="pt-5"><b>2022 -</b> The Academy of Magic</li>
        <li><b>2023 -</b> Dino Safari</li>
        <li><b>2024 -</b> Dungeon Delvers</li>
        <li><b>2025 -</b> On The Seven Seas</li>
        <li><b>2026 -</b> Murder On The FursonaCon Express</li>
      </ul>
      <StylizedButton 
        label='View Live'
        href='https://fursonacon.com/'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};