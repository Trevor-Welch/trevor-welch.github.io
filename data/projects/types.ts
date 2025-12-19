// data/projects/types.ts
import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  slug: string;
  categories: ('recent' | 'react' | 'vue' | 'wordpress' | 'design' | 'other')[];
  tags?: string[];
  year?: number;
  thumbnail?: string;
  shortDescription?: string;
  content: ReactNode;
}

export interface ProjectCategory {
  id: string;
  label: string;
  items: ProjectItem[];
}

export interface ProjectItem {
  id: string;
  label: string;
  content: React.ReactNode;
}