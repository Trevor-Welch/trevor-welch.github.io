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
import { hunnyBunny } from './hunny-bunny';
import { dealersDatabase } from './dealers-database';
import { rockbridgeCreativeInstitute } from './rockbridge-creative-institute';
import { apaRaleigh } from './apa-raleigh';
import { fursonacon } from './fursonacon';
import { viciousCycles } from './vicious-cycles';
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
        toItem(hunnyBunny),
        toItem(nextVideoRoulette),
        toItem(thisWebsite),
      ]
    },
    {
      id: 'react',
      label: 'React',
      items: [
        toItem(nextVideoRoulette),
        toItem(ticketingSystem),
        toItem(interactiveMap),
        toItem(pvpCookieClicker),
        toItem(thisWebsite),
      ]
    },
    {
      id: 'vue',
      label: 'Vue',
      items: [
        toItem(dealersDatabase),
      ]
    },
    {
      id: 'wordpress',
      label: 'WordPress',
      items: [
        toItem(hunnyBunny),
        toItem(fursonacon),
        toItem(apaRaleigh),
        toItem(rockbridgeCreativeInstitute),
      ]
    },
    {
      id: 'design',
      label: 'Design',
      items: [
        toItem(hunnyBunny),
        toItem(fursonacon),
        toItem(notiiceWebsite),
        toItem(viciousCycles),
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