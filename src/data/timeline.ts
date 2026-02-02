export interface TimelinePeriod {
  name: string;
  period: string;
  description: string;
  detailedDescription: string;
  image: string;
  creatures: string[];
}

export const timelinePeriods: TimelinePeriod[] = [
  {
    name: 'Hadean',
    period: '4.6-4.0 billion years ago',
    description: 'Earth formation and early development',
    image: '/images/timeline/Hadean.jpg',
    creatures: [],
    detailedDescription: `The **Hadean eon** represents Earth's earliest history—a time of violent transformation and cosmic bombardment that laid the foundation for all life to come.

During this tumultuous period, our planet was defined by its **molten surface**, frequent meteorite impacts, and the gradual formation of the first rocks and oceans. The atmosphere consisted primarily of water vapor, carbon dioxide, and nitrogen, with no free oxygen to support life as we know it.

Perhaps the most dramatic event of the Hadean was the formation of the Moon, likely resulting from a catastrophic collision between Earth and a Mars-sized object called **Theia**. This impact fundamentally shaped our planet's future.

*The Hadean set the stage for everything that followed—without this violent beginning, Earth would never have become the cradle of life we know today.*`
  },
  {
    name: 'Archean',
    period: '4.0-2.5 billion years ago',
    description: 'First simple life forms appeared',
    image: '/images/timeline/Archean.jpg',
    creatures: ['Primitive bacteria', 'Stromatolites'],
    detailedDescription: `The **Archean eon** witnessed the most important event in Earth's history—the emergence of life itself, forever changing the trajectory of our planet.

This period saw the appearance of the first **prokaryotic cells** and the development of photosynthetic bacteria known as cyanobacteria. These pioneering organisms began producing oxygen as a byproduct, gradually transforming Earth's atmosphere and setting the stage for more complex life.

The Archean was also marked by the formation of the **first continents** and intense volcanic activity that shaped the landscape. The oldest known fossils—**stromatolites**—date from this time, representing layered rock structures built by ancient microbial communities.

*Life's humble beginnings in the Archean would eventually transform every aspect of our planet.*`
  },
  {
    name: 'Proterozoic',
    period: '2.5 billion-541 million years ago',
    description: 'First complex cells and multicellular life',
    image: '/images/timeline/Proterozoic.jpg',
    creatures: ['Ediacaran biota', 'Early algae'],
    detailedDescription: `The **Proterozoic eon** was a time of crucial biological and geological transitions, witnessing the rise of complex life and dramatic changes to Earth's atmosphere.

Three revolutionary developments defined this era: the rise of **eukaryotic cells** (cells with nuclei), the evolution of **sexual reproduction**, and the emergence of the first **multicellular organisms**. The Great Oxidation Event occurred early in this period, dramatically increasing atmospheric oxygen and fundamentally changing Earth's chemistry.

Near the end of this eon, the mysterious **Ediacaran biota** appeared—the first complex animals, including strange soft-bodied organisms unlike anything alive today. Several "Snowball Earth" events also occurred, with ice potentially covering the entire planet.

*The Proterozoic bridged the gap between simple microbial life and the explosion of complex organisms that would follow.*`
  },
  {
    name: 'Cambrian',
    period: '541-485 million years ago',
    description: 'Explosion of complex life forms',
    image: '/images/timeline/Cambrian.jpg',
    creatures: ['Trilobites', 'Anomalocaris'],
    detailedDescription: `The **Cambrian period** marked a profound change in life on Earth known as the "Cambrian Explosion"—one of the most significant events in the history of life.

During this remarkable time, nearly all modern **phyla of animals** appeared in the fossil record over a relatively short geological timespan. Complex organisms evolved mineralized shells, exoskeletons, eyes, and other sophisticated features that dramatically improved their survival and preservation as fossils.

Notable creatures of this period include **trilobites** (dominant arthropods with compound eyes), **Anomalocaris** (an apex predator up to 1 meter long), and bizarre forms like Hallucigenia and five-eyed Opabinia. The first **chordates**—ancestors of all vertebrates including humans—also appeared during this time.

*The Cambrian Explosion transformed Earth's oceans from a world of simple organisms to one teeming with complex, diverse animal life.*`
  },
  {
    name: 'Ordovician',
    period: '485-444 million years ago',
    description: 'First vertebrates and great marine biodiversity',
    image: '/images/timeline/Ordovician.jpg',
    creatures: ['Orthoceras', 'Early fish'],
    detailedDescription: `The **Ordovician period** saw a remarkable diversification of marine life and witnessed Earth's first major mass extinction event.

This era brought the evolution of the first **vertebrates** (jawless fish) and possibly the first animals to colonize land (likely arthropods). Marine biodiversity exploded, with brachiopods flourishing, nautiloids becoming apex predators, and bryozoans and corals building early reef ecosystems.

The period was characterized by high sea levels, generally warm climates, and continents positioned mostly in the southern hemisphere. Many marine limestone deposits formed during this time, preserving an excellent fossil record.

Tragically, the period ended with the **Ordovician-Silurian extinction**, which eliminated about 85% of marine species—the second-largest extinction in Earth's history, likely caused by rapid glaciation.

*The Ordovician demonstrated both life's remarkable ability to diversify and its vulnerability to catastrophic change.*`
  },
  {
    name: 'Silurian',
    period: '444-419 million years ago',
    description: 'First land plants and jawed fish',
    image: '/images/timeline/Silurian.jpg',
    creatures: ['Eurypterids', 'Early vascular plants'],
    detailedDescription: `The **Silurian period** marked the first appearance of vascular plants and the emergence of jawed fish—innovations that would transform both land and sea.

On land, the first **vascular plants** developed internal water-transport systems, beginning the transformation of terrestrial environments. Early arthropods ventured onto land, taking the first steps toward complex terrestrial ecosystems.

In the oceans, the evolution of **fish with jaws** (gnathostomes) represented a revolutionary adaptation for feeding—these creatures would become the ancestors of all modern jawed vertebrates. **Eurypterids** ("sea scorpions") thrived as apex predators, with some growing to impressive sizes.

The climate was generally warm and stable, with high sea levels creating many shallow marine environments ideal for life.

*The Silurian's innovations—jaws and vascular tissue—would prove to be among the most consequential in evolutionary history.*`
  },
  {
    name: 'Devonian',
    period: '419-359 million years ago',
    description: 'Age of Fishes and first forests',
    image: '/images/timeline/Devonian.jpg',
    creatures: ['Dunkleosteus', 'Early amphibians'],
    detailedDescription: `Known as the **"Age of Fishes,"** the Devonian period saw unprecedented diversification in aquatic life and the momentous transition of vertebrates from water to land.

Fish diversity reached its peak, with sharks rising to prominence alongside both ray-finned and lobe-finned fish. The fearsome **Dunkleosteus**—an armored placoderm up to 10 meters long with crushing jaws—dominated as one of the era's apex predators.

Perhaps most significantly, this period witnessed the evolution of the first **tetrapods** (four-legged vertebrates). Lobe-finned fish developed limb-like fins, with creatures like **Tiktaalik** representing transitional forms between fish and land animals. Meanwhile, the first true **forests** appeared, with trees reaching up to 30 meters tall, significantly altering Earth's atmosphere.

The period ended with a major extinction event that particularly affected marine life and collapsed reef ecosystems.

*The Devonian's dual legacy—fish diversity and the conquest of land—shaped the future of vertebrate evolution.*`
  },
  {
    name: 'Carboniferous',
    period: '359-299 million years ago',
    description: 'Giant insects and early reptiles',
    image: '/images/timeline/Carboniferous.jpg',
    creatures: ['Meganeura', 'Early reptiles'],
    detailedDescription: `The **Carboniferous period** was characterized by vast swamps, towering forests, and extraordinarily high oxygen levels that allowed arthropods to grow to enormous sizes.

Atmospheric oxygen reached an astonishing **35%** (compared to today's 21%), enabling creatures of unprecedented scale. Giant dragonflies like **Meganeura** soared with 70cm wingspans. **Arthropleura**, a millipede-like creature, grew up to 2.5 meters long. Giant cockroaches and other insects thrived in this oxygen-rich world.

The extensive swamps and forests of this period would later form the **coal deposits** that powered the Industrial Revolution. Early amphibians diversified and grew to large sizes, dominating freshwater and swamp environments.

Most significantly, the first **fully terrestrial vertebrates** (early reptiles) emerged, evolving the amniotic egg that freed them from dependence on water for reproduction.

*The Carboniferous was unique in Earth's history—a world of giants made possible by an oxygen-rich atmosphere.*`
  },
  {
    name: 'Permian',
    period: '299-252 million years ago',
    description: 'Rise of early mammal ancestors',
    image: '/images/timeline/Permian.jpg',
    creatures: ['Dimetrodon', 'Gorgonopsids'],
    detailedDescription: `The **Permian period** saw the diversification of early reptiles and mammal ancestors, ending with the largest mass extinction in Earth's history.

**Synapsids** (mammal-like reptiles) diversified dramatically, including famous creatures like sail-backed **Dimetrodon**, saber-toothed **Gorgonopsids**, and tusked **Dicynodonts**. These animals developed increasingly efficient locomotion and metabolism, foreshadowing the mammals to come.

This period also witnessed the formation of the supercontinent **Pangaea**, with its massive interior becoming extremely arid. Extensive desert conditions developed across much of the land.

The Permian ended catastrophically with the **"Great Dying"**—the largest mass extinction in Earth's history. Massive volcanic eruptions (the Siberian Traps), rapid climate change, and ocean acidification combined to eliminate about **95% of marine species** and 70% of terrestrial vertebrate species. Recovery would take millions of years.

*The Permian's catastrophic ending reset the evolutionary stage, opening opportunities for new groups—including the dinosaurs—to rise.*`
  },
  {
    name: 'Triassic',
    period: '252-201 million years ago',
    description: 'First dinosaurs and mammals',
    image: '/images/timeline/Triassic.jpg',
    creatures: ['Coelophysis', 'Plateosaurus'],
    detailedDescription: `The **Triassic period** marked the recovery from the Permian extinction and saw the emergence of the first dinosaurs and mammals.

Life slowly recovered from the Great Dying, with new ecological niches opening up and novel body plans evolving. The period began with synapsids still dominant, but ended with a dramatic shift. Key first appearances included **dinosaurs** (initially small, bipedal forms), **mammals** (tiny, nocturnal creatures), and **pterosaurs** (the first flying vertebrates).

Marine ecosystems also rebuilt, with **ichthyosaurs** and the first **plesiosaurs** appearing in the oceans.

The period closed with another major extinction event that eliminated many competing groups, clearing the way for **dinosaur dominance** in the following Jurassic period.

*The Triassic was a time of rebuilding and experimentation, setting the stage for the Age of Dinosaurs.*`
  },
  {
    name: 'Jurassic',
    period: '201-145 million years ago',
    description: 'Age of giant dinosaurs',
    image: '/images/timeline/Jurassic.jpg',
    creatures: ['Diplodocus', 'Allosaurus'],
    detailedDescription: `The **Jurassic period** was the golden age of dinosaurs, featuring the largest land animals ever to exist and the first appearance of birds.

**Sauropods** reached staggering sizes—**Diplodocus** stretched up to 27 meters long, while **Brachiosaurus** towered at 13 meters tall. Predators like **Allosaurus** (12m), **Ceratosaurus**, and **Megalosaurus** hunted these giants across a warm, humid world with no polar ice caps.

This period also witnessed a pivotal evolutionary moment: the first **birds** evolved from small theropod dinosaurs, with **Archaeopteryx** representing the famous bridge between dinosaurs and modern birds—featuring both feathers and teeth.

The oceans teemed with marine reptiles, including **ichthyosaurs** and diversifying **plesiosaurs**. Mammals remained small and mostly nocturnal, living in the shadow of the dominant dinosaurs.

*The Jurassic represents the peak of dinosaur dominance—a world of giants that captures our imagination to this day.*`
  },
  {
    name: 'Cretaceous',
    period: '145-66 million years ago',
    description: 'Last period of non-avian dinosaurs',
    image: '/images/timeline/Cretaceous.jpg',
    creatures: ['Tyrannosaurus Rex', 'Triceratops'],
    detailedDescription: `The **Cretaceous period** was the last and longest period of the dinosaur era, ending with the famous mass extinction that killed all non-avian dinosaurs.

This period produced some of the most iconic dinosaurs: **Tyrannosaurus Rex** (the apex predator with massive jaws), **Triceratops** (the three-horned herbivore), **Velociraptor** (the feathered, intelligent hunter), and **Spinosaurus** (the semi-aquatic, sail-backed giant). In the seas, **Mosasaurs** replaced ichthyosaurs as top marine predators.

A botanical revolution also occurred—the first **flowering plants** (angiosperms) appeared and rapidly diversified, transforming terrestrial ecosystems and co-evolving with pollinators.

The period ended catastrophically with the **K-Pg extinction event**, caused by an asteroid impact at Chicxulub and massive volcanic eruptions (Deccan Traps). All non-avian dinosaurs went extinct, along with roughly 75% of all species—but this opened the door for mammal dominance.

*The Cretaceous ended an era but began a new chapter—the Age of Mammals and ultimately, the rise of humanity.*`
  },
  {
    name: 'Paleogene',
    period: '66-23 million years ago',
    description: 'Rise of mammals after dinosaur extinction',
    image: '/images/timeline/Paleogene.jpg',
    creatures: ['Early primates', 'Primitive whales'],
    detailedDescription: `The **Paleogene period** marked a significant transition following the extinction of the dinosaurs, witnessing the rapid diversification of mammals and birds.

With dinosaurs gone, mammals filled their vacant ecological niches with remarkable speed. Many modern mammal orders emerged during this time, including **early primates** (lemur-like forms), ancestors of carnivores (cats and dogs), early horses and relatives, and the first **whales**—which evolved from land-dwelling ancestors in one of evolution's great transformations.

The early Paleogene was characterized by a very warm global climate, with dense forests covering much of the planet and tropical conditions extending to high latitudes. A gradual cooling trend began later, with Antarctica starting to glaciate and grasslands beginning to spread.

Birds also diversified dramatically, filling many ecological roles and occasionally becoming giant predators (terror birds).

*The Paleogene was the dawn of the modern world—a time when mammals inherited the Earth.*`
  },
  {
    name: 'Neogene',
    period: '23-2.6 million years ago',
    description: 'Modern mammals and grasslands emerge',
    image: '/images/timeline/Neogene.jpg',
    creatures: ['Early horses', 'Mastodons'],
    detailedDescription: `The **Neogene period** was characterized by major geological and climatic changes that shaped the modern world, including the spread of grasslands and evolution of many modern mammals.

Global cooling continued, causing forests to retreat while **grasslands and savannas** expanded dramatically. This transformation drove major evolutionary changes in grazing mammals—horses evolved longer legs and specialized teeth, while elephants (mastodons, gomphotheres) diversified across the landscape.

The oceans saw the rise of **Megalodon**, a giant shark reaching up to 18 meters in length. On land, **great apes** diversified, with the split between human and chimpanzee lineages occurring during this time. Late in the period, **Australopithecus** appeared—our early hominin ancestors.

Geographic changes were also significant: the formation of the **Isthmus of Panama** connected North and South America, triggering the Great American Interchange of fauna. Permanent ice caps formed at the poles, establishing seasonal climates similar to those we experience today.

*The Neogene built the world we recognize—grasslands, familiar mammals, and the first steps toward humanity.*`
  },
  {
    name: 'Quaternary',
    period: '2.6 million years ago - present',
    description: 'Ice ages and human evolution',
    image: '/images/timeline/Quaternary.jpg',
    creatures: ['Woolly mammoths', 'Early humans'],
    detailedDescription: `The **Quaternary period**, extending from 2.6 million years ago to the present, is marked by dramatic climate fluctuations, ice ages, and the evolution and global spread of humans.

Repeated **glacial and interglacial cycles** defined this era, with ice sheets advancing and retreating, sea levels fluctuating dramatically, and land bridges forming and disappearing. These changes forced migrations and adaptations that shaped modern species distributions.

Iconic **Ice Age megafauna** roamed the Earth: woolly mammoths and mastodons across the Northern Hemisphere, saber-toothed cats and giant ground sloths in the Americas, cave bears and Irish elk in Europe. Most of these giants went extinct by the end of the last ice age.

Human evolution accelerated dramatically. **Homo erectus** was first to leave Africa, **Neanderthals** thrived in Europe and Asia, and **Homo sapiens** emerged around 300,000 years ago. Humans colonized every continent, developed agriculture about 10,000 years ago, and built civilizations.

The current epoch—the **Holocene**—began roughly 11,700 years ago with relatively stable, warm climate that enabled the rise of human civilization. Today, human activities are significantly impacting Earth's ecosystems and climate.

*The Quaternary is our period—a time of ice and fire, megafauna and humans, and the dawn of the world we know today.*`
  }
];
