function hello(s) {
    console.log("Ciao,", s)
}

hello("Paperino")

function hello2(s, c) {
    console.log("Ciao,", s, "di", c)
}
hello2("Paperino", "Paperopoli")
hello2("Topolino")

const my = function () {
    console.log("Ciao dalla funzione anonima")
}
my()

function myFunction(name) {
    function hello() {
        console.log(name)
    }

    hello()
    hello()
}
myFunction("Nello")

function outer(s) {
    let v = s

    function inner() {
        let v = 10
        console.log(v)
    }
    inner()
    console.log(v)
}
outer(20)

function square(x) {
    const result = x * x
    return result
}

let q2 = square(2)
console.log(q2)
let q3 = square(3)
console.log(q3)