"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R${product.price}`);
    !product.isAvailable && console.log('Produto indisponível!');
}
const pants = {
    name: 'Calça Jeans',
    price: 149.99,
    isAvailable: true
};
const sneakers = {
    name: 'Tênis Air Jordan',
    price: 399.99,
    isAvailable: false
};
showProductDetails(pants);
showProductDetails(sneakers);
function showUserDetails(user) {
    console.log(`O usuário ${user.name} tem o e-mail: ${user.email}`);
    user.role && console.log(`A função do usuário é ${user.role}`);
}
const u1 = {
    name: 'Geancarlo',
    email: 'gean@email.com'
};
const u2 = {
    name: 'Harris',
    email: 'harris@email.com',
    role: 'the boss'
};
showUserDetails(u1);
showUserDetails(u2);
const beatle = {
    brand: 'VW',
    wheels: 4
};
console.log(beatle);
beatle.brand = 'Volkswagen';
// beatle.wheels = 5 // esta propriedade não pode ser alterada pois é readonly
console.log(beatle);
let coords = {
    x: 10
};
coords.y = 25;
// coords.z = '36' // não permite pois o tipo deve ser um number
console.log(coords);
const gean = {
    name: 'Geancarlo',
    age: 38
};
const goku = {
    name: 'Goku',
    age: 50,
    superpowers: ['Kamehameha', 'Genki Dama', 'Teleport']
};
console.log(gean);
console.log(goku);
const cowboy = {
    name: 'man with no name',
    type: 'Revolver',
    caliber: 45
};
const terminator = {
    name: 'T-800',
    type: 'Winchester repeater shotgun',
    caliber: 12
};
console.log(cowboy);
console.log(terminator);
// 7 - Readonly Array
let myArr = ['Apple', 'Orange', 'Banana'];
// myArr[3] = 'Melon' // Acusa erro pois o array é do tipo Readonly
console.log(myArr);
myArr.forEach(item => console.log(`${item} fruit`));
myArr = myArr.map(item => `${item} fruit`); // o array pode ser modificado apenas através de métodos
console.log(myArr);
const myNumArr = [1, 2, 3, 4, 5];
// const myNumArr2: fiveNumbers = [2, 4, 6] // Erro: o array deve conter o mesmo número de itens do tipo fiveNumbers
// const mixedArr: fiveNumbers = [2, 4, 'teste', 6, true] // Erro: o array deve conter itens correspondentes aos tipos setados em fiveNumbers
console.log(myNumArr);
const anotherUser = ['Geancarlo', 38];
console.log(anotherUser[0]);
anotherUser[0] = 'João';
console.log(anotherUser[0]);
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    // numbers[0] = 10 // não se pode mudar o valor pois é um readonly
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
