import fs from 'fs'

export class City {
    constructor(public name: string, public prov: string, public code: string) { }
}

export class CitiesRepository {
    private cities = new Array<City>();

    constructor() {
        const data = fs.readFileSync('./comuni.csv')
        data.toString().split('\n').forEach(line => {
            const parts = line.split(';')
            this.cities.push({ 'name': parts[2], 'prov': parts[0], 'code': parts[6] })
        })
        this.cities.shift()
        console.log('CitiesRepository', `Loaded ${this.cities.length} cities`)
    }

    get Cities() { return this.cities.sort((c, o) => c.name < o.name ? -1 : 1) }

    get Provinces() {
        return [...new Set(this.cities.map(c => c.prov).filter(v => v.length > 0).sort())]
    }
}