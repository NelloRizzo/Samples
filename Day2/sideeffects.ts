{
    class My1 {
        get value(): number { return this._value }
        constructor(private _value: number) { }
    }
    class My2 {
        get value(): number[] { return this._value }
        constructor(private _value: number[]) { }
    }

    const m1 = new My1(10)
    const m2 = new My2([1, 2, 3, 4, 5])
    console.log(m1)
    console.log(m2)

    let v1 = m1.value
    let v2 = m2.value
    v1 = 5
    v2[3] = 1234
    console.log(m1)
    console.log(m2)
}