// data/projects/interactive-map.tsx
import { Project } from './types';
import TagsBar from './tags-bar';
import ImageModal from '@/components/ImageModal/ImageModal';

const tags = ['react', 'component', 'wordpress'];
const year = 2025;

export const interactiveMap: Project = {
  id: 'interactive-map',
  title: 'Interactive Map',
  slug: 'interactive-map',
  categories: ['react', 'other'],
  tags: tags,
  year: year,
  shortDescription: 'An easier attendee experience',
  content: (
    <div>
      <TagsBar tags={tags} date={year}/>
      <ImageModal
        thumbnailSrc="/images/interactive-map-thumbnail.webp"
        fullSrc="/images/interactive-map-full.webp"
        alt="Interactive Map"
      />
      <h3>An easier attendee experience</h3>
      <p>Convention schedule timelines are boring to scroll through and often leads to needing to pull up the floor plan to find where everything is.</p>
      <p>This interactive map component allows attendees to see which rooms have an event going on <i>right now</i> and select a room to view a timeline for that room only.</p>
      <p>While it is written with React, it's actually a WordPress plugin that allows me to drop the map on any page using a shortcode. The event data was web scraped from the convention's existing https://sched.com/ URL then converted from a CSV to a static JSON to be used by the component. It also requires a providing an SVG map with the rooms separated so they can be individually selected.</p>
    </div>
  ),
};