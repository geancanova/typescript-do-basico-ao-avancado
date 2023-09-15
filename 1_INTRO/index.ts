const firstName = "Geancarlo"
const anotherName = 1
const x = true

function greeting(name: string) {
  console.log(`Olá ${name}`)
}

greeting(firstName)
// greeting(anotherName)
// greeting(x)

// Exercício
function sum(x: number, y: number) {
  return x + y
}

console.log(sum(3, 5))