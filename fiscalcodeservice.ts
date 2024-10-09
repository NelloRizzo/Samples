import { CitiesRepository } from "./citiesrepository"

const repo = new CitiesRepository()

export enum Gender { Male = 0, Female = 40 }
export class PersonalData {
    constructor(
        public firstName: string,
        public lastName: string,
        public birthday: Date,
        public gender: Gender,
        public birthCity: string,
        public birthProvince?: string) { }
}
export class FiscalCodeService {
    private separateLetters = (s: string): [string, string] => {
        let letters = { 'consonants': '', 'vowels': '' }
        Array.from(s.toUpperCase()).forEach(l => {
            if (l >= 'A' && l <= 'Z')
                if (l == 'A' || l == 'E' || l == 'I' || l == 'O' || l == 'U')
                    letters.vowels += l
                else
                    letters.consonants += l
        })
        return [letters.consonants, letters.vowels]
    }
    private handleFirstName = (fn: string): string => { const [c, v] = this.separateLetters(fn); return (c + v + 'XXX').substring(0, 3) }
    private handleLastName = (ln: string): string => {
        let [c, v] = this.separateLetters(ln);
        if (c.length > 3) c = c[0] + c.substring(2)
        return (c + v + 'XXX').substring(0, 3)
    }
    private handleBirthday = (bd: Date, g: Gender): string => {
        const day = ("00" + (bd.getDate() + 1 * g)).slice(-2)
        const year = ("00" + bd.getFullYear()).slice(-2)
        const month = "ABCDEHLMPRST"[bd.getMonth()]
        return year + month + day
    }
    private handleBirthCity = (city: string, prov?: string): string => {
        return repo.Cities.find(c => c.name == city && (prov == null || c.prov == prov))?.code ?? "X000"
    }

    private calculateCheckCode = (fc: string): string => {
        const isDigit = (c: string[1]) => c >= '0' && c <= '9'
        const ZERO = '0'.charCodeAt(0)
        const A = 'A'.charCodeAt(0)
        const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        const odds = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
        let sum: number = 0
        Array.from(fc).forEach((c, i) => {
            let depl = isDigit(c) ? c.charCodeAt(0) - ZERO : c.charCodeAt(0) - A
            sum += i % 2 == 0 ? odds[depl] : depl
        })
        return ALPHABET[sum % 26]
    }

    public generateFiscalCode = (data: PersonalData): string => {
        const fc =
            this.handleLastName(data.lastName) +
            this.handleFirstName(data.firstName) +
            this.handleBirthday(data.birthday, data.gender) +
            this.handleBirthCity(data.birthCity, data.birthProvince)
        return fc + this.calculateCheckCode(fc)
    }
}