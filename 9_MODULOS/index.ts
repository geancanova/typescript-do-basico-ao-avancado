// 1 - importação de arquivos
import importGreet from "./greet";

importGreet()

// 2 - import de variável
import { x } from "./variable";

console.log(x)

// 3 - multiplas importações
import { a, b, myFunction } from './multiple'

console.log('a')
console.log('b')
myFunction()

// 4 - alias de importação
import { someName as name } from "./alias";

console.log(name)

// 5 - import all
import * as myNumbers from './numbers'

console.log(myNumbers)

const nx = myNumbers.n1

console.log(nx)

myNumbers.showNumber()

// 6 - import types
import { Human } from "./mytype";

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new User('João', 33)

console.log(joao)