// gestire la distribuzione di un mazzo di carte da gioco
abstract class GameCard {
    public get seed(): number { return this._seed }
    public abstract get name(): string

    constructor(protected _seed: number, public readonly value: number) { }
}

abstract class Deck<T extends GameCard> {
    protected cards: Array<T> = []
    get empty() { return this.cards.length == 0 }
    get hasMoreCards() { return !this.empty }
    constructor(shuffle: boolean = false) {
        this.initializeDeck()
        if (shuffle) this.shuffle()
    }

    protected abstract initializeDeck(): void
    shuffle = () => this.cards.sort(() => Math.random() - .5)

    deal(): T {
        if (this.empty) throw { 'error': { 'message': 'No more cards' } }
        return this.cards.shift()!
    }
}

enum NeapoleanSeed { Denari, Coppe, Bastoni, Spade }
class NeapoleanCard extends GameCard {
    public get name(): string {
        if (this.value == 7 && this._seed == NeapoleanSeed.Denari) return "Settebello"
        const v =
            this.value == 1 ? "Asso" :
                this.value < 8 ? `${this.value}` :
                    ["Donna", "Cavallo", "Re"][this.value - 8]
        return `${v} di ${NeapoleanSeed[this._seed]}`
    }
    constructor(seed: NeapoleanSeed, value: number) {
        super(seed, value)

        if (value < 1 || value > 10)
            throw {
                'error':
                {
                    'message': `Invalid value ${value}`,
                    'invalidValue': value
                }
            }
    }
}

class NeapoleanDeck extends Deck<NeapoleanCard> {
    protected initializeDeck(): void {
        for (let s = 0; s < 4; ++s) {
            for (let v = 1; v < 11; ++v) {
                this.cards.push(new NeapoleanCard(s, v))
            }
        }
    }

}

var nd = new NeapoleanDeck(false)
while (nd.hasMoreCards) {
    console.log(nd.deal().name)
}
nd.deal()