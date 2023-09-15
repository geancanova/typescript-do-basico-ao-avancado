// 1 - Tipo de objeto para função com Interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}
function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e seu preço é R${product.price}`)
  !product.isAvailable && console.log('Produto indisponível!')
}
const pants: Product = {
  name: 'Calça Jeans',
  price: 149.99,
  isAvailable: true
}
const sneakers: Product = {
  name: 'Tênis Air Jordan',
  price: 399.99,
  isAvailable: false
}
showProductDetails(pants)
showProductDetails(sneakers)

// 2 - Interface com propriedade opcional
interface User {
  name: string,
  email: string,
  role?: string
}
function showUserDetails(user: User) {
  console.log(`O usuário ${user.name} tem o e-mail: ${user.email}`)
  user.role && console.log(`A função do usuário é ${user.role}`)
}
const u1: User = {
  name: 'Geancarlo',
  email: 'gean@email.com'
}
const u2: User = {
  name: 'Harris',
  email: 'harris@email.com',
  role: 'the boss'
}
showUserDetails(u1)
showUserDetails(u2)

// 3 - Propriedades readonly
interface Car {
  brand: string
  readonly wheels: number
}
const beatle: Car = {
  brand: 'VW',
  wheels: 4
}
console.log(beatle)
beatle.brand = 'Volkswagen' // esta propriedade pode ser alterada
// beatle.wheels = 5 // esta propriedade não pode ser alterada pois é readonly
console.log(beatle)

// 4 - Index Signature
interface coordObj {
  [index: string]: number
}
let coords: coordObj = {
  x: 10
}
coords.y = 25
// coords.z = '36' // não permite pois o tipo deve ser um number
console.log(coords)

// 5 - Extending interfaces (herança)
interface Human {
  name: string
  age: number
}
interface SuperHuman extends Human {
  superpowers: string[]
}
const gean: Human = {
  name: 'Geancarlo',
  age: 38
}
const goku: SuperHuman = {
  name: 'Goku',
  age: 50,
  superpowers: ['Kamehameha', 'Genki Dama', 'Teleport']
}
console.log(gean)
console.log(goku)

// 6 - Intersection types
interface Character {
  name: string
}
interface Gun {
  type: string
  caliber: number
}
type HumanWithGun = Character & Gun // Une as duas interfaces como tipo 
const cowboy: HumanWithGun = {
  name: 'man with no name',
  type: 'Revolver',
  caliber: 45
}
const terminator: HumanWithGun = {
  name: 'T-800',
  type: 'Winchester repeater shotgun',
  caliber: 12
}
console.log(cowboy)
console.log(terminator)

// 7 - Readonly Array
let myArr: ReadonlyArray<string> = ['Apple', 'Orange', 'Banana']
// myArr[3] = 'Melon' // Acusa erro pois o array é do tipo Readonly
console.log(myArr)
myArr.forEach(item => console.log(`${item} fruit`))
myArr = myArr.map(item => `${item} fruit`) // o array pode ser modificado apenas através de métodos
console.log(myArr)

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number]
const myNumArr: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumArr2: fiveNumbers = [2, 4, 6] // Erro: o array deve conter o mesmo número de itens do tipo fiveNumbers
// const mixedArr: fiveNumbers = [2, 4, 'teste', 6, true] // Erro: o array deve conter itens correspondentes aos tipos setados em fiveNumbers
console.log(myNumArr)

type nameAndAge = [string, number]
const anotherUser: nameAndAge = ['Geancarlo', 38]
console.log(anotherUser[0])
anotherUser[0] = 'João'
console.log(anotherUser[0]) 

// 9 - Tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  // numbers[0] = 10 // não se pode mudar o valor pois é um readonly
  console.log(numbers[0])
  console.log(numbers[1])
}
showNumbers([1, 2])