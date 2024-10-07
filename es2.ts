// dato un numero scrivere un algoritmo che ne riproduca la sua rappresentazione in lettere
// Esempio:
// input = 123 -> output = centoventitre
//
const translate = (n: number): string => {
    // converte i numeri da 1 a 20
    const translate10 = (n: number): string => {
        const u = ["", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove", "dieci",
            "undici", "dodici", "tredici", "quattordici", "quindici", "sedici", "diciassette", "diciotto", "diciannove"
        ]
        return u[n]
    }
    // converte i numeri da 20 a 99
    const translate100 = (n: number): string => {
        if (n < 20) return translate10(n)
        const d = ["venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"]
        return d[Math.floor(n / 10) - 2] + translate10(n % 10)
    }
    // converte i numeri da 100 a 999
    const translate1000 = (n: number): string => {
        if (n < 100) return translate100(n)
        const t = Math.floor(n / 100)
        return (t == 1 ? "cento" : translate100(t) + "cento") + translate100(n % 100)
    }
    // converte i numeri da 1000 a 1000000
    const translate1000000 = (n: number): string => {
        if (n < 1000) return translate1000(n)
        const h = Math.floor(n / 1000)
        return (h == 1 ? "mille" : translate100(h) + "mila") + translate1000(n % 1000)
    }

    if (n == 0) return "zero"
    if (n < 0) return "meno " + translate(-n)
    if (n > 999999)
        return "out of range"
    return translate1000000(n)
}
for (let i = -10; i < 20000; i += 13) { console.log(i, translate(i)) }