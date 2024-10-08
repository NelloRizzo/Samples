function handle(v: Vehicle) {
    v.describe()
}

abstract class Vehicle {
    /*
    Cosa intendiamo per veicolo?
    Un veicolo può essere a motore o a pedali
    Un veicolo può avere da 2 a 4 ruote
    Un veicolo può usare un determinato combustibile
    */
    describe() { console.log("Sono un veicolo") }
}

class Auto extends Vehicle {
    private ruote: number
    constructor() {
        super()
        this.ruote = 4
    }
    describe(): void {
        console.log("Sono un'automobile")
    }
}

class Cycle extends Vehicle {
    private ruote: number
    constructor() {
        super()
        this.ruote = 2
    }
    describe(): void {
        console.log("Sono un bicicletta con", this.ruote, "ruote")
    }
}
const a = new Auto()
const b = new Cycle()
handle(a)
handle(b)
