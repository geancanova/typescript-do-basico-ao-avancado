"use strict";
// 1 - Campos em classe
class User {
}
const gean = new User();
gean.name = "Geancarlo";
// gean.job = 'Programmer'
console.log(gean);
// 2 - Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const jordan = new NewUser('Jordan', 60);
console.log(jordan);
// const pedro = new NewUser('Pedro') // falha, pois precisa dos dois argumentos do constructor
// 3 - Campo readnly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const beatle = new Car('Beatle');
console.log(beatle);
beatle.name = 'Fusca'; // propriedade nome pode ser mudada
console.log(beatle);
// beatle.wheels = 5 // propriedade é um readonly e não pode ser mudada
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine('Trator');
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine('Destroyer', 4);
console.log(trator);
console.log(destroyer);
// 5 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log('Hey stranger!');
    }
}
const olaf = new Dwarf('Olaf');
console.log(olaf.name);
olaf.greeting();
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck('Volvo', 400);
volvo.showDetails();
const scania = new Truck('Scania', 500);
scania.showDetails();
// 7 - Getters (lêem as propriedades)
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const geancarlo = new Person('Geancarlo', 'Canova');
console.log(geancarlo.name);
console.log(geancarlo.fullName);
// 8 - Setters (modificam/atribuem as propriedades)
class Coords {
    set fillX(x) {
        if (x === 0)
            return;
        this.x = x;
        console.log(`X inserido com sucesso. O valor de X é: ${x}`);
    }
    set fillY(y) {
        if (y === 0)
            return;
        this.y = y;
        console.log(`Y inserido com sucesso. O valor de Y é: ${y}`);
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const mycoords = new Coords();
mycoords.fillX = 15;
mycoords.fillY = 12;
console.log(mycoords);
console.log(mycoords.getCoords);
class BlogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é ${this.title}.`;
    }
}
const myPost = new BlogPost('Hello World!');
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é ${this.title}.`;
    }
}
// 10 - Override de métodos
class Base {
    someMethod() {
        console.log('alguma coisa');
    }
}
class Nova extends Base {
    someMethod() {
        console.log('substitui alguma coisa');
    }
}
const myObject = new Nova();
myObject.someMethod();
// Visibilidade (public, protected, private)
/*
- public: acessado em qualquer lugar
- protected: acessível apenas a subclasses do método, para acessar uma propriedade precisamos de um método
- private: apenas a classe que declarou o método pode utilizar
*/
// 11 - Public
class C {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
class D extends C {
}
const dInstance = new D();
console.log(dInstance.x);
// 12 - Protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log('Este é um método protegido');
    }
}
class F extends E {
    showX() {
        console.log(`X é igual a ${this.x}`);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
// console.log(fInstance.x) // erro: a propriedade x é protected e só poderá se acessada através de um método
fInstance.showX();
fInstance.showProtectedMethod();
// 13 - private
class PrivateClass {
    constructor() {
        this.name = 'Private';
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log('Método privado');
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const PrivObj = new PrivateClass();
// console.log(PrivObj.name) // erro: a propriedade é privada ao objeto PrivateClass
console.log(PrivObj.showName());
// PrivObj.privateMethod() // erro: método privado e só pode ser acessado pelo objeto PrivateClass
PrivObj.showPrivateMethod();
// class TestPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod() // não pode acessar o método privado da classe extendida PrivateClass
//   }
// }
// 14 - Static members (podem ser acessados diretamente da própria classe, sem a necessidade de se criar um objeto. É útil em classes que funcionam como helpers)
class StaticMembers {
    static staticMethod() {
        console.log('Este é um método estático');
    }
}
StaticMembers.prop = 'Teste static';
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - Generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item('caixa', 'surpresa');
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new Item(12, true);
console.log(secondItem);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// 16 - Paramater properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qty total: ${this.qty}`;
    }
    get showPrice() {
        return `Preço total: ${this.price}`;
    }
}
const newShirt = new ParameterProperties('Camisa', 5, 19.99);
console.log(newShirt.name);
// console.log(newShirt.price) // Erro: price é privado da classe PrivateProperties
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - Class Expressions (encapsular classes em variáveis)
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass('Jorge');
console.log(pessoa);
console.log(pessoa.name);
// 18 - Abstract class
class AbstractClass {
}
// const newObj = new AbstractClass() // erro: não se pode criar uma instância de uma classe abstrata
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObj = new AbstractExample('Josias');
newAbstractObj.showName();
// 19 - Relações entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat(); // quando as classes tem seu conteúdo exatamente igual, o TS não "reclama" se a tipagem referencia uma classe e a instância é a outra classe
console.log(doguinho);
