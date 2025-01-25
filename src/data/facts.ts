export interface PrehistoricFact {
  id: string;
  title: string;
  fact: string;
  image: string;
  category: 'dinosaur' | 'environment' | 'evolution' | 'discovery';
  source?: string;
}

export const prehistoricFacts: PrehistoricFact[] = [
        {
    id: 'fact-1',
    title: 'Not All Dinosaurs Were Giants',
    fact: 'While many famous dinosaurs were enormous, the smallest known dinosaur was the Compsognathus, only about the size of a chicken!',
    image: '/images/facts/smalldino.jpg',
    category: 'dinosaur'
  },
  {
    id: 'fact-2',
    title: 'Earth\'s Oxygen Revolution',
    fact: 'About 2.4 billion years ago, the "Great Oxidation Event" dramatically increased Earth\'s oxygen levels, making complex life possible.',
    image: '/images/facts/oxygen-revolution.jpg',
    category: 'environment'
  },
  {
    id: 'fact-3',
    title: 'Birds Are Living Dinosaurs',
    fact: 'Modern birds are actually living theropod dinosaurs, having evolved from a group of dinosaurs called maniraptors.',
    image: '/images/facts/bird-evolution.jpg',
    category: 'evolution'
  },
  {
    id: 'fact-4',
    title: 'Prehistoric Super-Sized Insects',
    fact: 'During the Carboniferous period, insects grew to enormous sizes due to higher oxygen levels. Dragonflies had wingspans up to 65 cm!',
    image: '/images/facts/giant-insect.jpg',
    category: 'environment'
  },
  {
    id: 'fact-5',
    title: 'The First Flower',
    fact: 'The first flowering plants appeared around 130 million years ago, during the Cretaceous period, revolutionizing plant evolution.',
    image: '/images/facts/first-flower.jpg',
    category: 'evolution'
  },
  {
    id: 'fact-6',
    title: 'The Great Dying',
    fact: 'The Permian-Triassic extinction event, known as "The Great Dying," wiped out about 95% of marine species and 70% of land species.',
    image: '/images/facts/great-dying.jpg',
    category: 'discovery'
  },
  {
    id: 'fact-7',
    title: 'Walking Whales',
    fact: 'Early whales like Ambulocetus had legs and could walk on land, showing the remarkable transition of mammals back to marine life.',
    image: '/images/facts/walking-whale.jpg',
    category: 'evolution'
  },
  {
    id: 'fact-8',
    title: 'First Land Animals',
    fact: 'Tiktaalik, living 375 million years ago, was one of the first vertebrates to venture onto land, with primitive lungs and leg-like fins.',
    image: '/images/facts/tiktaalik.jpg',
    category: 'evolution'
  },
  {
    id: 'fact-9',
    title: 'Snowball Earth',
    fact: 'Around 700 million years ago, Earth was almost completely covered in ice during the "Snowball Earth" period, with temperatures as low as -50°C.',
    image: '/images/facts/snowball-earth.jpg',
    category: 'environment'
  }
];

export function getRandomFacts(count: number = 10): PrehistoricFact[] {
  const maxCount = Math.min(count, prehistoricFacts.length);
  const shuffled = [...prehistoricFacts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, maxCount);
} 