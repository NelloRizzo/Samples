export default class NumbersBag {
    _numbers = Array.from({ length: 90 }, (_, i) => i + 1)

    drawn = () => Array.from({ length: 90 }, (_, i) => i + 1).filter(n => this._numbers.indexOf(n) < 0)

    shuffle = () => this._numbers.sort(() => Math.random() - .5)

    draw = () => this._numbers.shift()
}