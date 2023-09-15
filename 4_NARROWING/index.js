"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        console.log(a + b);
    }
    else {
        console.log('Impossível realizar a soma!');
    }
}
sum('7', '12');
sum(5, 10.6);
sum(8, '20');
// 2 - checando se o valor existe
function operations(arr, operation) {
    switch (operation) {
        case 'sum':
            const sum = arr.reduce((acc, cur) => acc + cur);
            console.log(sum);
            break;
        case 'multiply':
            const multiply = arr.reduce((acc, cur) => acc * cur);
            console.log(multiply);
            break;
        default:
            console.log('Por favor, defina uma operação');
            break;
    }
}
operations([2, 4, 6]);
operations([2, 4, 6], 'sum');
operations([2, 4, 6], 'multiply');
// 3 - instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const john = new User('John');
const paul = new SuperUser('Paul');
console.log(john);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name}! Gostaria de ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá, ${user.name}!`);
    }
}
userGreeting(john);
userGreeting(paul);
// 4 - Operador in 
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed)
            this.breed = breed;
    }
}
const fina = new Dog('Josefina');
const bobby = new Dog('Bobby', 'Dachshund');
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro ${dog['name']} é da raça ${dog.breed}.`);
    }
    else {
        console.log(`O cachorro ${dog['name']} é SRD.`);
    }
}
showDogDetails(fina);
showDogDetails(bobby);
// Exercício
function userReview(review) {
    if (typeof review === 'number') {
        console.log(`A avaliação recebida foi ${review}.`);
    }
    else {
        console.log(`O usuário não avaliou.`);
    }
}
userReview(3);
userReview(false);
