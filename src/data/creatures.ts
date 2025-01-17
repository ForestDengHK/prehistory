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
  family: string;
}

export interface SearchResult extends Creature {
  matches: {
    name: boolean;
    scientificName: boolean;
    period: boolean;
    location: boolean;
    diet: boolean;
    description: boolean;
    category: boolean;
    subcategory: boolean;
    family: boolean;
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
    image: '/images/t-rex.jpg',
    description: 'The Tyrannosaurus rex, or T. rex, is one of the most iconic dinosaurs in history. Standing up to 20 feet tall and spanning 40 feet in length, this apex predator dominated the late Cretaceous period about 68–66 million years ago. Known for its massive skull, serrated teeth, and powerful jaw capable of crushing bones, the T. rex was a highly efficient hunter and scavenger. Despite its tiny, seemingly disproportionate arms, each limb was incredibly strong and likely aided in gripping prey. Its keen sense of smell and vision further established it as one of nature’s most formidable carnivores.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Tyrannosauridae'
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
    image: '/images/megalodon.jpg',
    description: 'The Megalodon (Otodus megalodon) was the largest shark to ever roam Earth’s oceans, dominating marine ecosystems approximately 23 to 3.6 million years ago. Measuring up to 60 feet in length, this prehistoric predator had massive, serrated teeth up to 7 inches long—ideal for tearing through large prey like whales. Its immense jaw could exert a bite force of over 40,000 pounds, making it one of the most powerful biters in history. Likely a top apex predator, the Megalodon relied on its speed and strength to hunt, patrolling warm waters worldwide. Though extinct, its legacy endures as a symbol of oceanic might and mystery.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Sharks',
    family: 'Otodontidae'
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
    subcategory: 'Theropods',
    family: 'Tyrannosauridae'
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
    image: '/images/raptorex.jpg',
    description: 'The Raptorex was a small but significant tyrannosaurid dinosaur that lived approximately 125 million years ago during the Early Cretaceous period. Measuring about 9 feet in length and weighing roughly 80 pounds, it showcased many of the key features seen in its larger relative, Tyrannosaurus rex, including a large skull, strong hind legs for speed, and small, two-fingered arms. Raptorex’s discovery provided critical insights into the evolutionary development of tyrannosaurs, demonstrating that their characteristic adaptations—such as powerful jaws and reduced arms—evolved in smaller ancestors before scaling up in size. This dinosaur represents an important link in the lineage of one of history’s most famous predators.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Tyrannosauridae'
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
    image: '/images/stegosaurus.jpg',
    description: 'The Stegosaurus is one of the most recognizable dinosaurs, known for its distinctive row of large, bony plates along its back and spiked tail, called the thagomizer, used for defense. This herbivorous dinosaur lived during the Late Jurassic period, around 155–150 million years ago. Measuring up to 30 feet in length and weighing about 5 tons, the Stegosaurus had a relatively small head and brain for its size, suggesting it relied more on instinct than complex behaviors. Its plates may have been used for thermoregulation, display, or intimidation. A gentle giant of its time, the Stegosaurus is a symbol of prehistoric diversity and mystery.',
    category: 'Dinosaurs',
    subcategory: 'Stegosaurs',
    family: 'Stegosauridae'
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
    image: '/images/velociraptor.jpg',
    description: 'The Velociraptor, often shortened to “raptor,” was a small, feathered carnivorous dinosaur that lived during the Late Cretaceous period, approximately 75–71 million years ago. Standing about 2 feet tall and measuring up to 7 feet in length, this agile predator weighed around 30 pounds, similar to a modern turkey. Its defining features included a curved, sickle-shaped claw on each foot, used for gripping and slashing prey, and a sharp, intelligent gaze that hinted at its advanced hunting strategies. Likely hunting in packs, the Velociraptor may have been both a skilled predator and scavenger. Its discovery revolutionized our understanding of dinosaurs as active, dynamic creatures closely related to birds.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Dromaeosauridae'
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
    image: '/images/triceratops.jpg',
    description: 'The Triceratops, one of the most iconic dinosaurs, was a massive herbivore that roamed North America during the Late Cretaceous period, around 68–66 million years ago. Known for its three facial horns and a large, bony frill extending from the back of its skull, Triceratops reached lengths of up to 30 feet and weighed around 6–12 tons. These features likely served for defense against predators like Tyrannosaurus rex and possibly for display or mating rituals. Despite its intimidating appearance, Triceratops primarily fed on low-lying plants. Its combination of power, adaptability, and distinctiveness makes it a favorite symbol of prehistoric life.',
    category: 'Dinosaurs',
    subcategory: 'Ceratopsians',
    family: 'Triceratopsidae'
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
    image: '/images/Pterodactylus.jpg',
    description: 'One of the first flying reptiles ever discovered, Pterodactylus was a relatively small pterosaur from the Late Jurassic period. Known for its short tail and elongated fourth finger that supported its wing membrane, it was perfectly adapted for aerial life. Despite common misconceptions, it wasn\'t a dinosaur but rather belonged to a separate group of flying reptiles. It likely fed on fish and small marine creatures, using its sharp teeth and excellent vision to catch prey',
    category: 'Flying Creatures',
    subcategory: 'Pterosaurs',
    family: 'Pterodactylidae'
  },
          {
    id: 'archaeopteryx',
    name: 'Archaeopteryx lithographica',
    scientificName: 'Archaeopteryx lithographica',
    period: 'Jurassic',
    location: 'Germany',
    length: '0.5 meters',
    weight: '0.5 to 1 kg',
    diet: 'Carnivore',
    image: '/images/archaeopteryx.jpg',
    description: 'Archaeopteryx is a pivotal species in the study of evolution, often considered a transitional fossil between non-avian dinosaurs and modern birds. This small, crow-sized creature lived approximately 150 million years ago during the Late Jurassic period. It possessed a fascinating combination of both avian and reptilian features, such as feathers, wings, and a wishbone similar to birds, alongside teeth, clawed fingers, and a long, bony tail like dinosaurs. These characteristics make Archaeopteryx a key piece of evidence for understanding the evolution of flight and the relationship between dinosaurs and birds',
    category: 'Flying Creatures',
    subcategory: 'Early Birds',
    family: 'Archaeopteryxidae'
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
    image: '/images/dreadnoughtus.jpg',
    description: 'The Dreadnoughtus, named for its “fear nothing” stature, is one of the largest known dinosaurs and a member of the titanosaur family. Living approximately 77 million years ago during the Late Cretaceous period, this colossal herbivore measured up to 85 feet in length and weighed an estimated 65 tons—more massive than most other land animals ever to exist. Its long neck allowed it to reach high vegetation, while its massive tail provided balance and potential defense. Despite its size, Dreadnoughtus was likely a slow-moving, peaceful giant. Its remarkably complete fossil remains have provided scientists invaluable insights into the biology of giant sauropods.',
    category: 'Dinosaurs',
    subcategory: 'Sauropods',
    family: 'Titanosauridae'
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
    image: '/images/spinosaurus.jpg',
    description: 'Spinosaurus, a massive Cretaceous theropod measuring up to 59 feet long and weighing as much as 20 tons, is renowned for its long, crocodile-like snout, conical teeth suited for fish-catching, and distinctive sail-like structure on its back formed by elongated neural spines, which is thought to have played a role in thermoregulation, display, or stability while swimming, as evidence suggests this semi-aquatic dinosaur, with its robust forelimbs, small hindlimbs, and powerful tail, likely spent significant time in water hunting fish, making it one of the most unusual and debated dinosaurs in paleontology.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Spinosauridae'
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
    subcategory: 'Bacteria',
    family: 'Cyanobacteria'
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
    subcategory: 'Prehistoric Mammals',
    family: 'Morganucodontidae'
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
    subcategory: 'Theropods',
    family: 'Tyrannosauridae'
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
    description: 'Stegosaurus ungulatus is another type of Stegosaurus that lived during the Late Jurassic period,\nStegosaurus ungulatus can be distinguished from S. stenops by the presence of longer hind limbs, proportionately smaller, more pointed plates with wide bases and narrow tips, and by several small, flat, spine-like plates just before the spikes on the tail.',
    category: 'Dinosaurs',
    subcategory: 'Stegosaurs',
    family: 'Stegosauridae'
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
    subcategory: 'Prehistoric Sharks',
    family: 'Helicoprionidae'
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
    subcategory: 'Invertebrates',
    family: 'Anomalocarisidae'
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
    image: '/images/liopleurdon.jpg',
    description: 'Liopleurodon, a massive marine reptile from the Middle Jurassic period, was a formidable predator that could grow up to 25 meters in length, belonging to the family Pliosauridae, a group of short-necked, large-headed plesiosaurs; its powerful, crocodile-like jaws, lined with sharp teeth, were well-suited for capturing and consuming large prey, including fish, marine reptiles, and possibly even smaller dinosaurs, while its streamlined body, with robust flippers and a tail adapted for propulsion, allowed it to swiftly dominate the seas of ancient Europe.\n Liopleurodon\'s impressive size and strength, combined with its acute sensory adaptations, made it one of the ocean\'s apex predators during the Jurassic, hunting in deep, coastal waters where it would have likely competed with other large marine reptiles like the long-necked Elasmosaurus and the giant fish Ichthyosaurs.\n Its fossils, often found in what is now the United Kingdom, reveal an animal that was not only a top predator but also highly adapted to a fully aquatic lifestyle, capable of fast, powerful movements in pursuit of its prey.',
    category: 'Marine Creatures',
    subcategory: 'Marine Reptiles',
    family: 'Liopleurodonidae'
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
    subcategory: 'Marine Reptiles',
    family: 'Mosasauridae'
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
    subcategory: 'Prehistoric Sharks',
    family: 'Sarcoprionidae'
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
    description: 'Dunkleosteus, one of the largest and most fearsome placoderm fish to ever exist, lived during the Late Devonian period, around 358 to 382 million years ago, and is often considered one of the first true apex predators in Earth\'s oceans. Growing up to 10 meters (33 feet) in length and weighing several tons, Dunkleosteus was a heavily armored fish with a robust, bony head shield made of thick, fused plates, providing it with unparalleled protection against predators and rivals. Unlike modern fish with teeth, Dunkleosteus had a pair of formidable, razor-sharp bony plates that formed a beak-like structure capable of slicing through the flesh and bone of its prey, including other large fish, cephalopods, and possibly even smaller placoderms. This prehistoric predator\'s jaw was capable of delivering one of the most powerful bites of any known vertebrate, with estimates suggesting forces between 1 and 4 tons, allowing it to quickly incapacitate or kill large prey. Its streamlined, torpedo-shaped body, combined with its large, powerful pectoral fins, suggests it was highly efficient in swift, aggressive hunting, able to ambush and overpower its prey in the shallow, warm waters of the Devonian seas. Dunkleosteus remains a symbol of the ancient fish world, showcasing the incredible adaptations that early vertebrates developed as they evolved into the dominant predators of their time.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Fish',
    family: 'Dunkleosteidae'
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
    subcategory: 'Marine Reptiles',
    family: 'Shonisauridae'
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
    subcategory: 'Marine Reptiles',
    family: 'Ichthyosauridae'
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
    image: '/images/Spinosaurus-morrconass.jpg',
    description: 'Not much is known about this type of Spinosaurus or whether if it actually existed',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Spinosauridae'
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
    image: '/images/jur.jpg',
    description: 'Carcharodontosaurus, a massive and fearsome theropod dinosaur from the mid-Cretaceous period, roamed what is now North Africa around 100 million years ago, and was one of the largest carnivores of its time, growing up to 13 meters (43 feet) in length and weighing over 7 tons. Its name, meaning \"shark-toothed lizard,\" reflects its most distinctive feature: a set of long, serrated teeth resembling those of a great white shark, which were perfectly suited for slicing through the flesh of its prey, including large herbivorous dinosaurs like Apatosaurus and Camarasaurus. Carcharodontosaurus had a robust, yet relatively lightweight, body built for speed and power, with long hind limbs for swift running and a large, muscular tail for balance, helping it maintain agility as it chased down prey in the open landscapes of ancient Africa. Its skull, elongated and narrow, was equipped with large, forward-facing eyes that would have given it excellent binocular vision, critical for spotting prey from a distance. Additionally, the dinosaur’s large nasal passages suggest that it may have had a keen sense of smell. Carcharodontosaurus\' hunting style is thought to have involved ambushing or outpacing slower prey, using its powerful bite to incapacitate victims quickly. As one of the top predators of the Cretaceous ecosystem, it competed with other giant theropods like Spinosaurus and Tyrannosaurus for dominance in the food chain, although it lived in different parts of the world. Fossils of Carcharodontosaurus have been found in what is now Morocco and Algeria, offering important insights into the diversity and evolutionary paths of large theropods during the Cretaceous period.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Carcharodontosauridae'
  },
    {
    id: 'ceratosaurus-nasicornis',
    name: 'Ceratosaurus nasicornis',
    scientificName: 'Ceratosaurus nasicornis',
    period: 'Jurassic',
    location: 'North America, Europe, Asia, and Africa',
    length: '6-8 meters',
    weight: '980 kg',
    diet: 'Carnivore',
    image: '/images/Ceratosaurus.jpg',
    description: 'The Ceratosaurus was a medium-sized theropod that lived approximately 150 to 145 million years ago, during the Late Jurassic period. It had a unique, toothless, and possibly horn-like structure on its snout, which may have been a display feature used for mating rituals or to establish dominance within its species. With a length of about 4 to 5 meters (13 to 16 feet), it was relatively smaller than some of its contemporaries, like Allosaurus, but still a powerful predator. Its body was characterized by a long, muscular tail, a lightweight, aerodynamic build, and powerful hind legs, enabling it to run swiftly in pursuit of smaller prey. The Ceratosaurus had a relatively large head with sharp teeth in its jaws, making it capable of slicing through the flesh of its prey, which likely included fish, small dinosaurs, and possibly scavenged carcasses. Fossils suggest that it lived in what is now North America and parts of Europe, thriving in diverse ecosystems ranging from coastal areas to floodplains.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: ''
  },
  {
    id: 'ceratosaurus-dentisulcatus',
    name: 'Ceratosaurus dentisulcatus',
    scientificName: 'Ceratosaurus dentisulcatus',
    period: 'Jurassic',
    location: 'North America, Europe, Asia, and Africa',
    length: '3.5-4 meters',
    weight: '980 kg',
    diet: 'Carnivore',
    image: '/images/ceratosaurus2.png',
    description: 'Ceratosaurus dentisulcatus and Ceratosaurus nasicornis exhibit distinct differences in their physical characteristics and likely ecological roles, with C. nasicornis featuring a prominent, horn-like structure on its nose, which may have been used for display or combat, and a more robust, larger body measuring up to 8 meters in length, suggesting it could have been a versatile predator capable of both hunting and scavenging; in contrast, C. dentisulcatus was generally smaller, around 3.5 to 4 meters long, with more specialized, serrated teeth likely adapted for a diet focused on smaller, more agile prey, and a less pronounced nasal feature, indicating it may have been a more nimble and precise predator, occupying a slightly different ecological niche.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
    {
    id: 'allosaurus-fragilis',
    name: 'Allosaurus fragilis',
    scientificName: 'Allosaurus fragilis',
    period: 'Jurassic',
    location: 'North America',
    length: '7-10 meters',
    weight: '20,000 kg',
    diet: 'Carnivore',
    image: '/images/allosaurus.jpg',
    description: 'The Allosaurus, one of the most fearsome predators of the Late Jurassic period (around 155 to 150 million years ago), was a large theropod dinosaur distinguished by its strong, muscular body, large skull, and sharp, serrated teeth, which were perfectly designed for slicing through the flesh of its prey. Growing up to 12 meters (39 feet) in length and weighing up to 2.5 tons, it was built for both strength and agility, with long, powerful hind limbs that allowed it to move quickly and deliver devastating attacks, while its shorter forelimbs, though not as robust as its hind legs, were still equipped with three sharp claws that may have been used for grasping or holding onto prey. Allosaurus had a relatively lightweight, flexible skeleton, making it a more nimble predator compared to other contemporaries like Brachiosaurus or Stegosaurus. Its teeth and jaws were designed for cutting rather than crushing, suggesting it may have scavenged or actively hunted smaller herbivorous dinosaurs like Stegosaurus, Apatosaurus, and even young sauropods. The structure of its skull, with large fenestrae (openings), reduced the weight while providing space for powerful jaw muscles. Evidence also suggests Allosaurus may have hunted in packs, coordinating strategies to take down larger prey, although some studies suggest it may have also hunted alone, relying on ambush tactics. Fossilized remains have been found in North America, particularly in the Morrison Formation, indicating that Allosaurus was widespread and an apex predator in its ecosystem. Its speed, combined with keen senses, made it a formidable and versatile hunter, capable of taking on a wide range of prey.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: ''
  },
  {
    id: 'cryolophosaurus-ellioti',
    name: 'Cryolophosaurus ellioti',
    scientificName: 'Cryolophosaurus ellioti',
    period: 'Jurassic',
    location: 'Antartica',
    length: '6–7 m',
    weight: '460 – 500 kg',
    diet: 'Carnivore',
    image: '/images/cryolophosaurus.jpg',
    description: 'Cryolophosaurus is an early theropod dinosaur from the Early Jurassic period, approximately 194 million years ago, known for its distinctive, fan-shaped crest on its head, which may have been used for display or species recognition, similar to modern-day crested birds. Growing up to 6 meters (20 feet) in length, Cryolophosaurus was one of the first large carnivores to inhabit what is now Antarctica, providing significant insight into the evolution of dinosaurs in polar regions. Its slender, yet powerful build, with long legs and a lightweight frame, suggests that it was a fast, agile predator, likely hunting small to medium-sized prey, such as early herbivorous dinosaurs and possibly scavenging from larger carcasses. Unlike many other theropods, Cryolophosaurus had an unusual combination of primitive and more advanced features, with a skull that showed both characteristics of earlier dinosaurs like Coelophysis and later theropods, making it an important link in the evolutionary chain. Fossils of Cryolophosaurus were discovered in the Queen Alexandra Range of Antarctica in the 1990s, marking it as one of the earliest known dinosaurs from the southern hemisphere and providing evidence that dinosaurs were able to adapt to even the colder, more isolated climates of the early Mesozoic.',
    category: 'Dinosaurs',
    subcategory: 'Theropods'
  },
    {
    id: 'argentinosaurus-huinculensis',
    name: 'Argentinosaurus huinculensis',
    scientificName: 'Argentinosaurus huinculensis',
    period: 'Cretaceous',
    location: 'South America',
    length: '30–35 m ',
    weight: '50,000 – 100,000 kg',
    diet: 'Herbivore',
    image: '/images/argintinasauarus.jpeg',
    description: 'Argentinosaurus was one of the largest known land animals to have ever existed, a massive sauropod dinosaur from the Late Cretaceous period, approximately 94 to 97 million years ago, that roamed what is now South America. Estimated to have reached lengths of up to 35 meters (115 feet) and weighed as much as 100 tons, Argentinosaurus was an herbivorous giant, with a long neck and tail, which allowed it to browse on high vegetation while also reaching the ground for lower-growing plants. Its enormous size not only made it a formidable presence in its ecosystem but likely also helped deter predators like Giganotosaurus and other theropods. Despite its size, its long, graceful neck would have enabled it to feed across vast areas without needing to move constantly, and its thick, pillar-like legs supported its massive body. Fossil evidence of Argentinosaurus is limited to incomplete skeletons, mostly from vertebrae and limb bones, found in the Neuquén Province of Argentina, leading to its name. Because of its immense proportions, it is often cited as one of the heaviest and longest sauropods, alongside other giants like Patagotitan and Dreadnoughtus. As an herbivore, it would have likely lived in herds, and its size may have helped it maintain a largely solitary lifestyle, avoiding predators by sheer magnitude and perhaps using its tail for defense. The discovery of Argentinosaurus was pivotal in understanding the diversity and size range of Late Cretaceous sauropods, underscoring the extreme evolutionary paths that some herbivorous dinosaurs took to dominate the Mesozoic landscapes.',
    category: 'Dinosaurs',
    subcategory: 'Sauropods',
    family: 'Titanosauridae'
  },
  {
    id: 'quetzalcoatlus-northropi',
    name: 'Quetzalcoatlus northropi',
    scientificName: 'Quetzalcoatlus northropi',
    period: 'Cretaceous',
    location: 'North America',
    length: '10 – 11 m',
    weight: '200 – 250 kg',
    diet: 'Carnivore',
    image: '/images/quetzal.jpeg',
    description: 'Quetzalcoatlus, one of the largest pterosaurs to ever live, boasted an extraordinary wingspan of up to 36 feet and a body length of around 10 to 12 feet, with a lightweight structure designed for flight, featuring a long, toothless beak likely used for snatching small prey like fish, amphibians, and potentially small dinosaurs; its long, slender legs suggest it may have been capable of walking bipedally, possibly even running on land, while its soaring ability allowed it to glide for vast distances in search of food or to avoid predators, occupying a unique ecological niche alongside some of the most famous dinosaurs of the Late Cretaceous, such as Tyrannosaurus rex and Triceratops, before going extinct in the mass extinction event that wiped out the dinosaurs around 66 million years ago.',
    category: 'Flying Creatures',
    subcategory: 'Pterosaurs'
  },
        {
    id: 'brachiosaurus-altithorax',
    name: 'Brachiosaurus altithorax',
    scientificName: 'Brachiosaurus altithorax',
    period: 'Jurassic',
    location: 'North America',
    length: '18 – 22 m',
    weight: '28,300-46,900 kg',
    diet: 'Herbivore',
    image: '/images/Brachiosaurus.jpg',
    description: 'Brachiosaurus, a towering herbivorous dinosaur from the Late Jurassic period, is known for its distinctively long neck, which was longer than its tail, and its unique body structure, with front legs that were significantly longer than the hind legs, giving it an upright, giraffe-like posture; this adaptation allowed it to reach and feed on vegetation high up in trees, well beyond the reach of most other herbivores of its time, and it grew to an enormous size, with estimates placing its length at around 80 feet and its weight at up to 80 tons, making it one of the largest and heaviest dinosaurs to roam the Earth, while its fossils have been found in what are now North America and Africa, providing vital clues about the ecological roles of massive sauropods during the Jurassic, before it, like many other dinosaurs, became extinct at the end of the Mesozoic Era around 66 million years ago.',
    category: 'Dinosaurs',
    subcategory: 'Sauropods',
    family: 'Brachiosauridae'
  },
  {
    id: '-livyatan-melvillei',
    name: ' Livyatan melvillei',
    scientificName: ' Livyatan melvillei',
    period: 'Neogene',
    location: 'South America',
    length: '13-16 meters',
    weight: '57,000 kg',
    diet: 'Carnivore',
    image: '/images/livyatan.jpg',
    description: '\nChatGPT\nLivyatan is an extinct genus of gigantic predatory whale that inhabited the oceans during the Miocene epoch, approximately 12 to 13 million years ago. It was a member of the family Physeteridae, closely related to modern sperm whales, and could reach lengths of 13 to 17 meters, making it one of the largest marine predators of its time. Livyatan had an incredibly powerful bite, with teeth that could exceed 36 centimeters in length, enabling it to prey on large marine mammals such as seals, dolphins, and even other whales. Fossil evidence suggests it had a robust and muscular body, capable of deep diving to hunt in the open ocean, and its sheer size and predatory capabilities positioned it as a dominant force in the ancient marine ecosystem, rivaling other apex predators like the giant shark Carcharocles megalodon. The genus is named after the biblical Leviathan, reflecting its immense power and size.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Whales'
  },
  {
    id: 'carcharocles-megalodon',
    name: 'carcharocles megalodon',
    scientificName: 'carcharocles megalodon',
    period: 'Neogene',
    location: 'every continent except Antarctica',
    length: ' 15-18 meters',
    weight: '50,000-70,000',
    diet: 'Carnivore',
    image: '/images/megalodon2.jpg',
    description: 'Carcharocles megalodon was an enormous prehistoric shark that roamed the oceans from approximately 23 to 3.6 million years ago, during the Cenozoic Era, and is considered the largest shark to ever exist, reaching lengths of up to 18 meters (59 feet) or more, and possibly weighing as much as 50 to 70 tons; with its massive, serrated teeth—some of which exceeded 18 centimeters (7 inches)—and a powerful bite force, megalodon was a dominant apex predator capable of preying on large marine mammals, including whales and dolphins, making it a fearsome force in the ancient oceans that rivaled even the largest marine predators like Livyatan.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Sharks'
  },
  {
    id: 'basilosaurus-cetoides',
    name: 'Basilosaurus cetoides',
    scientificName: 'Basilosaurus cetoides',
    period: 'Paleogene',
    location: 'North America',
    length: ' 17–20 metres',
    weight: '15,000 kg',
    diet: 'Carnivore',
    image: '/images/Basilosaurus.jpeg',
    description: 'Basilosaurus cetoides, an extinct genus of large, predatory cetaceans that lived during the late Eocene epoch around 40 to 34 million years ago, is notable for its elongated, serpentine body, which reached lengths of up to 18 meters, a characteristic that sets it apart from modern whales, and its well-developed, yet vestigial hind limbs, suggesting a transitional form between land-dwelling ancestors and fully aquatic organisms; it is believed to have inhabited warm, shallow seas and preyed on smaller marine animals, such as fish and other marine vertebrates, using its sharp teeth and powerful jaws, while also being one of the first cetaceans to exhibit fully developed tail flukes for propulsion in the water, signaling a significant step in the evolutionary path of modern whales.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Whales'
  },
  {
    id: 'basilosaurus-isis',
    name: 'basilosaurus isis',
    scientificName: 'basilosaurus isis',
    period: 'Paleogene',
    location: 'Africa',
    length: '16-18 meters',
    weight: '6,500 kg',
    diet: 'Carnivore',
    image: '/images/basilosaurus_andrey-atuchin.jpg',
    description: 'Basilosaurus isis is an extinct species of large, carnivorous cetacean from the late Eocene, approximately 40 to 34 million years ago, and it represents a slightly smaller, more robust relative of Basilosaurus cetoides, with individuals reaching lengths of about 16 meters; it shared many physical traits with its close relatives, such as the elongated body, vestigial hind limbs, and powerful jaws, but B. isis is particularly notable for its adaptations to a fully aquatic lifestyle, with fossil evidence suggesting it had an even more streamlined body and specialized teeth, likely used for grasping and processing fish and smaller marine vertebrates; it inhabited the warm, shallow seas of the Tethys Ocean, and its existence provides crucial insights into the early evolution of fully aquatic cetaceans, representing a transitional phase between land-dwelling ancestors and modern whales, with its anatomy showcasing an increasingly advanced specialization for life in the water.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Whales'
  },
      {
    id: 'parahelicoprion-clerci',
    name: 'Parahelicoprion clerci',
    scientificName: 'Parahelicoprion clerci',
    period: 'Permian',
    location: 'Russia',
    length: ' 12-13 meters',
    weight: 'unknown',
    diet: 'Carnivore',
    image: '/images/helicoprion2.jpg',
    description: 'Parahelicoprion clerci, an extinct species closely related to Helicoprion bessonowi, hails from the early to middle Permian period (around 290 to 270 million years ago) and represents an important link in the evolution of the bizarre, spiraled tooth whorl characteristic of the Helicoprion lineage; while Parahelicoprion shares many features with its predecessor, including the characteristic tooth whorl thought to be used for slicing through mollusks and other prey, it exhibits subtle differences in its dental structure and overall body morphology, suggesting slight evolutionary adaptations that may have improved its predatory efficiency; fossils of Parahelicoprion clerci, primarily consisting of teeth and jaw fragments, have been found in marine sediments, offering key insights into the diversity of early cartilaginous fish and providing a more nuanced understanding of the development of specialized feeding adaptations in the group, which would eventually give rise to more modern sharks; the peculiar, coiled teeth of Parahelicoprion also highlight the complexity of early marine ecosystems and the innovative ways in which predation strategies evolved during the Permian period.',
    category: 'Marine Creatures',
    subcategory: 'Prehistoric Sharks',
    family: 'Helicoprionidae'
  },
    {
    id: 'concavenator-corcovatus',
    name: 'Concavenator corcovatus',
    scientificName: 'Concavenator corcovatus',
    period: 'Cretaceous',
    location: 'Europe',
    length: '5–6 metes',
    weight: '320–400 kg',
    diet: 'Carnivore',
    image: '/images/concavenator.jpg',
    description: 'Concavenator, a relatively small but fascinating theropod dinosaur that lived approximately 125 million years ago during the early Cretaceous period, is known for its distinctive, elongated neural spines along its back, which likely supported a unique, sail-like structure, and while its exact function remains debated—whether for display, thermoregulation, or mating rituals—the morphology suggests it was an important adaptation for this dinosaur, which likely inhabited what is now modern-day Spain; reaching an estimated length of about 4.5 meters and weighing around 200 kilograms, Concavenator exhibited a blend of primitive and more advanced features, such as a relatively large, slender body and a mix of carnivorous traits including sharp teeth and a partially fused, lightweight skeleton, enabling it to be a nimble predator; its forelimbs were also equipped with a notable \"thumb claw,\" adding to its hunting versatility, possibly helping it to grasp prey, while its well-preserved fossil evidence reveals that it was part of the larger group of \"carnosaurs,\" which includes some of the most iconic theropods like Allosaurus, further underscoring Concavenator\'s importance in understanding the evolutionary transition of theropod dinosaurs during the early Cretaceous, especially in terms of body plan and ecological niche.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Carcharodontosauridae'
  },
    {
    id: 'troodon-formosus',
    name: 'Troodon formosus',
    scientificName: 'Troodon formosus',
    period: 'Cretaceous',
    location: 'Europe, Asia, and North America',
    length: '2.4 meters',
    weight: '50 kg',
    diet: 'Carnivore',
    image: '/images/troodon.png',
    description: 'Troodon, a small but highly intelligent theropod dinosaur that lived during the late Cretaceous period, around 75 to 70 million years ago, is often considered one of the most bird-like and cognitively advanced dinosaurs due to its relatively large brain size in proportion to its body, which suggests it had keen sensory abilities, complex behaviors, and possibly even social interactions; measuring about 2 to 2.5 meters in length and weighing roughly 50 kilograms, Troodon possessed a slender, lightweight build, characterized by sharp, serrated teeth suited for an omnivorous diet, as well as long, slender legs indicating a fast and agile predator, likely preying on small vertebrates, insects, and plants; its most distinctive feature, however, was its highly specialized, large eyes, which, in conjunction with its high brain-to-body mass ratio, may have given it excellent vision, particularly in low-light conditions, perhaps aiding in nocturnal or crepuscular hunting; fossil evidence, including well-preserved foot bones, suggests that Troodon had an opposable toe, which could have helped it grasp prey or perch, further supporting theories that it might have been more arboreal or versatile than other theropods; Troodon is often highlighted as a key genus in discussions about the evolutionary link between non-avian dinosaurs and birds, especially considering its highly developed features and complex brain structure that foreshadow the cognitive abilities of modern birds.',
    category: 'Dinosaurs',
    subcategory: 'Ornithopods',
    family: 'Troodontidae'
  },
    {
    id: 'mapusaurus-roseae',
    name: 'mapusaurus roseae',
    scientificName: 'mapusaurus roseae',
    period: 'Cretaceous',
    location: 'South America',
    length: '11-12',
    weight: '3,000-6,000 kg',
    diet: 'Carnivore',
    image: '/images/mapusaurus.jpg',
    description: 'Mapusaurus was a formidable and massive carnivorous theropod that roamed what is now Argentina around 95 million years ago, during the Late Cretaceous period. It is believed to have reached lengths of up to 33 feet (10 meters) and weighed between 3 to 5 tons, making it one of the largest theropods of its time. Distinguished by its long, slender body, sharp teeth, and powerful jaws, Mapusaurus was an apex predator in its environment, preying on large herbivorous dinosaurs. What sets Mapusaurus apart from many other large theropods is evidence suggesting it may have exhibited social behaviors, with fossilized remains of multiple individuals found in close proximity to each other, hinting that it might have hunted in packs, much like modern-day wolves. This behavior would have provided significant advantages in taking down large prey, such as sauropods, which were abundant in the region. Its discovery has offered important insights into the social dynamics and hunting strategies of Cretaceous theropods.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Carcharodontosauridae'
  },
    {
    id: 'acrocanthosaurus-atokensis',
    name: 'Acrocanthosaurus atokensis',
    scientificName: 'Acrocanthosaurus atokensis',
    period: 'Cretaceous',
    location: 'North America',
    length: '11–11.5 m',
    weight: '4,400 – 6,600 kg',
    diet: 'Carnivore',
    image: '/images/acrocanthosaurus.jpeg',
    description: '\nChatGPT\nAcrocanthosaurus was a large, predatory theropod dinosaur that lived during the Early Cretaceous period, approximately 125 to 113 million years ago, in what is now North America. Known for its distinctive, high neural spines along its back, which likely supported a sail-like structure or possibly a ridge of muscles, Acrocanthosaurus reached lengths of around 35 feet (10.5 meters) and weighed between 3 to 5 tons. Its powerful build, with robust limbs and a large head equipped with sharp teeth, suggests that it was a top predator in its ecosystem, preying on large herbivorous dinosaurs such as the sauropods and ornithischians that coexisted with it. Despite its impressive size, Acrocanthosaurus was likely a fast and agile hunter, using its keen senses to ambush prey. Fossil evidence indicates that it had strong arms and hands with three large claws, though it is debated whether it used them in predation or for other functions. Its fossils have been found in multiple locations across North America, providing valuable insight into the biodiversity of the Cretaceous period and the role Acrocanthosaurus played in its ecosystem. Additionally, the unique structure of its neural spines has intrigued paleontologists, who continue to study their potential function in temperature regulation, display, or even as an aid in locomotion.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Carcharodontosauridae'
  },
    {
    id: 'tyrannotitan-chubutensis',
    name: 'Tyrannotitan chubutensis',
    scientificName: 'Tyrannotitan chubutensis',
    period: 'Cretaceous',
    location: 'South America',
    length: '12.2-13 meters',
    weight: '4,900 – 7,000 kg',
    diet: 'Carnivore',
    image: '/images/tyrannotitan.jpg',
    description: 'Tyrannotitan is a genus of large, predatory theropod dinosaur that lived during the Early Cretaceous period, approximately 110 to 100 million years ago, in what is now Argentina. Closely related to the more famous Carcharodontosaurus, Tyrannotitan was a member of the Carcharodontosauridae family, and it likely reached lengths of around 40 feet (12 meters) and weighed up to 8 tons, making it one of the largest carnivores of its time. This massive predator had a long, powerful body, large jaws filled with serrated teeth, and robust limbs, all of which suggest it was well adapted for hunting large prey, possibly including sauropods and other herbivores that dominated the landscape of South America during the Early Cretaceous. Its fossils were discovered in the Neuquén Basin, which was home to a diverse range of dinosaurs, indicating that Tyrannotitan likely played a dominant role in the ecosystem as an apex predator. The discovery of Tyrannotitan was significant because it filled in a gap in the fossil record of large theropods in South America, helping to better understand the distribution and evolution of giant predatory dinosaurs. The relatively incomplete fossil evidence available includes parts of the skull, vertebrae, and limb bones, which have provided important insights into its size and anatomy, but much of its behavior and ecological role remains speculative. Tyrannotitan’s exact relationship to other giant theropods like Carcharodontosaurus and Giganotosaurus continues to be a subject of ongoing research in the field of paleontology.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Carcharodontosauridae'
  },
    {
    id: 'baryonyx-walkeri',
    name: 'Baryonyx walkeri',
    scientificName: 'Baryonyx walkeri',
    period: 'Cretaceous',
    location: 'Europe',
    length: '7.5 – 10 m',
    weight: '1,200 – 1,700 kg',
    diet: 'Carnivore',
    image: '/images/baryonyx.png',
    description: 'Baryonyx was a large, carnivorous theropod dinosaur that lived during the Early Cretaceous period, around 130 to 125 million years ago, in what is now Europe, specifically the United Kingdom and Spain. Recognizable by its long, crocodile-like snout, Baryonyx grew to lengths of up to 30 feet (9 meters) and likely weighed between 1.5 to 2 tons. It belonged to the spinosaurid family, which is known for its semi-aquatic adaptations, and Baryonyx is one of the best-known and earliest members of this group. Its long, slender jaws were filled with conical teeth, ideal for catching slippery prey like fish, which was likely a significant part of its diet. Fossil evidence suggests that Baryonyx had a varied diet, also feeding on small dinosaurs and possibly even large prey, such as the herbivorous Iguanodon, as indicated by its fossilized remains found in the stomach cavity of one individual.\n\nThe most striking feature of Baryonyx was its large, hook-shaped claw on the first digit of each hand, which could have been used for grasping prey or possibly for defense. Despite its relatively slender build compared to some other theropods, Baryonyx was a powerful predator, capable of swift movement on land and possibly adept at swimming or wading in water, much like modern-day crocodiles. Its semi-aquatic lifestyle is further supported by its long, muscular tail, which would have aided in swimming, as well as the structure of its teeth, well-suited for grasping rather than slicing, indicating a feeding behavior more in line with fish-eating animals.\n\nThe discovery of Baryonyx in the 1980s was significant because it provided crucial evidence for the hypothesis that spinosaurids were not solely land-based predators but had adaptations for a more aquatic or semi-aquatic lifestyle. As one of the first dinosaur fossils to show such features, Baryonyx helped reshape our understanding of the diversity of theropod feeding behaviors and habitats during the Early Cretaceous period.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Spinosauridae'
  },
    {
    id: 'suchomimus-tenerensis',
    name: 'Suchomimus tenerensis',
    scientificName: 'Suchomimus tenerensis',
    period: 'Cretaceous',
    location: 'Africa',
    length: '9-12 meters',
    weight: '2,500-3,800 kg',
    diet: 'Carnivore',
    image: '/images/suchominus.jpg',
    description: 'Suchomimus was a large, predatory theropod dinosaur that lived during the Early Cretaceous period, approximately 125 to 112 million years ago, in what is now northern Africa, specifically in modern-day Niger. A member of the spinosaurid family, closely related to Baryonyx, Suchomimus was distinguished by its long, narrow, crocodile-like snout, which was filled with conical teeth suited for grasping fish, suggesting it had a diet primarily focused on aquatic prey. Estimated to reach lengths of up to 33 feet (10 meters) and weighing around 2 to 3 tons, Suchomimus was a relatively large and robust predator, although not as massive as some of its spinosaurid relatives like Spinosaurus. Its body was built for speed and agility, with long, powerful hind limbs and a long tail that likely aided in both swimming and balance while running.\n\nThe long, narrow skull of Suchomimus was one of its most distinctive features, and it is thought to have been adapted for a specialized feeding strategy, possibly stalking fish in shallow waters, much like modern-day herons or crocodiles. Fossil evidence, including partial skeletons and teeth, indicates that Suchomimus had a relatively flexible neck, which would have been advantageous in maneuvering its head to capture slippery, fast-moving prey. While fish were likely a primary component of its diet, it is possible that Suchomimus also hunted small dinosaurs and other terrestrial prey, given its relatively robust forelimbs with large claws, which might have been used for grasping or tearing at prey.\n\nThe discovery of Suchomimus was significant for paleontologists, as it helped to further clarify the ecological diversity of the spinosaurid group, which is now understood to include both semi-aquatic and terrestrial hunters. The fossil evidence also provided important insights into the anatomical adaptations of these large theropods, particularly the evolution of their elongated snouts, which set them apart from other theropods and allowed them to exploit a unique ecological niche, primarily focused on aquatic environments.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Spinosauridae'
  },
    {
    id: 'irritator-challengeri',
    name: 'Irritator challengeri',
    scientificName: 'Irritator challengeri',
    period: 'Cretaceous',
    location: 'South America',
    length: '7.5 meters',
    weight: '1,000 kg',
    diet: 'Carnivore',
    image: '/images/irritator.jpeg',
    description: 'Irritator was a medium-sized, predatory theropod dinosaur that lived during the Early Cretaceous period, approximately 110 to 100 million years ago, in what is now Brazil. Belonging to the spinosaurid family, Irritator shared many features with other members of this group, such as its long, narrow, crocodile-like snout filled with conical teeth, which suggests it was adapted for a diet focused primarily on fish. However, unlike some of its larger relatives like Spinosaurus or Suchomimus, Irritator was relatively small, reaching lengths of about 26 feet (8 meters) and weighing around 1 to 2 tons, making it one of the smaller spinosaurids.\n\nThe most distinctive characteristic of Irritator is its unusually elongated skull, with a length that comprises a large portion of its overall body length. Its teeth were conical and curved, ideal for capturing slippery fish, but it also likely had the versatility to hunt smaller dinosaurs and other terrestrial prey when aquatic food sources were scarce. The name \"Irritator\" was given because the paleontologists who first described it found the fossil in a somewhat frustrating condition—part of the skull had been damaged by collectors, hence the name, which refers to their irritation with the incomplete specimen.\n\nFossil evidence suggests that Irritator had a relatively light and agile build, with long, slender limbs and a long tail that would have aided in balance and possibly even swimming. Like other spinosaurids, it is believed to have been semi-aquatic, capable of hunting in both water and on land, similar to modern-day crocodiles and herons. The specific role of Irritator in its ecosystem is still debated, as it may have been a specialized fish-eater in coastal environments or a more generalized predator that fed on a range of prey.\n\nIrritator’s fossil discovery, particularly its partial skull and vertebrae, has been important in understanding the diversity within the spinosaurid family. It has also shed light on the evolutionary adaptations that allowed spinosaurids to exploit a variety of niches, from strictly terrestrial hunting to semi-aquatic lifestyles. While not as famous as Spinosaurus or Baryonyx, Irritator adds valuable information about the ecological roles and evolutionary history of these intriguing theropods.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Spinosauridae'
  },
      {
    id: 'siamosaurus-suteethorni',
    name: 'Siamosaurus suteethorni',
    scientificName: 'Siamosaurus suteethorni',
    period: 'Cretaceous',
    location: 'Aisa',
    length: '9.1-9.5 meters',
    weight: '2,000-3,000 kg',
    diet: 'Carnivore',
    image: '/images/sia.jpg',
    description: 'Siamosaurus was a large, carnivorous theropod dinosaur that lived during the Early Cretaceous period, approximately 125 to 112 million years ago, in what is now Thailand. It was a member of the spinosaurid family, closely related to other fish-eating theropods like Baryonyx and Suchomimus. Siamosaurus was characterized by its elongated, crocodile-like snout, which was filled with conical teeth, well-suited for grasping slippery prey such as fish. It likely reached lengths of about 30 feet (9 meters) and weighed between 2 to 3 tons, placing it among the larger spinosaurids.\n\nThe fossil evidence for Siamosaurus is limited but includes partial skulls and vertebrae that have helped scientists infer its overall anatomy and lifestyle. Based on its long, narrow snout and conical teeth, it is believed that Siamosaurus had a diet primarily focused on fish, similar to other spinosaurids. The presence of spinosaurid characteristics such as a long, muscular tail suggests that it may have been a semi-aquatic predator, capable of swimming to catch prey in shallow waters or along riverbanks. This ecological niche would have been advantageous in the coastal or riverine environments it inhabited, allowing it to hunt both in water and on land.\n\nLike other spinosaurids, Siamosaurus likely had a relatively lightweight, agile body, with long, powerful hind limbs designed for movement on land, although its body structure suggests it could have been just as adept in the water. Its fossilized remains were found alongside those of other dinosaurs, providing valuable insights into the types of ecosystems these large theropods inhabited. The exact role of Siamosaurus in its ecosystem remains speculative, but it is considered an apex predator in its environment, likely preying on both aquatic and terrestrial animals.\n\nSiamosaurus adds an important piece to the puzzle of spinosaurid evolution and their adaptation to different environmental niches. While it is not as well-known as other spinosaurids like Spinosaurus, the discovery of Siamosaurus contributes to our understanding of the diversity and ecological roles of these fascinating, fish-eating theropods during the Early Cretaceous.',
    category: 'Dinosaurs',
    subcategory: 'Theropods',
    family: 'Spinosauridae'
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
        subcategory: creature.subcategory.toLowerCase().includes(query),
        family: creature.family.toLowerCase().includes(query)
      }
    };
  }).filter((result): result is SearchResult => result !== null);
};