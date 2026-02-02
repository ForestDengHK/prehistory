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
    image: '/images/facts/bird2.jpg.jpeg',
    category: 'evolution'
  },
    {
    id: 'fact-4',
    title: 'Prehistoric Super-Sized Insects',
    fact: 'During the Carboniferous period, insects grew to enormous sizes due to higher oxygen levels. Dragonflies had wingspans up to 65 cm!',
    image: '/images/facts/big-insects.jpeg',
    category: 'environment'
  },
    {
    id: 'fact-5',
    title: 'The First Flower',
    fact: 'The first flowering plants appeared around 130 million years ago, during the Cretaceous period, revolutionizing plant evolution.',
    image: '/images/facts/first-flowers.jpeg',
    category: 'evolution'
  },
    {
    id: 'fact-6',
    title: 'The Great Dying',
    fact: 'The Permian-Triassic extinction event, known as \"The Great Dying,\" wiped out about 95% of marine species and 70% of land species.',
    image: '/images/facts/dye.jpg',
    category: 'discovery'
  },
    {
    id: 'fact-7',
    title: 'Walking Whales',
    fact: 'Early whales like Ambulocetus had legs and could walk on land, showing the remarkable transition of mammals back to marine life.',
    image: '/images/facts/fat-whale.jpeg',
    category: 'evolution'
  },
    {
    id: 'fact-8',
    title: 'First Land Animals',
    fact: 'Tiktaalik, living 375 million years ago, was one of the first vertebrates to venture onto land, with primitive lungs and leg-like fins.',
    image: '/images/facts/walking-fish.jpeg',
    category: 'evolution'
  },
  {
    id: 'fact-9',
    title: 'Snowball Earth',
    fact: 'Around 700 million years ago, Earth was almost completely covered in ice during the "Snowball Earth" period, with temperatures as low as -50°C.',
    image: '/images/facts/snowball-earth.webp',
    category: 'environment'
  }
