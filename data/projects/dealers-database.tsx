// data/projects/dealers-database.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['vue', 'web app', 'firebase'];
const year = 2025;

export const dealersDatabase: Project = {
  id: 'dealers-database',
  title: 'Dealers Database',
  slug: 'dealers-database',
  categories: ['vue'],
  tags: tags,
  year: year,
  shortDescription: 'Compiling contact info on over 100+ vendors',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/dealers-database-thumbnail.webp"
        fullSrc="/images/dealers-database-full.webp"
        alt="Dealers Database"
      />
      <h3>Compiling contact info on over 100+ vendors</h3>
      <p className="pb-3">When a convention staff member showed me their binder full of nothing but business cards, I knew it was something I could fix.</p>
      <ImageModal
        thumbnailSrc="/images/dealers-database-02-thumbnail.webp"
        fullSrc="/images/dealers-database-02-full.webp"
        alt="Dealers Database"
      />
      <p className="mt-5">This is a web application that allowed them to start by uploading their existing CSV of vendors, with support for many, many different fields. Think of it like a Linktree database.</p>
      <StylizedButton 
        label='View Live'
        href='https://dealersdendatabase.netlify.app'
        external = {true}
        variant= 'dark'
      />
      <span className="block mt-5 text-xs">You won't make it too far...</span>
    </div>
  ),
};