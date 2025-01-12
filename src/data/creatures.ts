import type { Category, Subcategory } from './categories';

export interface Creature {
  id: string;
  name: string;
  scientificName: string;
  period: string;
  location: string;
  length: string;
  weight: string;
  diet: string;
  image: string;
  description: string;
  category: Category;
  subcategory: Subcategory;
}

export interface SearchResult extends Creature {
  matches: {
    name?: boolean;
    scientificName?: boolean;
    period?: boolean;
    location?: boolean;
    description?: boolean;
    category?: boolean;
    subcategory?: boolean;
  };
}

export const creatures: Creature[] = [
  {
    id: 'tyrannosaurus-rex',
    name: 'Tyrannosaurus Rex',
    scientificName: 'Tyrannosaurus rex',
    period: 'Late Cretaceous',
    location: 'North America',
    length: '12-15 meters',
    weight: '7,000-8,000 kg',
    diet: 'Carnivore',
    image: '/images/t-rex.jpg',
    description: 'One of the largest land carnivores of all time, known for its powerful jaws and tiny arms.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
  {
    id: 'megalodon',
    name: 'Megalodon',
    scientificName: 'Otodus megalodon',
    period: 'Miocene-Pliocene',
    location: 'Global Oceans',
    length: '15-18 meters',
    weight: '70,000 kg',
    diet: 'Carnivore',
    image: '/images/megalodon.jpg',
    description: 'The largest shark that ever lived, preying on whales and other marine mammals.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Fish'
  },
  {
    id: 'nanotyrannus',
    name: 'Nanotyrannus',
    scientificName: 'Nanotyrannus lancensis',
    period: 'Late Cretaceous',
    location: 'North America',
    length: '5-6 meters',
    weight: '1,000 kg',
    diet: 'Carnivore',
    image: '/images/nanotyrannus.jpg',
    description: 'A smaller relative of T. Rex, though some scientists debate whether it was a separate species or a juvenile T. Rex.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
  {
    id: 'raptorex',
    name: 'Raptorex',
    scientificName: 'Raptorex kriegsteini',
    period: 'Late Cretaceous',
    location: 'Asia',
    length: '3 meters',
    weight: '60 kg',
    diet: 'Carnivore',
    image: '/images/raptorex.jpg',
    description: 'A small tyrannosaur that shows many of the features of its larger relatives like T. Rex.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
  {
    id: 'stegosaurus',
    name: 'Stegosaurus',
    scientificName: 'Stegosaurus stenops',
    period: 'Late Jurassic',
    location: 'North America',
    length: '9 meters',
    weight: '5,000-7,000 kg',
    diet: 'Herbivore',
    image: '/images/stegosaurus.jpg',
    description: 'Stegosaurus was a large herbivorous dinosaur known for its distinctive row of large bony plates along its back and spiked tail. These plates may have been used for display, temperature regulation, and defense. Despite its size, Stegosaurus had a relatively small brain.',
    category: 'Dinosaurs',
    subcategory: 'Herbivores'
  },
  {
    id: 'velociraptor',
    name: 'Velociraptor',
    scientificName: 'Velociraptor mongoliensis',
    period: 'Late Cretaceous',
    location: 'Asia (Mongolia)',
    length: '2 meters',
    weight: '15-20 kg',
    diet: 'Carnivore',
    image: '/images/velociraptor.jpg',
    description: 'Velociraptor was a small but fierce predator, known for its agility and intelligence. It had a distinctive sickle-shaped claw on each foot and was likely covered in feathers. Recent discoveries suggest it hunted in packs and was a skilled predator.',
    category: 'Dinosaurs',
    subcategory: 'Carnivores'
  }
];

export const searchCreatures = (searchQuery: string): SearchResult[] => {
  if (!searchQuery?.trim()) {
    return [];
  }

  const query = searchQuery.toLowerCase().trim();
  
  return creatures.map(creature => {
    const searchableText = [
      creature.name,
      creature.scientificName,
      creature.period,
      creature.location,
      creature.diet,
      creature.description,
      creature.category,
      creature.subcategory
    ].join(' ').toLowerCase();

    const isMatch = searchableText.includes(query);
    
    if (!isMatch) {
      return null;
    }

    return {
      ...creature,
      matches: {
        name: creature.name.toLowerCase().includes(query),
        scientificName: creature.scientificName.toLowerCase().includes(query),
        period: creature.period.toLowerCase().includes(query),
        location: creature.location.toLowerCase().includes(query),
        diet: creature.diet.toLowerCase().includes(query),
        description: creature.description.toLowerCase().includes(query),
        category: creature.category.toLowerCase().includes(query),
        subcategory: creature.subcategory.toLowerCase().includes(query)
      }
    };
  }).filter((result): result is SearchResult => result !== null);
};