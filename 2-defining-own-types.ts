export interface User {
  name: string;
  age: number;
  hobbies: string[];
}
const user: User = {
  // TODO
};

// Compositional Types
type Gem = 'infinity stone';
interface InfinityGauntlet {
  space?: Gem;
  mind?: Gem;
  reality?: Gem;
  power?: Gem;
  time?: Gem;
  soul?: Gem;
}
const gauntlet: InfinityGauntlet = {};

function hurlDaughterOffCliff() {
  console.log('I am prepared');
}
function addSoulGemToGauntlet(soulGem: Gem) {
  hurlDaughterOffCliff();
  gauntlet.soul = soulGem;
}

// Unions
type Avenger = 'Iron Man' | 'Captain America' | 'Hulk' | 'Black Widow' | 'Hawkeye' | 'The Vision' | 'Spider-Man';
type SinisterSix = 'Doctor Octopus' | 'Vulture' | 'Electro' | 'Mysterio' | 'Sandman' | 'Kraven the Hunter';
const strongestAvenger: Avenger = ''; // TODO
const bestHunter: SinisterSix = ''; // TODO

// Generics
type AvengerArray = Array<Avenger>;
const avengers: AvengerArray = [
  // TODO
];

// Satisfy TS
export {};
