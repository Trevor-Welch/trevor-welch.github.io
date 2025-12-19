// app/projects/page.tsx
'use client';
import NestedContainers from '@/components/NestedContainers/NestedContainers';
import JumpInText from '@/components/JumpInText/JumpInText';
import { getProjects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="page-container">
      <JumpInText
        text="Past Projects"
        as="h1"
        className="mb-10"
      />
      
      <NestedContainers 
        data={getProjects()}
        defaultCategoryId="recent"
        defaultItemId="next-video-roulette"
      />
    </main>
  );
}