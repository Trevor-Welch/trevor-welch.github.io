// data/projects/python-automation-scripts.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';

const tags = ['python', 'automation', 'big data'];

export const pythonAutomationScripts: Project = {
  id: 'python-automation-scripts',
  title: 'Python Automation Scripts',
  slug: 'python-automation-scripts',
  categories: ['other'],
  tags: tags,
  shortDescription: 'Make tedious tasks easier',
  content: (
    <div className="space-y-4">
      <TagsBar tags={tags}/>
      <h3>Make tedious tasks easier</h3>
      <p>
        It's hard to manage large quantities of data as a developer without 
        leaning into automation to make your life easier. Python has easily been 
        one of the most used tools on the belt, doing everything from converting 
        entire folders of images, extracting content from PDFs, or merging millions 
        of rows of data, to creating a fountain of spinning rats to put a smile on 
        my wife's face.
      </p>
      
      <VideoPlayer 
        src="/videos/rats.webm" 
        poster="/images/rats-poster.jpg" // optional thumbnail
      />
    </div>
  ),
};