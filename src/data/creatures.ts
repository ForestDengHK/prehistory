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
    image: '/images///megalodon.jpg',
    description: 'The Megalodon (Otodus megalodon) was the largest shark to ever roam Earth’s oceans, dominating marine ecosystems approximately 23 to 3.6 million years ago. Measuring up to 60 feet in length, this prehistoric predator had massive, serrated teeth up to 7 inches long—ideal for tearing through large prey like whales. Its immense jaw could exert a bite force of over 40,000 pounds, making it one of the most powerful biters in history. Likely a top apex predator, the Megalodon relied on its speed and strength to hunt, patrolling warm waters worldwide. Though extinct, its legacy endures as a symbol of oceanic might and mystery.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Sharks'
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
    image: '/images///micro-orgnisims.jpg',
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
    image: '/images//stegosaurus2.jpg',
    description: 'Stegosaurus ungulatus is another type of Stegosaurus that lived during the Late Jurassic period,\nStegosaurus ungulatus can be distinguished from S. stenops by the presence of longer hind limbs, proportionately smaller, more pointed plates with wide bases and narrow tips, and by several small, flat, spine-like plates just before the spikes on the tail.',
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
  },
  {
    id: 'anomalocaris-canadensis',
    name: 'Anomalocaris canadensis',
    scientificName: 'Anomalocaris canadensis',
    period: 'Cambrian',
    location: 'North America',
    length: ' 34.2–37.8 cm',
    weight: '2 Kgs for the larger species and 400-500 Grams for smaller species',
    diet: 'Carnivore',
    image: '/images/anomalocaris.jpg',
    description: 'Anomalocaris, one of the most enigmatic and formidable predators of the Cambrian explosion, flourished around 500 million years ago, characterized by its elongated, segmented body, which could grow up to 1 meter in length, and its highly specialized appendages—frontal, serrated \"arms\" that it used to capture prey, such as trilobites and other small marine organisms; its circular, disk-like mouth, resembling a set of lobed plates, could efficiently crush and tear its food, while its enormous, multifaceted eyes, which were among the largest of any arthropod, offered exceptional vision for hunting and detecting prey in the murky, primordial seas. Additionally, Anomalocaris\' unique body structure, with its powerful, flexible trunk and wide, paddle-like tail, allowed for swift, agile movement, making it a top predator in the complex marine ecosystem of the early Paleozoic era.',
    category: 'Marine Creatures',
    subcategory: 'Invertebrates'
  },
        {
    id: 'liopleurodon-ferox',
    name: 'Liopleurodon ferox',
    scientificName: 'Liopleurodon ferox',
    period: 'Jurassic',
    location: 'Europe',
    length: '4.9 – 7 m',
    weight: '1,000 – 1,700 kg',
    diet: 'Carnivore',
    image: '/images////liopleurodon.jpg',
    description: 'Liopleurodon, a massive marine reptile from the Middle Jurassic period, was a formidable predator that could grow up to 25 meters in length, belonging to the family Pliosauridae, a group of short-necked, large-headed plesiosaurs; its powerful, crocodile-like jaws, lined with sharp teeth, were well-suited for capturing and consuming large prey, including fish, marine reptiles, and possibly even smaller dinosaurs, while its streamlined body, with robust flippers and a tail adapted for propulsion, allowed it to swiftly dominate the seas of ancient Europe.\n Liopleurodon\'s impressive size and strength, combined with its acute sensory adaptations, made it one of the ocean\'s apex predators during the Jurassic, hunting in deep, coastal waters where it would have likely competed with other large marine reptiles like the long-necked Elasmosaurus and the giant fish Ichthyosaurs.\n Its fossils, often found in what is now the United Kingdom, reveal an animal that was not only a top predator but also highly adapted to a fully aquatic lifestyle, capable of fast, powerful movements in pursuit of its prey.',
    category: 'Marine Creatures',
    subcategory: 'Marine Reptiles'
  },
      {
    id: 'mosasaurus-hoffmannii',
    name: 'Mosasaurus hoffmannii',
    scientificName: 'Mosasaurus hoffmannii',
    period: 'Cretaceous',
    location: 'All around the world (even Antartica)',
    length: '15-17',
    weight: '10,00 kg',
    diet: 'Carnivore',
    image: '/images/mosasaurus.jpg',
    description: 'Mosasaurus, a giant marine reptile that thrived during the Late Cretaceous period, was a dominant apex predator in the seas, growing up to 17 meters in length, with a sleek, hydrodynamic body and powerful tail that allowed it to navigate the water with remarkable speed and agility; as a member of the Mosasauridae family, it possessed long, paddle-like limbs and a large, muscular jaw, which was capable of delivering crushing bites with rows of sharp, conical teeth designed for grasping and tearing its prey, including fish, ammonites, and even other marine reptiles. With its highly specialized adaptations, Mosasaurus was one of the top predators in the oceans, hunting in both coastal and deep-sea environments, and its fossilized remains, often found in what is now Europe and North America, suggest it had evolved to be a fully aquatic creature, with a tail stroke propelling it much like modern marine animals such as dolphins. The mosasaur’s success was further bolstered by its ability to adapt to various environmental conditions, from warm shallow seas to deeper, more turbulent waters, making it a key player in the complex marine ecosystems leading up to the mass extinction event at the end of the Cretaceous.',
    category: 'Marine Creatures',
    subcategory: 'Marine Reptiles'
  },
        {
    id: 'sarcoprion-edax',
    name: 'Sarcoprion edax',
    scientificName: 'Sarcoprion edax',
    period: 'Permian',
    location: 'North America',
    length: '6 meters',
    weight: 'unknown',
    diet: 'Carnivore',
    image: '/images/sarcoprion2.jpg',
    description: 'Sarcoprion, a lesser-known but fascinating extinct genus of cartilaginous fish, lived during the Devonian period, around 380 million years ago, and is regarded as one of the earliest members of the Chondrichthyes class, which includes modern sharks, rays, and skates. This predatory fish was distinguished by its elongated, streamlined body, featuring sharp, well-developed teeth and a large, powerful jaw capable of delivering a strong bite, likely allowing it to capture and feed on smaller fish and invertebrates. Fossil evidence of Sarcoprion suggests it had a robust fin structure, with large pectoral and pelvic fins that may have aided in swift, agile movements, while its tail, though relatively short, was likely designed for quick bursts of speed. As one of the pioneering apex predators in the early oceans, Sarcoprion would have been a crucial part of the marine ecosystem, helping shape the evolution of early cartilaginous fish. Its fossils, though relatively rare, provide key insights into the diversification of early vertebrates and the development of predation strategies in the ancient seas.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Sharks'
  },
    {
    id: 'dunkleosteus-terrelli',
    name: 'dunkleosteus terrelli',
    scientificName: 'dunkleosteus terrelli',
    period: 'Devonian',
    location: 'Europe and Africa',
    length: '4.1–10 metres',
    weight: '950–1,200 kg',
    diet: 'Carnivore',
    image: '/images/dunkleosteus.jpg',
    description: 'unkleosteus, one of the largest and most fearsome placoderm fish to ever exist, lived during the Late Devonian period, around 358 to 382 million years ago, and is often considered one of the first true apex predators in Earth\'s oceans. Growing up to 10 meters (33 feet) in length and weighing several tons, Dunkleosteus was a heavily armored fish with a robust, bony head shield made of thick, fused plates, providing it with unparalleled protection against predators and rivals. Unlike modern fish with teeth, Dunkleosteus had a pair of formidable, razor-sharp bony plates that formed a beak-like structure capable of slicing through the flesh and bone of its prey, including other large fish, cephalopods, and possibly even smaller placoderms. This prehistoric predator\'s jaw was capable of delivering one of the most powerful bites of any known vertebrate, with estimates suggesting forces between 1 and 4 tons, allowing it to quickly incapacitate or kill large prey. Its streamlined, torpedo-shaped body, combined with its large, powerful pectoral fins, suggests it was highly efficient in swift, aggressive hunting, able to ambush and overpower its prey in the shallow, warm waters of the Devonian seas. Dunkleosteus remains a symbol of the ancient fish world, showcasing the incredible adaptations that early vertebrates developed as they evolved into the dominant predators of their time.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Fish'
  },
  {
    id: 'shonisaurus-popularis',
    name: 'Shonisaurus popularis',
    scientificName: 'Shonisaurus popularis',
    period: 'Triassic',
    location: 'North America',
    length: '3.5–15 metres ',
    weight: '30,000 kg',
    diet: 'Carnivore',
    image: '/images/shoniosaurus.jpeg',
    description: 'Shoniosaurus was a large marine reptile from the Late Cretaceous period, belonging to the family Shonisauridae and a member of the order Ichthyosauria. This impressive marine predator could grow up to 15 meters in length and had a long, streamlined body, reminiscent of a modern dolphin, designed for fast swimming through the warm seas of what is now North America and Europe. With a relatively short neck, large eyes, and a pointed snout filled with conical teeth, Shoniosaurus was well adapted to hunt fish and cephalopods, including squid, in deep or coastal waters. It had a large, powerful tail that helped it propel itself swiftly through the water, and its pectoral and pelvic fins were adapted for maneuverability, allowing it to make rapid, controlled movements when chasing prey or evading larger predators. Unlike some of its ichthyosaur relatives, Shoniosaurus had a less pronounced dorsal fin, likely because it did not need it for balance in its aquatic environment. Fossil evidence of this animal shows that it likely gave birth to live young, as is characteristic of many ichthyosaurs, making it an important part of the Mesozoic marine ecosystem. The genus is often seen as an example of the peak evolution of ichthyosaurs just before the group’s eventual decline at the end of the Cretaceous.',
    category: 'Marine Creatures',
    subcategory: 'Marine Reptiles'
  },
  {
    id: 'ichthyotitan-severnensis',
    name: 'Ichthyotitan severnensis',
    scientificName: 'Ichthyotitan severnensis',
    period: 'Triassic',
    location: 'Europe',
    length: 'nearly 25 metres',
    weight: 'unknown',
    diet: 'Carnivore',
    image: '/images/Ichthyotitan.jpg',
    description: 'Ichthyotitan is the only shastasaurid and giant ichthyosaur to be known from the Rhaetian, found in the fossil record 13 million years after their relatives. The lineage is believed to have gone extinct immediately after in the Triassic–Jurassic extinction event, with later ichthyosaurs never reaching similar sizes until their extinction in the early Late Cretaceous.',
    category: 'Marine Creatures',
    subcategory: 'Marine Reptiles'
  },
    {
    id: 'pinosaurus-maroccanus',
    name: 'Spinosaurus maroccanus',
    scientificName: 'Spinosaurus maroccanus',
    period: 'Cretaceous',
    location: 'Africa',
    length: '15-18 meters',
    weight: '20,000 - 22,000 kg',
    diet: 'Carnivore',
    image: '/images//Spinosaurus-morrconass.jpg',
    description: 'Not much is known about this type of Spinosaurus or whether if it actually existed',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
  {
    id: 'carcharodontosaurus-saharicus',
    name: 'Carcharodontosaurus saharicus',
    scientificName: 'Carcharodontosaurus saharicus',
    period: 'Cretaceous',
    location: 'Africa',
    length: '12-13 meters',
    weight: '6,000 – 15,000 kg',
    diet: 'Carnivore',
    image: '/images/char.jpg',
    description: 'Carcharodontosaurus, a massive and fearsome theropod dinosaur from the mid-Cretaceous period, roamed what is now North Africa around 100 million years ago, and was one of the largest carnivores of its time, growing up to 13 meters (43 feet) in length and weighing over 7 tons. Its name, meaning \"shark-toothed lizard,\" reflects its most distinctive feature: a set of long, serrated teeth resembling those of a great white shark, which were perfectly suited for slicing through the flesh of its prey, including large herbivorous dinosaurs like Apatosaurus and Camarasaurus. Carcharodontosaurus had a robust, yet relatively lightweight, body built for speed and power, with long hind limbs for swift running and a large, muscular tail for balance, helping it maintain agility as it chased down prey in the open landscapes of ancient Africa. Its skull, elongated and narrow, was equipped with large, forward-facing eyes that would have given it excellent binocular vision, critical for spotting prey from a distance. Additionally, the dinosaur’s large nasal passages suggest that it may have had a keen sense of smell. Carcharodontosaurus\' hunting style is thought to have involved ambushing or outpacing slower prey, using its powerful bite to incapacitate victims quickly. As one of the top predators of the Cretaceous ecosystem, it competed with other giant theropods like Spinosaurus and Tyrannosaurus for dominance in the food chain, although it lived in different parts of the world. Fossils of Carcharodontosaurus have been found in what is now Morocco and Algeria, offering important insights into the diversity and evolutionary paths of large theropods during the Cretaceous period.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
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