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
    period: 'Cretaceous',
    location: 'North America',
    length: '12-15 meters',
    weight: '7,000-8,000 kg',
    diet: 'Carnivore',
    image: '/images//t-rex.jpg',
    description: 'The Tyrannosaurus rex, or T. rex, is one of the most iconic dinosaurs in history. Standing up to 20 feet tall and spanning 40 feet in length, this apex predator dominated the late Cretaceous period about 68–66 million years ago. Known for its massive skull, serrated teeth, and powerful jaw capable of crushing bones, the T. rex was a highly efficient hunter and scavenger. Despite its tiny, seemingly disproportionate arms, each limb was incredibly strong and likely aided in gripping prey. Its keen sense of smell and vision further established it as one of nature’s most formidable carnivores.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
            {
    id: 'megalodon',
    name: 'Otodus Megalodon',
    scientificName: 'Otodus megalodon',
    period: 'Neogene',
    location: 'Global Oceans',
    length: '15-18 meters',
    weight: '70,000 kg',
    diet: 'Carnivore',
    image: '/images//megalodon.jpg',
    description: 'The Megalodon (Otodus megalodon) was the largest shark to ever roam Earth’s oceans, dominating marine ecosystems approximately 23 to 3.6 million years ago. Measuring up to 60 feet in length, this prehistoric predator had massive, serrated teeth up to 7 inches long—ideal for tearing through large prey like whales. Its immense jaw could exert a bite force of over 40,000 pounds, making it one of the most powerful biters in history. Likely a top apex predator, the Megalodon relied on its speed and strength to hunt, patrolling warm waters worldwide. Though extinct, its legacy endures as a symbol of oceanic might and mystery.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Fish'
  },
              {
    id: 'nanotyrannus',
    name: 'Nanotyrannus lancensis',
    scientificName: 'Nanotyrannus lancensis',
    period: 'Cretaceous',
    location: 'North America',
    length: '5-6 meters',
    weight: '1,000 kg',
    diet: 'Carnivore',
    image: '/images/nanotyrannus.jpg',
    description: 'The Nanotyrannus is a controversial genus of small tyrannosaurid, with debates ongoing about whether it is a distinct species or a juvenile Tyrannosaurus rex. Estimated to reach lengths of around 17–20 feet, this predator lived during the late Cretaceous period. With a more slender build and proportionally longer arms compared to T. rex, it may have been an agile and fast hunter, preying on smaller dinosaurs and scavenging. Its lighter skull structure suggests adaptations for speed and precision rather than brute force. While its true identity remains debated, Nanotyrannus represents a fascinating chapter in the study of dinosaur evolution and diversity.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
        {
    id: 'raptorex',
    name: 'Raptorex lancensis',
    scientificName: 'Raptorex kriegsteini',
    period: 'Cretaceous',
    location: 'Asia',
    length: '3 meters',
    weight: '60 kg',
    diet: 'Carnivore',
    image: '/images//raptorex.jpg',
    description: 'The Raptorex was a small but significant tyrannosaurid dinosaur that lived approximately 125 million years ago during the Early Cretaceous period. Measuring about 9 feet in length and weighing roughly 80 pounds, it showcased many of the key features seen in its larger relative, Tyrannosaurus rex, including a large skull, strong hind legs for speed, and small, two-fingered arms. Raptorex’s discovery provided critical insights into the evolutionary development of tyrannosaurs, demonstrating that their characteristic adaptations—such as powerful jaws and reduced arms—evolved in smaller ancestors before scaling up in size. This dinosaur represents an important link in the lineage of one of history’s most famous predators.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
          {
    id: 'stegosaurus',
    name: 'Stegosaurus stenops',
    scientificName: 'Stegosaurus stenops',
    period: 'Jurassic',
    location: 'North America',
    length: '9 meters',
    weight: '5,000-7,000 kg',
    diet: 'Herbivore',
    image: '/images//stegosaurus.jpg',
    description: 'The Stegosaurus is one of the most recognizable dinosaurs, known for its distinctive row of large, bony plates along its back and spiked tail, called the thagomizer, used for defense. This herbivorous dinosaur lived during the Late Jurassic period, around 155–150 million years ago. Measuring up to 30 feet in length and weighing about 5 tons, the Stegosaurus had a relatively small head and brain for its size, suggesting it relied more on instinct than complex behaviors. Its plates may have been used for thermoregulation, display, or intimidation. A gentle giant of its time, the Stegosaurus is a symbol of prehistoric diversity and mystery.',
    category: 'Dinosaurs',
    subcategory: 'Stegosaurs'
  },
        {
    id: 'velociraptor',
    name: 'Velociraptor mongoliensis',
    scientificName: 'Velociraptor mongoliensis',
    period: 'Cretaceous',
    location: 'Asia (Mongolia)',
    length: '2 meters',
    weight: '15-20 kg',
    diet: 'Carnivore',
    image: '/images//velociraptor.jpg',
    description: 'The Velociraptor, often shortened to “raptor,” was a small, feathered carnivorous dinosaur that lived during the Late Cretaceous period, approximately 75–71 million years ago. Standing about 2 feet tall and measuring up to 7 feet in length, this agile predator weighed around 30 pounds, similar to a modern turkey. Its defining features included a curved, sickle-shaped claw on each foot, used for gripping and slashing prey, and a sharp, intelligent gaze that hinted at its advanced hunting strategies. Likely hunting in packs, the Velociraptor may have been both a skilled predator and scavenger. Its discovery revolutionized our understanding of dinosaurs as active, dynamic creatures closely related to birds.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
          {
    id: 'triceratops',
    name: 'Triceratops horridus',
    scientificName: 'Triceratops horridus',
    period: 'Cretaceous',
    location: 'North America',
    length: '8-9 meters',
    weight: '6,000-12,000 kg',
    diet: 'Herbivore',
    image: '/images//triceratops.jpg',
    description: 'The Triceratops, one of the most iconic dinosaurs, was a massive herbivore that roamed North America during the Late Cretaceous period, around 68–66 million years ago. Known for its three facial horns and a large, bony frill extending from the back of its skull, Triceratops reached lengths of up to 30 feet and weighed around 6–12 tons. These features likely served for defense against predators like Tyrannosaurus rex and possibly for display or mating rituals. Despite its intimidating appearance, Triceratops primarily fed on low-lying plants. Its combination of power, adaptability, and distinctiveness makes it a favorite symbol of prehistoric life.',
    category: 'Dinosaurs',
    subcategory: 'Ceratopsians'
  },
        {
    id: 'pterodactyl',
    name: 'Pterodactyl antiquus',
    scientificName: 'Pterodactylus antiquus',
    period: 'Jurassic',
    location: 'Europe (Germany)',
    length: '1-1.5 meters',
    weight: '2-3 kg',
    diet: 'Carnivore',
    image: '/images//Pterodactylus.jpg',
    description: 'One of the first flying reptiles ever discovered, Pterodactylus was a relatively small pterosaur from the Late Jurassic period. Known for its short tail and elongated fourth finger that supported its wing membrane, it was perfectly adapted for aerial life. Despite common misconceptions, it wasn\'t a dinosaur but rather belonged to a separate group of flying reptiles. It likely fed on fish and small marine creatures, using its sharp teeth and excellent vision to catch prey',
    category: 'Flying Creatures',
    subcategory: 'Pterosaurs'
  }
,
          {
    id: 'archaeopteryx',
    name: 'Archaeopteryx lithographica',
    scientificName: 'Archaeopteryx lithographica',
    period: 'Jurassic',
    location: 'Germany',
    length: '0.5 meters',
    weight: '0.5 to 1 kg',
    diet: 'Carnivore',
    image: '/images//archaeopteryx.jpg',
    description: 'Archaeopteryx is a pivotal species in the study of evolution, often considered a transitional fossil between non-avian dinosaurs and modern birds. This small, crow-sized creature lived approximately 150 million years ago during the Late Jurassic period. It possessed a fascinating combination of both avian and reptilian features, such as feathers, wings, and a wishbone similar to birds, alongside teeth, clawed fingers, and a long, bony tail like dinosaurs. These characteristics make Archaeopteryx a key piece of evidence for understanding the evolution of flight and the relationship between dinosaurs and birds',
    category: 'Flying Creatures',
    subcategory: 'Early Birds'
  },
        {
    id: 'dreadnoughtus',
    name: 'Dreadnoughtus schrani',
    scientificName: 'Dreadnoughtus schrani',
    period: 'Cretaceous',
    location: 'South America (Argentina)',
    length: '26 meters',
    weight: '65,000 kg',
    diet: 'Herbivore',
    image: '/images//dreadnoughtus.jpg',
    description: 'The Dreadnoughtus, named for its “fear nothing” stature, is one of the largest known dinosaurs and a member of the titanosaur family. Living approximately 77 million years ago during the Late Cretaceous period, this colossal herbivore measured up to 85 feet in length and weighed an estimated 65 tons—more massive than most other land animals ever to exist. Its long neck allowed it to reach high vegetation, while its massive tail provided balance and potential defense. Despite its size, Dreadnoughtus was likely a slow-moving, peaceful giant. Its remarkably complete fossil remains have provided scientists invaluable insights into the biology of giant sauropods.',
    category: 'Dinosaurs',
    subcategory: 'Sauropods'
  },
    {
    id: 'spinosaurus',
    name: 'Spinosaurus aegyptiacus',
    scientificName: 'Spinosaurus aegyptiacus',
    period: 'Cretaceous',
    location: 'Normal Africa',
    length: '15-18 meters',
    weight: '20,000 - 22,000 kg',
    diet: 'Carnivore',
    image: '/images//spinosaurus.jpg',
    description: 'Spinosaurus, a massive Cretaceous theropod measuring up to 59 feet long and weighing as much as 20 tons, is renowned for its long, crocodile-like snout, conical teeth suited for fish-catching, and distinctive sail-like structure on its back formed by elongated neural spines, which is thought to have played a role in thermoregulation, display, or stability while swimming, as evidence suggests this semi-aquatic dinosaur, with its robust forelimbs, small hindlimbs, and powerful tail, likely spent significant time in water hunting fish, making it one of the most unusual and debated dinosaurs in paleontology.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
        {
    id: 'stromatolite-bacteria',
    name: 'Stromatolite Bacteria',
    scientificName: 'Cyanobacteria (Stromatolite-forming species)',
    period: 'Archean',
    location: 'Shallow marine environments',
    length: 'Microscopic (1-2 µm)',
    weight: 'Not applicable',
    diet: 'Omnivore',
    image: '/images/micro-orgnisims.jpg',
    description: '**Stromatolite bacteria** represent some of Earth\'s earliest life forms, dating back over 3.5 billion years. These ancient microorganisms, primarily cyanobacteria, played a critical role in shaping Earth\'s biosphere. By forming layered, rock-like structures called stromatolites, they created microbial mats that trapped sediment and secreted calcium carbonate, gradually building these formations over time.\n <br> <br> Stromatolite bacteria were also pivotal in the evolution of the planet\'s atmosphere through photosynthesis, producing oxygen that eventually led to the Great Oxidation Event. Though much less common today, modern stromatolites still exist in specific environments, such as Shark Bay in Australia, offering a glimpse into Earth\'s primordial past and the origins of life.',
    category: 'Microorganisms',
    subcategory: 'Bacteria'
  },
    {
    id: 'morganucodon',
    name: 'Morganucodon watsoni',
    scientificName: 'Morganucodon watsoni',
    period: 'Jurassic',
    location: 'Europe and China',
    length: '10-12 cm (including tail)',
    weight: '20-30 grams',
    diet: 'Omnivore',
    image: '/images/Morganucodon.jpg',
    description: 'The Morganucodon is an early mammal-like creature that lived during the Late Triassic to Early Jurassic period, approximately 205–195 million years ago. About the size of a modern shrew, it measured around 4 inches long and weighed only a few ounces. Morganucodon is notable for its transitional features between reptiles and mammals, including differentiated teeth (incisors, canines, and molars) and a jaw structure that incorporated both reptilian and mammalian elements. <br><br>\n\nIt likely fed on insects and small invertebrates, using its sharp teeth and nocturnal habits to avoid predators. Morganucodon represents a pivotal step in mammalian evolution, showcasing traits that would later define true mammals, such as improved hearing and a more advanced jaw joint. Its fossils provide key insights into how early mammals emerged and adapted in a dinosaur-dominated world.',
    category: 'Early Mammals',
    subcategory: 'Prehistoric Mammals'
  },
  {
    id: 'giganotosaurus-carolinii',
    name: 'Giganotosaurus carolinii',
    scientificName: 'Giganotosaurus carolinii',
    period: 'Cretaceous',
    location: 'South America',
    length: '12 – 13 m',
    weight: '4,200 – 14,000 kg',
    diet: 'Carnivore',
    image: '/images/giganotosaurus.jpg',
    description: 'The Giganotosaurus, a colossal theropod that roamed the southern continents of what is now South America during the late Cretaceous period, was an apex predator of staggering proportions, measuring up to 40 feet in length and weighing as much as 8 tons, with a skull nearly 3 feet long, sharp serrated teeth capable of slicing through flesh and bone, and powerful hind limbs that allowed it to chase down prey such as large sauropods, while its relatively long arms, although less robust compared to other theropods like the T. rex, still featured sharp claws that may have been used in pinning or dismembering prey; this formidable hunter likely navigated a landscape of lush forests and open plains, employing a combination of speed, strength, and strategy to dominate its ecosystem, all while facing challenges from other carnivores like the Carcharodontosaurus and dealing with the changing climates and environments of the Cretaceous.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
  {
    id: 'stegosaurus-ungulatus',
    name: 'stegosaurus ungulatus',
    scientificName: 'stegosaurus ungulatus',
    period: 'Jurassic',
    location: 'North America',
    length: '9 meters',
    weight: '3,100-3,800 kg',
    diet: 'Herbivore',
    image: '/images/stegosaurus2.jpg',
    description: 'Stegosaurus ungulatus is another type of Stegosaurus that lived during the Late Jurassic period, characterized by its distinct, large, triangular plates along its back and spiked tail, which likely served both for defense against predators and for thermoregulation, with evidence suggesting it may have inhabited floodplain environments in what is now North America.',
    category: 'Dinosaurs',
    subcategory: 'Stegosaurs'
  },
  {
    id: 'helicoprion-bessonowi',
    name: 'Helicoprion bessonowi',
    scientificName: 'Helicoprion bessonowi',
    period: 'Permian',
    location: 'North America, Europe, and Asia',
    length: '5-8 meters',
    weight: '200-450 kg',
    diet: 'Carnivore',
    image: '/images/helicoprion.jpeg',
    description: 'Helicoprion bessonowi is a fascinating, extinct species of chondrichthyan (cartilaginous fish) that lived approximately 270 million years ago during the Late Permian period. It is most famous for its distinctive, spiral tooth whorl, which was located in the lower jaw and could grow to be up to several centimeters in diameter. This unusual tooth arrangement is thought to have been used to grasp and slice through soft-bodied prey, particularly cephalopods like ammonites, which were likely a significant part of its diet. Fossil evidence of Helicoprion is relatively sparse, with most known specimens consisting of isolated tooth whorls, leading scientists to reconstruct the fish\'s appearance and feeding behavior based on these unique features. The spiral teeth, often compared to a buzzsaw, would have been continuously replaced throughout its life, much like modern sharks. Although its exact size and shape remain speculative, Helicoprion is believed to have been a relatively large predator, likely measuring up to 3 meters in length, with a body form similar to modern-day sharks.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Sharks'
  }];

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