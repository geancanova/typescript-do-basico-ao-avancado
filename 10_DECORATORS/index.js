"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - Exemplo decorator
function myDecorator() {
    console.log('Iniciando decorator!');
    return function (target, propertKey, descriptor) {
        console.log('executando decorator');
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log('terminando execução do método');
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myJob = new MyClass();
myJob.testing();
// 2 - Múltiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log('executou a');
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log('executou b');
    };
}
class MultipleDecorators {
    testing() {
        console.log('terminando execução');
    }
}
__decorate([
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
// 3 - Class decorator
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === 'User') {
        console.log('Criando usuário');
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const gean = new User('Geancarlo');
console.log(gean);
// 4 - Method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `o nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine('Trator');
console.log(trator.showName());
// 5 - Acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
const charmander = new Monster('Charmander', 3);
console.log(charmander);
// 6 - Property decorator
/*
  Instruções:
  O ID precisa estar no formato de 5 algarismos. Ex: 00001
*/
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, '0');
        };
        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID('1');
console.log(newItem.id);
// 7 - Exemplo Real: Class decorator
/*
  Instruções:
  Criar um deacorator para informar a data de criação
  de um item
*/
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const newPen = new Pen(23);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);
// 8 - Exemplo Real: Method decorator
/*
  Instruções:
  Criar um decorator para checar se um usuário já postou
  e prevenir que ele faça um novo post
*/
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        // refere ao método da classe onde o decorator foi aplicado (post)
        const childFunction = descriptor.value;
        console.log(childFunction);
        // recebe os argumentos 'content' e 'alreadyPosted' como um array
        descriptor.value = function (...args) {
            // checa se a proprieadade alreadyPosted é true
            if (args[1] === true) {
                console.log('Usuário já postou!');
                return null;
            }
            else {
                // se usuário não postou, retorna o fluxo normal da função
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post('Meu primeiro post!', newPost.alreadyPosted);
// Os posts abaixo serão bloqueados pelo decorator
newPost.post('Meu segundo post!', newPost.alreadyPosted);
newPost.post('Meu terceiro post!', newPost.alreadyPosted);
// 9 - Exemplo real: Property decorator (fazendo uma validação de dados)
function max(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    max(10)
], Admin.prototype, "username", void 0);
let pedro = new Admin('pedroadmin12345');
let lee = new Admin('leeadmin');
console.log(lee);
