{
    const a = [43, 23, 67, 54689, 690, 453, 57869, 14, 5689, 9606, 6069]
    // dato un array di numeri sommare tutti gli elementi di posizione pari
    // e tutti gli elementi di posizione dispari

    // dato un array di numeri sommare tutti i numeri pari e tutti i numeri dispari
    function handleArray(numbers: number[]) {
        let sumep: number = 0
        let sumop: number = 0
        let sume: number = 0
        let sumo: number = 0
        for (let i = 0; i < numbers.length; i++) {
            const ep: boolean = i % 2 == 0
            const en: boolean = numbers[i] % 2 == 0
            if (ep) {
                sumep += numbers[i]
            }
            else {
                sumop += numbers[i]
            }
            if (en) {
                sume += numbers[i]
            }
            else {
                sumo += numbers[i]
            }
        }
        console.log("Somma numeri posizione pari", sumep)
        console.log("Somma numeri posizione dispari", sumop)
        console.log("Somma numeri pari", sume)
        console.log("Somma numeri dispari", sumo)
    }

    handleArray(a)

    console.log("Somma numeri posizione pari",
        a.reduce((s, v, p) => p % 2 == 0 ? v + s : s, 0)
    )
    console.log("Somma numeri posizione dispari",
        a.reduce((s, v, p) => p % 2 != 0 ? v + s : s, 0)
    )
    console.log("Somma numeri pari",
        a.reduce((s, v) => v % 2 == 0 ? v + s : s, 0)
    )
    console.log("Somma numeri dispari",
        a.reduce((s, v) => v % 2 != 0 ? v + s : s, 0)
    )
    const [pari, dispari] = a.reduce((s, v) => v % 2 == 0 ? [s[0] + v, s[1]] : [s[0], s[1] + v], [0, 0])

    console.log("Test:", pari, dispari)

    a
        .map(n => [n, n * n])
        .filter((v, i) => i % 2 == 0)
        .forEach(n => console.log(n))
}