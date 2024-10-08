{
    class Container {
        private items: any[]
        constructor() {
            this.items = []
        }

        insert = (n: any) => this.items.push(n)

        visit = (f: (i: any) => void) => {
            this.items.forEach(n => f(n))
        }
    }

    class GenericContainer<T> {
        private items: T[]
        constructor() {
            this.items = []
        }

        insert = (n: T) => this.items.push(n)

        visit = (f: (i: T) => void) => {
            this.items.forEach(n => f(n))
        }
    }

    const c = new Container()
    c.insert("Paperino")
    c.insert(10)
    c.insert(new Date())

    c.visit(e => console.log(e))

    const nc = new Container()
    nc.insert(10)
    nc.insert("Paperino")
    nc.insert(20)
    nc.insert(30)
    let sum: number = 0
    nc.visit(e => sum += e)
    console.log(sum)

    const gnc = new GenericContainer<number>()
    gnc.insert(10)
    //gnc.insert("Paperino")
    gnc.insert(20)
    gnc.insert(30)
    let gsum: number = 0
    gnc.visit(e => gsum += e)
    console.log(gsum)

    class Pair<F, S> { constructor(public first: F, public second: S) { } }
    const psn = new Pair<string, number>("Paperino", 10)
    const pns = new Pair<number, string>(10, "Paperino")
    console.log(psn.first, psn.second)
    console.log(pns.first, pns.second)

    const [v1, v2] = ["Paperino", 10]
    console.log(v1)
    console.log(v2)

    class Persona {
        constructor(public firstName: string, public lastName: string, public eta: number) { }
    }

    const archi = new Persona("Archimede", "Pitagorico", 30)
    const { firstName, lastName } = archi
    console.log(firstName)
    console.log(lastName)
    type objType = {
        name: string,
        age: number
    }

    let initialObject =
        { name: 'Author', age: 23, lastName: 'Last' };
    let modifiedObject  =
        { ...initialObject, name: 'First' };

    console.log(modifiedObject);
}