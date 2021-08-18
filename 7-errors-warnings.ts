// import errors
import { User } from './2-defining-own-types';
// import warnings
import { useState } from 'react';

// unused warnings
// missing properties errors
const user: User = {
  name: 'Colby',
};

// incorrect type errors
const age: number = '26';
console.log(age);

// not callable errors
user();

// non-exception failures
// in js, this is simply undefined
user.email;

// typos
const message = 'Avengers, assemble!';
message.toLocaleLowercase();
message.toLocalLowerCase();
// TODO: write the correct function call here

// uncalled functions
function flipCoin() {
  // we meant Math.random()
  return Math.random < 0.5;
}

// also catches basic logic errors
const value = Math.random() < 0.5 ? 'a' : 'b';
if (value !== 'a') {
  // do work
} else if (value === 'b') {
  // this part is unreachable
}
