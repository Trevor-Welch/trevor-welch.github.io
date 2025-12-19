// data/projects/this-website.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import StylizedButton from '@/components/StylizedButton/StylizedButton';

const tags = ['react', 'next', 'pretty darn cool'];
const year = 2025;

export const thisWebsite: Project = {
  id: 'this-website',
  title: 'This Website',
  slug: 'this-website',
  categories: ['react', 'recent'],
  tags: tags,
  year: year,
  shortDescription: 'Trying something new',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <h3>Trying something new</h3>
      <p>There's a bit of magic going on behind the scenes, but it's mostly Next.js with thousands of lines of code and CSS being hosted for free on GitHub Pages. It is not perfect. It is not made to be easy to update. But it costs me nothing and it is fun to look at.</p>
      <StylizedButton 
        label='View on GitHub'
        href='https://github.com/trevor-welch/trevor-welch.github.io'
        external = {true}
        variant= 'dark'
      />
    </div>
  ),
};