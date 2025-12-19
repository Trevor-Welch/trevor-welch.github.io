// data/projects/index.ts
import { ticketingSystem } from './ticketing-system';
import { thisWebsite } from './this-website';
import { nextVideoRoulette } from './next-video-roulette';
import { interactiveMap } from './interactive-map';
import { pvpCookieClicker } from './pvp-cookie-clicker';
import { turnipProphet } from './turnip-prophet';
import { badgeReader } from './badge-reader';
import { pythonAutomationScripts } from './python-automation-scripts';
import { notiiceWebsite } from './notiice-website';
import type { ProjectCategory } from './types';

// Helper to convert project to nested item format
const toItem = (project: any) => ({
  id: project.id,
  label: project.title,
  content: project.content
});

export const getProjects = (): ProjectCategory[] => {
  return [
    {
      id: 'recent',
      label: 'Recent Work',
      items: [
        toItem(nextVideoRoulette),
        toItem(ticketingSystem),
        toItem(thisWebsite),
      ]
    },
    {
      id: 'react',
      label: 'React',
      items: [
        toItem(interactiveMap),
        toItem(pvpCookieClicker),
        toItem(nextVideoRoulette),
        toItem(ticketingSystem),
        toItem(thisWebsite),
      ]
    },
    {
      id: 'vue',
      label: 'Vue',
      items: [
        toItem(pvpCookieClicker),
      ]
    },
    {
      id: 'wordpress',
      label: 'WordPress',
      items: [
         toItem(interactiveMap),
      ]
    },
    {
      id: 'design',
      label: 'Design',
      items: [
        toItem(notiiceWebsite),
      ]
    },
    {
        id: 'other',
        label: 'Other',
        items: [
          toItem(turnipProphet),
          toItem(notiiceWebsite),
          toItem(badgeReader),
          toItem(pythonAutomationScripts),
        ]
    }
  ];
};