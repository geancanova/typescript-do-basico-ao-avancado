// 1 - arrays
let numbers: number[] = [1, 2, 3]
numbers.push(5)
console.log(numbers)

// 2 - arrays em outra sintaxe
const nums: Array<number> = [100, 200]
nums.push(300)
console.log(nums)

// 3 - any
const arr1: any = [1, 'string', true, [], {nome: 'Geancarlo'}]
arr1.push(nums)
console.log(arr1)

// 4 - parâmetros tipados
function sum(a: number, b: number) {
  console.log(a + b)
}
sum(4, 5)

// 5 - retorno de função
function greeting(name: string): string {
  return `Olá ${name}`
}
console.log(greeting('Geancarlo'))

// 6 - função anônima
setTimeout(() => {
  const sallary: number = 1000
  // console abaixo vai acusar erro pois parseFloat requer uma string
  // console.log(parseFloat(sallary))
}, 1000);

// 7 - tipos de objetos
function passCoordinates(coord: {x: number, y: number}) {
  console.log(`X coordinates: ${coord.x}`)
  console.log(`Y coordinates: ${coord.y}`)
}

const objCoord = {
  x: 329,
  y: 73.5
}

passCoordinates(objCoord)

// 8 - Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log(`A ${a}`)
  console.log(`B ${b}`)
  c && console.log(`C ${c}`)
}

showNumbers(1, 2, 3)
showNumbers(1, 2)

// 9 - Validação de parâmetro opcional
function advancedGreeting(firstName: string, lastName?: string) {
  lastName !== undefined && console.log(`Olá ${firstName} ${lastName}!`)

  return console.log(`Olá, ${firstName}!`)
}

advancedGreeting('Geancarlo Canova')
advancedGreeting('Bráulio')

// 10 - Union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance('200')
showBalance(200)

const arr2: Array<number | string | boolean> = [1, 'teste', true]
console.log(arr2)

// 11 - Avançando com union types
function showUserRole(role: boolean | string) {
  return typeof role === 'boolean' ? 
    'Usuário não aprovado' :
    `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole('Admin'))

// 12 - Type alias
type ID = string | number

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId(1)
showId('200')

// 13 - Introdução às Interfaces
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20
}

showCoords(coordObj)

// 14 - Type alias x Interface
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {
  name: 'Geancarlo',
  age: 38
}
console.log(somePerson)

type personType = {
  name: string
}

// Diferentemente da Interface (que pode receber novas propriedades) o alias abaixo vai acusar erro, pois o type personType já foi declarado
// type personType = {
//   age: number
// }

// 15 - Literal types
let test: 'testando'

test = 'testando'
console.log(test)

function showDirection(direction: 'left' | 'right' | 'center') {
  console.log(`A direção é ${direction}`)
}

showDirection('left')
// showDirection('top') vai acusar erro pois não é um literal type

// 16 - Non null assertion operator
const p = document.getElementById('some-p')

console.log(p!.innerText)

// 17 - Bigint
let n: bigint

n = 1000n
console.log(n)
console.log(typeof n)
console.log(n + 100n)

// 18 - Symbol
let symbolA: symbol = Symbol('a')
let symbolB: symbol = Symbol('a')

console.log(symbolA == symbolB) // false
console.log(symbolA === symbolB) // false