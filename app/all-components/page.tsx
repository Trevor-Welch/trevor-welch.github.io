// app/projects/page.tsx (or wherever you want to use it)
'use client';
import NestedContainers, { NestedCategory } from '@/components/NestedContainers/NestedContainers';
import JumpInText from '@/components/JumpInText/JumpInText';

// Example content components
const WeaponDetail = ({ name, attack, combo }: { name: string; attack: string; combo: string }) => (
  <div className="space-y-4">
    <p className="text-lg font-semibold">{name}</p>
    <div className="space-y-2">
      <p><strong>Attack:</strong> {attack}</p>
      <p><strong>Combo:</strong> {combo}</p>
    </div>
  </div>
);

const ArmorDetail = ({ name, defense, penalty }: { name: string; defense: string; penalty?: string }) => (
  <div className="space-y-4">
    <p className="text-lg font-semibold">{name}</p>
    <div className="space-y-2">
      <p><strong>Defense:</strong> {defense}</p>
      {penalty && <p><strong>Penalty:</strong> {penalty}</p>}
    </div>
  </div>
);

export default function ProjectsPage() {
  const categories: NestedCategory[] = [
    {
      id: 'weapons-list',
      label: 'Weapons',
      items: [
        {
          id: 'bare-fists',
          label: 'Bare Fists',
          content: <WeaponDetail 
            name="Bare Fists" 
            attack="50-70" 
            combo="Lt 3 Hv 1" 
          />
        },
        {
          id: 'faith',
          label: 'Faith',
          content: <WeaponDetail 
            name="Faith" 
            attack="120-150" 
            combo="Lt 2 Hv 1" 
          />
        },
        {
          id: 'beastbane',
          label: 'Beastbane',
          content: <WeaponDetail 
            name="Beastbane" 
            attack="180-210" 
            combo="Lt 3 Hv 2" 
          />
        },
        {
          id: 'ancient-overlord',
          label: 'Ancient Overlord',
          content: <WeaponDetail 
            name="Ancient Overlord" 
            attack="250-280" 
            combo="Lt 2 Hv 2" 
          />
        },
        {
          id: 'virtuous-contract',
          label: 'Virtuous Contract',
          content: (
            <div className="space-y-4">
              <p className="text-lg font-semibold">Virtuous Contract</p>
              <img 
                src="https://via.placeholder.com/300x150" 
                alt="Virtuous Contract" 
                className="w-full"
              />
              <p>A white blade forged by samurai of the East.</p>
              <div className="space-y-2">
                <p><strong>Attack:</strong> 300-330</p>
                <p><strong>Combo:</strong> Lt 2 Hv 2</p>
              </div>
            </div>
          )
        },
        {
          id: 'cruel-oath',
          label: 'Cruel Oath',
          content: <WeaponDetail 
            name="Cruel Oath" 
            attack="300-330" 
            combo="Lt 2 Hv 2" 
          />
        },
        {
          id: 'phoenix-sword',
          label: 'Phoenix Sword',
          content: <WeaponDetail 
            name="Phoenix Sword" 
            attack="320-350" 
            combo="Lt 3 Hv 3" 
          />
        },
        {
          id: 'virtuous-treaty',
          label: 'Virtuous Treaty',
          content: (
            <div className="space-y-4">
              <p className="text-lg font-semibold">Virtuous Treaty</p>
              <img 
                src="https://via.placeholder.com/300x150" 
                alt="Virtuous Treaty" 
                className="w-full"
              />
              <p>A white katana kept by samurai of the East.</p>
              <div className="space-y-2">
                <p><strong>Attack:</strong> 300-330</p>
                <p><strong>Combo:</strong> Lt 2 Hv 2</p>
              </div>
            </div>
          )
        },
      ]
    },
    {
      id: 'armor-list',
      label: 'Armor',
      items: [
        {
          id: 'light-armor',
          label: 'Light Armor',
          content: <ArmorDetail 
            name="Light Armor" 
            defense="100" 
          />
        },
        {
          id: 'medium-armor',
          label: 'Medium Armor',
          content: <ArmorDetail 
            name="Medium Armor" 
            defense="175" 
            penalty="-10% movement speed" 
          />
        },
        {
          id: 'heavy-armor',
          label: 'Heavy Armor',
          content: <ArmorDetail 
            name="Heavy Armor" 
            defense="250" 
            penalty="-20% movement speed" 
          />
        },
      ]
    },
    {
      id: 'accessories-list',
      label: 'Accessories',
      items: [
        {
          id: 'health-ring',
          label: 'Health Ring',
          content: (
            <div className="space-y-4">
              <p className="text-lg font-semibold">Health Ring</p>
              <p>Increases maximum HP by 20%</p>
            </div>
          )
        },
        {
          id: 'speed-boots',
          label: 'Speed Boots',
          content: (
            <div className="space-y-4">
              <p className="text-lg font-semibold">Speed Boots</p>
              <p>Increases movement speed by 15%</p>
            </div>
          )
        },
        {
          id: 'power-amulet',
          label: 'Power Amulet',
          content: (
            <div className="space-y-4">
              <p className="text-lg font-semibold">Power Amulet</p>
              <p>Increases attack power by 10%</p>
            </div>
          )
        },
      ]
    }
  ];

  return (
    <main className="page-container">
      <JumpInText
        text="My Projects"
        as="h1"
        className="mb-10"
      />
      
      <NestedContainers 
        categories={categories}
        defaultCategoryId="weapons-list"
        defaultItemId="virtuous-treaty"
      />
    </main>
  );
}