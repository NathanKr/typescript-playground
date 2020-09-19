import { Colors } from "./colors";
import { Area } from "./area";
import { IPerson } from "./IPerson";


console.log("hello typescript !!");

// you can not use const fs = require('fs') as in .js you need to do the following :
// this will require npm install @types/node --save-dev
import  process =  require('process');
import { IStudent } from "./IStudent";
console.log(`process.cwd : ${process.cwd()}`);


function showArea(a: Area) {
  console.log(a.width, a.height);
}

// also possible ---> const c : Colors = Colors.Red;
const c = Colors.Red;
console.log(c == 'red');

let a = new Area(1, 2);
// --- hover on showArea(a) and see the Area type
showArea(a);

let person1 : IPerson = {
  name: "Tom",
  age: 32,
};

let student1 : IStudent = {
  name: "Jim",
  age: 44,
  grade: 99
}
console.log(person1);
console.log(student1);



 