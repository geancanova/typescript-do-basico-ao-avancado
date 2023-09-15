"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.95156;
console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = 'Geancarlo';
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Canova";
fullName = `${firstName} ${lastName}`;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - Inference e annotation
let ann = "Teste";
let inf = "Teste";
// ann = 1
// inf = 1
console.log(ann);
// Exercício
let num = 5;
let strNum = num + '';
console.log(`O número é ${strNum}`);
