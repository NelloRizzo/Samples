// strutturare un contesto applicativo che
// simuli l'estrazione dei numeri della tombola
class NumbersBag {
    private bag: Array<number>
    public drawn: Array<number>

    get empty() { return this.bag.length == 0 }

    constructor(private totalNumbers: number = 90) {
        this.bag = Array.from({ length: totalNumbers }, (_, index) => index + 1)
        this.drawn = []
    }

    shuffle = () => { this.bag.sort(() => Math.random() - .5) }

    draw = () => {
        if (this.empty) throw { 'error': { 'message': 'Bag is empty' } }
        const n: number = this.bag.shift()!
        this.drawn.push(n)
        return n
    }
}

{
    console.log("Test estrazione")
    const bag = new NumbersBag(10)
    while (!bag.empty) console.log(bag.draw())
    console.log("Sequenza di estrazione:", bag.drawn)
}
{
    console.log("Test di estrazione casuale")
    const bag = new NumbersBag()
    bag.shuffle()
    while (!bag.empty) console.log(bag.draw())
    console.log("Sequenza di estrazione:", bag.drawn)
}