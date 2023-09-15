"use strict";
// 1 - void
function withoutReturn() {
    console.log('Esta função não tem retorno!');
}
withoutReturn();
// 2 - Callback como argumento
function greeting(name) {
    return `Olá, ${name}`;
}
function preGreeting(f, userName) {
    console.log('Preparando a função!');
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, 'Geancarlo');
preGreeting(greeting, 'Jordan');
// 3 - Generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([2, 4, 6]));
console.log(firstElement(['a', 'b', 'c']));
// console.log(firstElement('teste')) // erro: função espera uma lista
function mergeObj(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObj = mergeObj({ name: 'Geancarlo' }, { age: 38, job: 'Programmer' });
console.log(newObj);
// 4 - Constraints
function biggestNumber(a, b) {
    let biggest = +a > +b ? a : b;
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber('12', '5'));
// 5 - Especificar tipo de argumento
function mergeArr(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArr([1, 2, 3], [4, 5]));
// Abaixo, definimos os tipos dos argumentos que a função recebe
console.log(mergeArr([1, 2, 3], ['teste', 'testando']));
// 6 - Argumentos opcionais
function modernGreeting(name, pronoun) {
    return pronoun ?
        `Olá ${pronoun} ${name}, tudo bem?` :
        `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting('Geancarlo'));
console.log(modernGreeting('Bruce Dickinson', 'Sr.'));
// 7 - Parâmetro default
function defaultSum(n, m = 10) {
    return n + m;
}
console.log(defaultSum(10));
console.log(defaultSum(10, 15));
// 8 - unknow
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === 'number') {
        console.log('X é um número');
    }
}
doSomething([1, 2, 3]);
doSomething(5);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage('Algum erro!') // comentado para não bloquear os próximos exemplos
// 10 - Rest parameters
function sumAll(...n) {
    return n.reduce((acc, cur) => acc + cur);
}
console.log(sumAll(2, 4, 6));
console.log(sumAll(1, 2, 3, 4, 5));
// 11 - Destructuring parameter
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R${price}`;
}
const shirt = { name: 'camisa', price: 49.99 };
console.log(showProductDetails(shirt));
