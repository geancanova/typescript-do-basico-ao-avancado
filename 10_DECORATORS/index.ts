// 1 - Exemplo decorator
function myDecorator() {
  console.log('Iniciando decorator!')

  return function(target: any, propertKey: string, descriptor: PropertyDescriptor) {
    console.log('executando decorator')
    console.log(target)
    console.log(propertKey)
    console.log(descriptor)
  }
}

class MyClass {
  @myDecorator()
  testing() {
    console.log('terminando execução do método')
  }
}

const myJob = new MyClass()

myJob.testing()


// 2 - Múltiplos decorators
function a() {
  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    console.log('executou a')
  }
}

function b() {
  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    console.log('executou b')
  }
}

class MultipleDecorators {
  @a()
  @b()
  testing() {
    console.log('terminando execução')
  }
}

const multiple =new MultipleDecorators()

multiple.testing()


// 3 - Class decorator
function classDec(constructor: Function) {
  console.log(constructor.name)
  if (constructor.name === 'User') {
    console.log('Criando usuário')
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const gean = new User('Geancarlo')

console.log(gean)


// 4 - Method decorator
function enumerable(value: boolean) {
  return function(
    target: any, 
    propertKey: string, 
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    console.log(this)
    return `o nome da máquina é: ${this.name}`
  }
}

const trator = new Machine('Trator')

console.log(trator.showName())


// 5 - Acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster('Charmander', 3)

console.log(charmander)


// 6 - Property decorator

/*
  Instruções: 
  O ID precisa estar no formato de 5 algarismos. Ex: 00001
*/
function formatNumber() {
  return function(target: Object, propertKey: string) {
    let value: string

    const getter = function() {
      return value
    }

    const setter = function(newVal: string) {
      value = newVal.padStart(5, '0')
    }

    Object.defineProperty(target, propertKey, {
      set: setter,
      get: getter
    })
  }
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID('1')

console.log(newItem.id)


// 7 - Exemplo Real: Class decorator
/*
  Instruções: 
  Criar um deacorator para informar a data de criação
  de um item
*/
function createdDate(created: Function) {
  created.prototype.createdAt = new Date()
}

@createdDate
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(12)
const newPen = new Pen(23)

console.log(newBook)
console.log(newPen)
console.log(newBook.createdAt)


// 8 - Exemplo Real: Method decorator
/*
  Instruções: 
  Criar um decorator para checar se um usuário já postou
  e prevenir que ele faça um novo post
*/
function checkIfUserPosted() {
  return function(
    target: Object,
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {

    // refere ao método da classe onde o decorator foi aplicado (post)
    const childFunction = descriptor.value
    console.log(childFunction)
    
    // recebe os argumentos 'content' e 'alreadyPosted' como um array
    descriptor.value = function(...args: any[]) {

      // checa se a proprieadade alreadyPosted é true
      if(args[1] === true) {
        console.log('Usuário já postou!')
        return null
      } else {
        // se usuário não postou, retorna o fluxo normal da função
        return childFunction.apply(this, args)
      }
    }

    return descriptor
  }
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const newPost = new Post()

newPost.post('Meu primeiro post!', newPost.alreadyPosted)

// Os posts abaixo serão bloqueados pelo decorator
newPost.post('Meu segundo post!', newPost.alreadyPosted)
newPost.post('Meu terceiro post!', newPost.alreadyPosted)


// 9 - Exemplo real: Property decorator (fazendo uma validação de dados)
function max(limit: number) {
  return function(target: Object, propertyKey: string) {
    let value: string
    
    const getter = function() {
      return value
    }

    const setter = function(newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos.`)
        return
      } else {
        value = newVal
      }
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  }
}

class Admin {
  @max(10)
  username

  constructor(username: string) {
    this.username = username
  }
}

let pedro = new Admin('pedroadmin12345')
let lee = new Admin('leeadmin')

console.log(lee)