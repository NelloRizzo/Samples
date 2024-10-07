let x = 3

console.log("x vale", x)
if (x % 2 == 0) {
    console.log(x, "è pari")
}
else if (x < 6) {
    console.log(x, "è un numero dispari minore o uguale a 5")
}
else {
    console.log(x, "è dispari maggiore di 5")
}
console.log("while")
let i = 10
while (i < 10) {
    console.log(i)
    i = i + 1
}
console.log("do/while")
i = 10
do {
    console.log(i)
    i = i + 1
} while (i < 10)

console.log("for")
for (let i = 0, j = 1; i < 10; i = i + 1, j = j + 2) {
    console.log(i, j)
}
let a = 3
for (; a < 5;) {
    console.log(a)
    a = a + 4
}

console.log("Fine.")
