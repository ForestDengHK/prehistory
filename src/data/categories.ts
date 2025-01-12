export const categories = {
  'Dinosaurs': ['Theropods', 'Sauropods', 'Ceratopsians', 'Ornithopods', 'Stegosaurs', 'Ankylosaurs'],
  'Marine Creatures': ['Prehistoric Fish', 'Marine Reptiles', 'Invertebrates', 'Prehistoric Sharks', 'Prehistoric Whales'],
  'Flying Creatures': ['Pterosaurs', 'Early Birds', 'Flying Insects'],
  'Early Mammals': ['Prehistoric Mammals', 'Human Ancestors', 'Ice Age Mammals'],
  'Microorganisms': ['Bacteria', 'Archaea', 'Early Eukaryotes']
} as const;

export type Category = keyof typeof categories;
export type Subcategory = typeof categories[Category][number];