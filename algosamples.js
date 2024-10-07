const writeTab = function (x) {
    console.log("Tabellina del", x)
    for (let i = 1; i < 11; i++) {
        console.log(i, 'x', x, '=', x * i)
    }
}

writeTab(6)
writeTab(3)
writeTab(312);

//(function (x) { console.log("output", x) })(15)
const arrow = () => { console.log("Ciao da una arrow function") }
arrow()
const square = (x) => { return x * x }
console.log("square", square(2))
const sum = (x, y) => x + y
console.log("sum", sum(2, 3))

let x = 11

//function decisione(c) { return c % 2 == 0 }

function elaboraSullaBaseDiUnaDecisione(d, decisione) {
    console.log("Inizio della funzione")
    if (decisione(d))
        console.log("d =",d)
    console.log("Funzione terminata")
}

elaboraSullaBaseDiUnaDecisione(44, c => c % 2 != 0)
elaboraSullaBaseDiUnaDecisione(44, c => c % 2 == 0)
elaboraSullaBaseDiUnaDecisione(44, c => x & 2 != 0 && c % 2 == 0)

Array.from("CIAO A TUTTI DA JS")
    .map(c => c.toLowerCase())
    .forEach(c => console.log(c))

