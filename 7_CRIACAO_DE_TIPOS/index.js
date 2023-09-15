"use strict";
// 1 - Generics (transforma o que é passado para a função em um argumento válido para ela)
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5)); // o número é transformado em string!
console.log(showData('Testando generic'));
console.log(showData(true));
console.log(showData(['teste']));
// 2 - Constraints em generics (restrições)
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = {
    name: 'porta',
    cor: 'branca'
};
const carObj = {
    name: 'carro',
    wheels: 4,
    engine: 1.0
};
const otherObj = {
    price: 23.90,
    category: 'food'
};
console.log(showProductName(myObj));
console.log(showProductName(carObj));
const myCar = {
    name: 'Beatle',
    wheels: 4,
    engine: 3.6,
    color: 'Black'
};
const myPen = {
    name: 'Bic',
    wheels: false,
    engine: false,
    color: 'Blue'
};
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharProp(obj, prop) {
    return `${obj[prop]}`;
}
const myChar = {
    name: 'Geancarlo',
    age: 38,
    hasDriverLicense: true
};
console.log(showCharProp(myChar, 'name'));
console.log(showCharProp(myChar, 'age'));
// 6 - Typeof type operator
const userName = 'Geancarlo';
const userName2 = 'John';
const userName3 = 'Demerval';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: 'Caminhão para pouca carga'
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = 'some text';
const testingUnion = 'Testando';
const testingUnion2 = 'Union';
// const testingUnion3: a3 = 'Outro valor' // acusa erro pois precisa ter um dos valores possíveis em a3
