// 1 - var, let e const
var x = 10;
var y = 15;

if (y > 10) {
  var x = 5;
  console.log(x); // 5
}

console.log(x); // 5

let a = 10;
let b = 15;

if (b > 10) {
  let a = 5;
  console.log(a); // 5
}

console.log(a); // 10

let i = 100;

for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}

console.log(i); // 100

function logName() {
  const name = "Geancarlo";
  console.log(name);
}

const name = "João";

logName(); // Geancarlo

console.log(name); // João

// 2 - Arrow functions
const sum = function (a, b) {
  return a + b;
}

const arrowSum = (a, b) => a + b;

console.log(sum(5, 5));
console.log(arrowSum(5, 5));

const greeting = name => {
  if (name) {
    return `Olá, ${name}!`
  } else {
    return 'Olá!'
  }
}

console.log(greeting('Gean'));
console.log(greeting());

const testArrow = () => console.log('teste!');

testArrow();

const user = {
  name: 'Jorge',
  sayUserName() {
    setTimeout(function () {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 500);
  },
  sayUserNameArrow() {
    setTimeout(() => {
      console.log(this);
      console.log(`Username: ${this.name}`);
    }, 700);
  }
}

// user.sayUserName(); // this = window
// user.sayUserNameArrow(); // this = user (arrow function parent)

// 3 - filter
const arr = [1, 2, 3, 4, 5];

console.log(arr);

const highNumbers = arr.filter(n => {
  if (n >= 3) {
    return n;
  }
})

console.log(highNumbers);

const users = [
  {
    name: 'Geancarlo',
    available: true
  },
  {
    name: 'Adamastor',
    available: false
  },
  {
    name: 'Sérgio',
    available: false
  },
  {
    name: 'Jorge',
    available: true
  }
]

const availableUsers = users.filter(user => user.available);

console.log(availableUsers);

// 4 - map
const products = [
  {
    name: 'Camisa',
    price: 10.99,
    category: 'Clothes'
  },
  {
    name: 'Chaleira Elétrica',
    price: 49.99,
    category: 'Electro'
  },
  {
    name: 'Fogão',
    price: 400,
    category: 'Electro'
  },
  {
    name: 'Calça Jeans',
    price: 50.99,
    category: 'Clothes'
  },
]

products.map(product => {
  if (product.category === 'Clothes') {
    product.onSale = true
  }
});

console.log(products);

// 5 - template literals
const userName = 'Geancarlo';
const age = 38;

console.log(`O nome do user é ${userName} e sua idade é ${age} anos`);

// 6 - destructuring

// array
const fruits = ['maçã', 'laranja', 'mamão'];

const [f1, f2, f3] = fruits;

console.log(f1);
console.log(f3);

// object
const productDetails = {
  name: 'Mouse',
  price: 39.99,
  category: 'Hardware',
  color: 'Gray'
}

const { 
  name: productName, 
  price, 
  category: productCategory, 
  color 
} = productDetails;

console.log(`O nome do produto é ${productName}, custa ${price}, pertence à categoria ${productCategory} e possui a cor ${color}`);

// 7 - spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [...a1, ...a2];
console.log(a3);

const a4 =[0, ...a1, 4];
console.log(a4);

const carName = { name: 'Gol' }
const carBrand = { brand: 'VW' }
const otherInfos = { km: 10000, price: 49000 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }

console.log(car);

// 8 - classe
class Product {
  constructor(name, price) {
    this.name = name,
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product('Camisa gola v', 20);

console.log(shirt.name);
console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(50));

const tenis = new Product('Tênis', 299.99);

console.log(tenis.productWithDiscount(20));

// 9 - herança de classe
class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price),
    this.colors = colors
  }
  
  showColors() {
    console.log('as cores são:');
    this.colors.forEach(color => console.log(color));
  }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, ['preto', 'azul', 'verde']);

console.log(hat.name);
console.log(hat.productWithDiscount(30));
hat.showColors();