,
    {
    id: 'fact-10',
    title: 'The K-Pg extinction',
    fact: 'The K-Pg extinction, caused by an asteroid impact 66 million years ago, wiped out 75% of species, including non-avian dinosaurs, due to climate shifts, wildfires, and tsunamis.',
    image: '/images/facts/dead-dino.jpg',
    category: 'environment'
  },
  {
    id: 'fact-11',
    title: 'Hangenberg event',
    fact: 'The Hangenberg event, about 359 million years ago, was a mass extinction at the Devonian-Carboniferous boundary, caused by global cooling and anoxic oceans, wiping out many marine species.',
    image: '/images/facts/dead-dunk.webp',
    category: 'environment'
  },
  {
    id: 'fact-12',
    title: 'Ordovician-Silurian extinction',
    fact: 'The Ordovician-Silurian extinction, around 445 million years ago, was caused by a rapid ice age and fluctuating sea levels, eliminating nearly 85% of marine species.',
    image: '/images/facts/mass-exitinction-ovi-surli.jpeg',
    category: 'environment'
  },
  {
    id: 'fact-13',
    title: 'T-Rex Had Tiny Arms for a Reason',
    fact: 'Despite their tiny appearance, T-Rex arms were incredibly strong—each could lift about 200 kg (440 lbs)! Scientists think they helped grip prey or push up from the ground.',
    image: '/images/facts/trex-arms.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-14',
    title: 'Dinosaurs Lived on Every Continent',
    fact: 'Dinosaur fossils have been found on all seven continents, including Antarctica! When dinosaurs lived, Antarctica was much warmer and connected to other landmasses.',
    image: '/images/facts/antarctica-dinos.webp',
    category: 'discovery'
  },
  {
    id: 'fact-15',
    title: 'The First Eyes Appeared 540 Million Years Ago',
    fact: 'The evolution of eyes triggered an "arms race" of evolution. Trilobites were among the first creatures with complex eyes, with some having over 15,000 lenses!',
    image: '/images/facts/trilobite-eyes.webp',
    category: 'evolution'
  },
  {
    id: 'fact-16',
    title: 'Sharks Are Older Than Trees',
    fact: 'Sharks have been swimming in Earth\'s oceans for about 450 million years—that\'s 100 million years before the first trees appeared! They survived all five mass extinctions.',
    image: '/images/facts/ancient-shark.webp',
    category: 'evolution'
  },
  {
    id: 'fact-17',
    title: 'One Day Was Only 22 Hours Long',
    fact: 'When dinosaurs roamed Earth, days were shorter! The Moon\'s gravity is slowly slowing Earth\'s rotation. 200 million years ago, a year had about 385 days.',
    image: '/images/facts/earth-moon-rotation.webp',
    category: 'environment'
  },
  {
    id: 'fact-18',
    title: 'Dinosaurs May Have Been Colorful',
    fact: 'By studying fossilized melanosomes (pigment cells), scientists discovered some dinosaurs had bright colors! Sinosauropteryx had a striped tail like a raccoon.',
    image: '/images/facts/colorful-dinos.webp',
    category: 'discovery'
  },
  {
    id: 'fact-19',
    title: 'The Largest Land Animal Ever',
    fact: 'Argentinosaurus may have weighed up to 100 tons—as heavy as 14 elephants! Its thigh bone alone was taller than an adult human.',
    image: '/images/facts/argentinosaurus-size.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-20',
    title: 'Oxygen Made Giant Insects Possible',
    fact: 'During the Carboniferous period, oxygen levels reached 35% (vs 21% today). This allowed insects to grow huge—millipedes reached 2.5 meters (8 feet) long!',
    image: '/images/facts/giant-arthropleura.webp',
    category: 'environment'
  },
  {
    id: 'fact-21',
    title: 'Mary Anning: Fossil Hunting Pioneer',
    fact: 'At just 12 years old, Mary Anning discovered the first complete Ichthyosaur fossil in 1811. She became one of history\'s greatest fossil hunters, despite never receiving formal credit in her time.',
    image: '/images/facts/mary-anning.webp',
    category: 'discovery'
  },
  {
    id: 'fact-22',
    title: 'Crocodiles Outlived the Dinosaurs',
    fact: 'Crocodilians have existed for over 200 million years, surviving the asteroid that killed the dinosaurs. They\'ve barely changed because their design is nearly perfect for their lifestyle.',
    image: '/images/facts/ancient-croc.webp',
    category: 'evolution'
  },
  {
    id: 'fact-23',
    title: 'Pangaea: When All Land Was One',
    fact: 'About 335 million years ago, all continents were joined into one supercontinent called Pangaea. You could have walked from Antarctica to the Arctic!',
    image: '/images/facts/pangaea-map.webp',
    category: 'environment'
  },
  {
    id: 'fact-24',
    title: 'Dinosaur Eggs Were Surprisingly Small',
    fact: 'Even the largest dinosaurs laid relatively small eggs—about the size of a football. If eggs were bigger, the shells would be too thick for babies to break out!',
    image: '/images/facts/dino-eggs.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-25',
    title: 'Velociraptors Were Turkey-Sized',
    fact: 'Real Velociraptors were only about 0.5 meters tall and weighed 15 kg—roughly the size of a turkey! The "raptors" in Jurassic Park were actually based on the larger Deinonychus.',
    image: '/images/facts/real-velociraptor.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-26',
    title: 'T-Rex: Strongest Bite Ever on Land',
    fact: 'T-Rex could bite with a force of up to 57,000 Newtons—like having a medium-sized elephant sit on you! This is the strongest bite force of any land animal that ever lived.',
    image: '/images/facts/trex-bite.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-27',
    title: 'Largest Flying Animal Ever',
    fact: 'Quetzalcoatlus had a wingspan of 10-11 meters—longer than a school bus! This pterosaur was as tall as a giraffe when standing and could fly at 80 mph for days.',
    image: '/images/facts/quetzalcoatlus.webp',
    category: 'evolution'
  },
  {
    id: 'fact-28',
    title: 'Mammoths Met the Pyramids',
    fact: 'Woolly mammoths were still alive when the Egyptian pyramids were built! The last mammoths survived on Wrangel Island until about 1650 BCE—over 1,000 years after the Great Pyramid.',
    image: '/images/facts/mammoth-pyramids.webp',
    category: 'discovery'
  },
  {
    id: 'fact-29',
    title: 'Stegosaurus: Ancient Even to T-Rex',
    fact: 'Stegosaurus and T-Rex never met—they lived 80 million years apart! In fact, we are closer in time to T-Rex than T-Rex was to Stegosaurus.',
    image: '/images/facts/stego-trex-timeline.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-30',
    title: 'Horses Started Dog-Sized',
    fact: 'The first horses (Eohippus) were only 30 cm tall—about the size of a fox! They had four toes and lived 55 million years ago. Horse evolution is one of the best-documented in paleontology.',
    image: '/images/facts/horse-evolution.webp',
    category: 'evolution'
  },
  {
    id: 'fact-31',
    title: 'First Dinosaur Named: 1824',
    fact: 'Megalosaurus was the first dinosaur ever scientifically named, by William Buckland in 1824. The word "dinosaur" itself wasn\'t invented until 1842 by Richard Owen!',
    image: '/images/facts/megalosaurus-first.webp',
    category: 'discovery'
  },
  {
    id: 'fact-32',
    title: 'Soft Tissue in 68-Million-Year Fossils',
    fact: 'In 2005, scientist Mary Schweitzer discovered soft tissue, including flexible blood vessels, inside a 68-million-year-old T-Rex bone—a discovery that shocked the scientific world.',
    image: '/images/facts/fossil-soft-tissue.webp',
    category: 'discovery'
  },
  {
    id: 'fact-33',
    title: 'Dinosaurs Lived Underwater (Almost)',
    fact: 'During the Cretaceous, sea levels were 150-200 meters higher than today. About 30% of today\'s land was underwater, and there was no ice at the poles!',
    image: '/images/facts/cretaceous-seas.webp',
    category: 'environment'
  },
  {
    id: 'fact-34',
    title: 'Duck-Billed Dinosaurs: 300+ Teeth',
    fact: 'Hadrosaurs had the most complex teeth ever—up to 300 teeth per jaw arranged in "dental batteries." These constantly replaced themselves and could grind the toughest plants.',
    image: '/images/facts/hadrosaur-teeth.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-35',
    title: 'Amber: 230-Million-Year Time Capsules',
    fact: 'The oldest creatures preserved in amber are 230 million years old! These tiny mites from Italy are 100 million years older than any other amber fossils, perfectly frozen in tree resin.',
    image: '/images/facts/amber-preservation.webp',
    category: 'discovery'
  },
  {
    id: 'fact-36',
    title: 'Dinosaurs Didn\'t Roar Like in Movies',
    fact: 'Scientists believe dinosaurs made closed-mouth sounds like cooing, booming, or growling—similar to crocodiles and ostriches today—not the dramatic roars from Jurassic Park!',
    image: '/images/facts/dinosaur-sounds.webp',
    category: 'discovery'
  },
  {
    id: 'fact-37',
    title: 'Fastest Dinosaurs Hit 70 km/h',
    fact: 'Ornithomimus and Gallimimus were the speed champions, reaching up to 70 km/h (43 mph)—faster than a horse! Their ostrich-like build was perfect for running.',
    image: '/images/facts/fast-dinosaur.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-38',
    title: 'Fossil Poop Reveals Dino Diets',
    fact: 'Scientists study fossilized dinosaur poop (coprolites) to learn what they ate! A 2024 study of 500+ coprolites showed early dinosaurs were "opportunistic" eaters—they ate everything.',
    image: '/images/facts/coprolite-study.webp',
    category: 'discovery'
  },
  {
    id: 'fact-39',
    title: 'Megalodon: 7-Inch Teeth Monster',
    fact: 'Megalodon\'s teeth could reach 7.5 inches (19 cm)—three times larger than great white shark teeth! This 20+ meter shark had the strongest bite of any animal ever: 182,000 Newtons.',
    image: '/images/facts/megalodon-teeth.webp',
    category: 'evolution'
  },
  {
    id: 'fact-40',
    title: 'Pterosaurs Were Not Dinosaurs',
    fact: 'Despite flying alongside dinosaurs for 150 million years, pterosaurs were NOT dinosaurs—they were flying reptiles in a completely separate group. Some had fur-like covering called pycnofibers!',
    image: '/images/facts/pterosaur-not-dino.webp',
    category: 'evolution'
  },
  {
    id: 'fact-41',
    title: 'Spinosaurus: A Swimming Dinosaur',
    fact: 'Spinosaurus had a paddle-like tail and dense bones for buoyancy—it was semi-aquatic! This 15-meter predator hunted fish in rivers like a giant crocodile-dinosaur hybrid.',
    image: '/images/facts/spinosaurus-swimming.webp',
    category: 'dinosaur'
  },
  {
    id: 'fact-42',
    title: 'Tiny Mammals Lived With Dinosaurs',
    fact: 'Small mammals existed for over 160 million years alongside dinosaurs! They were mostly nocturnal and mouse-sized, waiting in the shadows until the dinosaurs went extinct.',
    image: '/images/facts/mammals-dinosaurs.webp',
    category: 'evolution'
  },
  {
    id: 'fact-43',
    title: 'Saber-Toothed Cats Ruled Americas',
    fact: 'Smilodon, the famous saber-toothed cat, had 28 cm (11-inch) fangs and lived throughout North and South America. Over 1,200 specimens have been found in the La Brea Tar Pits alone!',
    image: '/images/facts/smilodon-sabertooth.webp',
    category: 'evolution'
  },
  {
    id: 'fact-44',
    title: 'Dinosaur Footprints Everywhere',
    fact: 'Thousands of dinosaur trackways have been found on every continent! Some tracks in Colorado show dinosaurs walking together in herds, and some footprints are over a meter wide.',
    image: '/images/facts/dino-footprints.webp',
    category: 'discovery'
  }];

export function getRandomFacts(count: number = 10): PrehistoricFact[] {
  const maxCount = Math.min(count, prehistoricFacts.length);
  const shuffled = [...prehistoricFacts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, maxCount);
} 