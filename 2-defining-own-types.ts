export interface User {
  name: string;
  age: number;
  hobbies: string[];
}
const user: User = {
  // TODO
  name: 'Colby',
  age: 26,
  hobbies: ['camping', 'etc'],
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

function addSoulGemToGauntlet(soulGem: Gem) {
  gauntlet.soul = soulGem;
}

// Optional types
interface IronManSuit {
  helmet?: boolean;
  arms?: boolean;
  legs?: boolean;
  chest?: boolean;
  feet?: boolean;
  arcReactor: boolean;
}
const markV: IronManSuit = {
  // TODO
};

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

// JS Classes
class Mutant {
  name: string;
  power: string;

  constructor(name: string, power: string) {
    this.name = name;
    this.power = power;
  }
}

const Wolverine = new Mutant('Logan', 'healing factor');
console.log(Wolverine.);
console.log(Wolverine.);

// Satisfy TS
export {};
