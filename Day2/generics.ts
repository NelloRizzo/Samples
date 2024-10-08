class My<T> {
    constructor(private _value: T) {
        console.log("Costruttore di My<", typeof (_value), ">")
    }
    get value(): T { return this._value }
    set value(v: T) { this._value = v }
}

const mi = new My<number>(10)
const ms = new My<string>("Pippo")

console.log(mi.value)
console.log(ms.value)

//mi.value = "Topolino" // errore: mi è My<number> quindi value è number
//ms.value = 10 // errore ms è My<string> quindi value è string
console.log(mi)