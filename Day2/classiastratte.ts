// definire un sistema di gestione di elementi che prevedano
// la possibilità di esporre un loro perimetro
// diciamo che lavoriamo con figure geometriche che dovranno
// in qualche modo fornire le informazioni relativamente al loro perimetro
const context = (e: Shape) => {
    e.describe()
    console.log("Il mio perimetro vale", e.perimeter)
}

const otherContext = (e: HasCircumference) => {
    console.log("Circonferenza:", e.circum())
}

enum Colors { Red = 0xff0000, Green = 0x00ff00, Blue = 0x0000ff }

abstract class Shape {
    constructor(protected color: Colors) { }

    abstract get perimeter(): number //{ return 0 }

    describe = () => console.log("Sono una figura geometrica di colore ", this.color)
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super(Colors.Blue)
    }

    override get perimeter(): number {
        return this.width * 2 + this.height * 2
    }
}

class Square extends Rectangle {
    constructor(side: number) {
        super(side, side)
        this.color = Colors.Green
    }
}

class Circle extends Shape implements HasCircumference {
    constructor(public radius: number) { super(Colors.Red) }
    override get perimeter(): number {
        return this.radius * 6.28
    }
    circum = () => this.perimeter
    get area() { return this.radius * this.radius * 3.14 }
}

interface HasCircumference {
    circum(): number
    get area(): number
}

context(new Rectangle(10, 8))
context(new Square(5))
const c = new Circle(15)
context(c)
console.log(c.circum())
otherContext(c)