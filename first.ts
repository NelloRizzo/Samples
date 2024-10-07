console.log("Ciao a tutti da TypeScript")
let nome: string = "Nello"
let num: number = 10.5
// num = "Pippo" // Errore

let x: unknown = 10
let y: any = 10
// x = 12
x = "Ciao"
y = "Ciao"
const o = { value: 10 }
o.value = 20

let b: boolean = false

const double = (x: number): number => x * 2
console.log(double(2))
const writeDouble = (x: number): void => { console.log(x * 2) }
const v = writeDouble(3)
const loop = (): never => { for (; ;); }
let g: number | boolean = true
g = 10
//g = "Pippo"
console.log(" esempio di stringa ".length)
console.log(" esempio di stringa ".substring(3, 7))
console.log(" esempio di stringa ".slice(-4))
console.log(" esempio di stringa ".replace("str", "STR"))
console.log(" esempio di stringa ".trim())

let dt: Date = new Date()
console.log(dt)
let dt1: Date = new Date(2024, 6, 6, 0, 0, 0)
console.log(dt1.toLocaleDateString(), dt1.toLocaleTimeString())

enum Gender { Male = "U", Female = "D" }
let gender: Gender = Gender.Female
console.log(gender)

let numbers = [1,2,3,4,5,6,7,8]
console.log(numbers)
console.log(numbers[3])
numbers.push(1234)
console.log(numbers)
let l = numbers.pop()
console.log(l, numbers)
let f = numbers.shift()
console.log(numbers)
numbers.reverse()
console.log(numbers)
console.log(numbers.sort())