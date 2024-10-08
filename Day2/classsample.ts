class Persona {
    //nome: string = ""
    //cognome: string = ""

    //constructor(n: string, c: string) {
    //    this.nome = n
    //    this.cognome = c
    //}

    private _nickName: string = ''
    get nickName() {
        console.log("Chiamata alla get di nickName")
        return this._nickName.length == 0 ?
            this.nome + " " + this.cognome
            : this._nickName
    }
    set nickName(v: string) {
        console.log("Chiamata alla set di nickName")
        this._nickName = v
    }

    constructor(public nome: string, public cognome: string,
        private eta: number) {

    }

    festeggiaCompleanno(): void {
        this.eta++;
    }
    saluta(): void {
        console.log("Buongiorno da", this.cognome, this.nome,
            "ed ho", this.eta, "anni")
    }
}
class Studente extends Persona {
    scuola: string = ''

    constructor(nome: string, cognome: string, eta: number, scuola: string) {
        super(nome, cognome, eta)
        this.scuola = scuola
    }
    // overriding
    saluta(): void {
        super.saluta()
        console.log("\te frequento", this.scuola)
    }
    scriviScuola() {
        console.log("Sono", this.nome, "e frequento", this.scuola)
    }
}

const p = new Persona("Archimede", "Pitagorico", 57)

//p.nome = "Archimede"
//p.cognome = "Pitagorico"
console.log(p.nome, p.cognome)
p.saluta()
p.festeggiaCompleanno()
p.saluta()
p.nickName = "archi"
console.log(p.nickName)

const s = new Studente("Paperino", "Paolino", 58, "Scuola media")
s.saluta()
//s.scuola = "Università di Paperopoli"
s.scriviScuola()

function utilizzaPersona(p: Persona): void {
    console.log("Sto usando una persona")
    p.saluta()
}

utilizzaPersona(p)
utilizzaPersona(s)

class Docente extends Persona {
    constructor(nome: string, cognome: string, public materia: string) {
        super(nome, cognome, 50)
    }
    override saluta() : void {
        super.saluta()
        console.log("\tSono un docente e insegno", this.materia)
    }
}
utilizzaPersona(new Docente("Pico", "De' Paperis", "Fisica"))