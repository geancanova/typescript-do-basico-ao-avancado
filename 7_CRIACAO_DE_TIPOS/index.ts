// 1 - Generics (transforma o que é passado para a função em um argumento válido para ela)
function showData<T>(arg: T): string {
  return `O dado é ${arg}`
}
console.log(showData(5)) // o número é transformado em string!
console.log(showData('Testando generic'))
console.log(showData(true))
console.log(showData(['teste']))

// 2 - Constraints em generics (restrições)
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}
const myObj = {
  name: 'porta',
  cor: 'branca'
}
const carObj = {
  name: 'carro',
  wheels: 4,
  engine: 1.0
}
const otherObj = {
  price: 23.90,
  category: 'food'
}
console.log(showProductName(myObj))
console.log(showProductName(carObj))
// console.log(showProductName(otherObj)) // erro: precisa ter o name declarado

// 3 - Generics com Interface
interface MyObj<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}
type Car = MyObj<number, number, string>
type Pen = MyObj<boolean, boolean, string>
const myCar: Car = {
  name: 'Beatle',
  wheels: 4,
  engine: 3.6,
  color: 'Black'
}
const myPen: Pen = {
  name: 'Bic',
  wheels: false,
  engine: false,
  color: 'Blue'
}
console.log(myCar)
console.log(myPen)

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`
}
const server = {
  hd: '2TB',
  ram: '32GB'
}
console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste')) // erro: teste não existe como key de server

// 5 - Keyof type operator
type Character = {
  name: string,
  age: number,
  hasDriverLicense: boolean
}
type C = keyof Character
function showCharProp(obj: Character, prop: C) {
  return `${obj[prop]}`
}
const myChar: Character = {
  name: 'Geancarlo',
  age: 38,
  hasDriverLicense: true
}
console.log(showCharProp(myChar, 'name'))
console.log(showCharProp(myChar, 'age'))

// 6 - Typeof type operator
const userName: string = 'Geancarlo'
const userName2: typeof userName = 'John'
type x = typeof userName // outro exemplo utilizando um type
const userName3: x = 'Demerval'

// 7 - Indexed access types
type Truck = {
  km: number,
  kg: number,
  description: string
}
type Km = Truck['km']
const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: 'Caminhão para pouca carga'
}
function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`)
}
showKm(newTruck.km)
const newCar = {
  km: 5000,
  kg: 1000
}
showKm(newCar.km)

// 8 - Conditional types
interface A {}
interface B extends A {}
interface Teste {
  showName(): string
}
type myType = B extends A ? number : string
const someVar: myType = 5
// const someVar2: myType = 'teste' // acusa erro, pois a condição em myType valida um number como type

// 9 - Template literals type
type testA = 'text'
type CustomType = `some ${testA}`
const testing:CustomType = 'some text'
// const testing2:CustomType = 'some text 2' // acusa erro pois precisa ter o valor exato do tipo CustomType
type a1 = 'Testando'
type a2 = 'Union'
type a3 = `${a1}` | `${a2}`
const testingUnion: a3 = 'Testando'
const testingUnion2: a3 = 'Union'
// const testingUnion3: a3 = 'Outro valor' // acusa erro pois precisa ter um dos valores possíveis em a3