console.log("Ciao");
let nome = "Nello"
let num = 10.5
num = "Pippo"

let a = '100'
let b = '10'
let c = a / b
console.log(c)
let d = a + b
console.log(d)
let e = 1 * a + b
console.log(e)
let f = (1 * a) + (1 * b)
console.log(f)
let str = "Concatenazione " + "tra " + "stringhe"
console.log(str)
let x = 10
let y = 20
console.log(x + y, x * y, x - y, x / y, x % y, -x, +y)

console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x != y)
console.log(x == y)

console.log("Uguaglianza: ", "10" == 10)
console.log("Uguaglianza stretta: ", "10" === 10)

{
    let v = 20
    console.log(v)
}
//console.log(v)

myFunc()
myFunc()
myFunc()

let name = "Pluto"

hello1()

name = "Paperino"
hello1()

hello("Archimede")
hello("Paperone")

let n = "Gastone"
hello(n)
console.log("Il valore di n è", n)
function hello(who) {
    who = who + " di Paperopoli"
    console.log("Ciao,", who)
}
hello2("Paperino", "Paperopoli")
hello2("Topolino", "Topolinia")
function hello2(who, city) {
    console.log("Ciao,", who, "di", city)
}

function hello1() {
    console.log("Ciao,", name)
}

function myFunc() {
    let v = 30
    console.log(v)
}