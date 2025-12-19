// data/projects/ticketing-system.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['react', 'next', 'firebase'];
const year = 2025;

export const ticketingSystem: Project = {
  id: 'ticketing-system',
  title: 'Garage Ticketing System',
  slug: 'ticketing-system',
  categories: ['react', 'recent'],
  tags: tags,
  year: year,
  shortDescription: 'Reducing waste and saving time',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/ticketing-system-thumbnail.webp"
        fullSrc="/images/ticketing-system-full.webp"
        alt="Garage Ticketing System"
      />
      <h3>Reducing waste and saving time</h3>
      <p>I visited a friend of mine who runs an engine repair shop and noticed he had paper tickets for every project he had, keeping up with the status of each project by hand.</p><p>In less than 24 hours, he had a working ticketing system that allowed him to not have to mentally keep track of where he was with every project.</p>
      <StylizedButton 
        label='View Live'
        href='https://rustys-ticketing-system.vercel.app/'
        external = {true}
        variant= 'dark'
      />
      <span className="block mt-5 text-xs">Well... I guess you would have to have an account...</span>
      
    </div>
  ),
};