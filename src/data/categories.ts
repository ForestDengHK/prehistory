export const categories = {
  'Dinosaurs': [
    'Theropods',      // Includes T-Rex, Velociraptor, etc.
    'Sauropods',      // Long-necked herbivores like Diplodocus
    'Ceratopsians',   // Horned dinosaurs like Triceratops
    'Ornithopods',    // Duck-billed and other bipedal herbivores
    'Stegosaurs',     // Plate-backed dinosaurs like Stegosaurus
    'Ankylosaurs',
    'Pachycephalosaurs',
    'Hadrosaurs'
  ],
  'Prehistoric Reptiles': [
    'Giant Snakes',     // Like Titanoboa
    'Land Reptiles',    // Like Dimetrodon
    'Crocodilians',     // Prehistoric crocodiles and relatives
    'Other Reptiles',
    'Synapsids'
  ],
  'Marine Creatures': [
    'Prehistoric Fish',
    'Invertebrates',
    'Prehistoric Sharks',
    'Prehistoric Whales',
    'Plesiosaurs',
    'Mosasaurs',
    'Marine Arthropods',
    'Ichthyosaurs'
  ],
  'Flying Creatures': [
    'Pterosaurs',
    'Early Birds',
    'Flying Insects'
  ],
  'Early Mammals': [
    'Prehistoric Mammals',
    'Human Ancestors',
    'Ice Age Mammals'
  ],
  'Microorganisms': [
    'Bacteria',
    'Archaea',
    'Early Eukaryotes'
  ]
} as const;

export type Category = keyof typeof categories;
export type Subcategory = typeof categories[Category][number];