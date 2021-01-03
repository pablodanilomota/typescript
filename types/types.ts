/**
 * String
 */
let personalName: string = 'Pablo'
console.log(personalName)

/**
 * Implicit type is automatically string.
 */
//personalName = 28

/**
 * Number
 */

let age: number = 27
//age = 'Ana'
age = 27.5
console.log(age)

/**
 * Boolena
 */
let isFalse: boolean = false
//isFalse = 1
console.log(isFalse)

/**
 *  Explicit types
 */
let myAge: number
myAge = 27
console.log(typeof myAge)
//myAge = '27'
console.log(myAge)

/**
 * Arrays
 */
let hobbies: any[] = ['cook', 'sport']
console.log(hobbies[1])
console.log(typeof hobbies)

hobbies = [100]
//hobbies = 100
console.log(hobbies)

/**
 * Tupla
 * Array defined, index to index.
 */
let adress: [string, number, string] = ['Av. Pricipal', 99, '']
console.log(adress)

adress = ['Av. Pricipal', 99, 'Home']
console.log(adress)

/**
 * Enum
 */
enum Color {
  grey,
  green = 100,
  blue = 10,
  orange,
  yellow,
  red = 100
}

let myColor: Color = Color.green
console.log(myColor)
console.log(Color.blue)
console.log(Color.orange, Color.yellow)
console.log(Color.green, Color.red)

/**
 * Any
 */
let car: any = 'BMW'
console.log(car)
car = {
  brand: 'BMW',
  year: 2019
}
console.log(car)

//funções
function returnMyName(): string {
  // return myAge
  return personalName
}
console.log(returnMyName())

function sayHello(): void {
  console.log('hello')
  // return myAge
}

sayHello()
