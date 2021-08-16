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
