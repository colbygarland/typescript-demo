let something: string = 'Hello';
something = 10;
something = [1, 2, 3, 4, 5];
something = () => {
  console.log('Hello world');
};

let anything: any = 'Hello';
anything = 10;
anything = [1, 2, 3, 4, 5];
anything = () => {
  console.log('Hello world');
};

async function fetchFromAPI() {
  const response: unknown = await fetch('');
}

// Satisfy TS
export {};
