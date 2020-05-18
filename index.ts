console.log("hello typescript");

// you can not use const fs = require('fs') as in .js you need to do the following :
// this will require npm install @types/node --save-dev

import  fs =  require('fs');
console.log(fs);


import { Colors } from "./colors";
import { Area } from "./area";
import {IPerson} from "./iperson"

function showArea(a: Area) {
  console.log(a.width, a.height);
}

// also possible ---> const c : Colors = Colors.Red;
const c = Colors.Red;
console.log(c);

let a = new Area(1, 2);
// --- hover on showArea(a) and see the Area type
showArea(a);

let person: IPerson = {
  name: "Tom",
  age: 32,
  getSigniture: (): string => {
    return `${person.name} , ${person.age}`;
  },
};

console.log(person.getSigniture());
 