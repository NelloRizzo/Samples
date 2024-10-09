"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FiscalCodeService = exports.PersonalData = exports.Gender = void 0;
const citiesrepository_1 = require("./citiesrepository");
const repo = new citiesrepository_1.CitiesRepository();
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 40] = "Female";
})(Gender || (exports.Gender = Gender = {}));
class PersonalData {
    constructor(firstName, lastName, birthday, gender, birthCity, birthProvince) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.gender = gender;
        this.birthCity = birthCity;
        this.birthProvince = birthProvince;
    }
}
exports.PersonalData = PersonalData;
class FiscalCodeService {
    constructor() {
        this.separateLetters = (s) => {
            let letters = { 'consonants': '', 'vowels': '' };
            Array.from(s.toUpperCase()).forEach(l => {
                if (l >= 'A' && l <= 'Z')
                    if (l == 'A' || l == 'E' || l == 'I' || l == 'O' || l == 'U')
                        letters.vowels += l;
                    else
                        letters.consonants += l;
            });
            return [letters.consonants, letters.vowels];
        };
        this.handleFirstName = (fn) => { const [c, v] = this.separateLetters(fn); return (c + v + 'XXX').substring(0, 3); };
        this.handleLastName = (ln) => {
            let [c, v] = this.separateLetters(ln);
            if (c.length > 3)
                c = c[0] + c.substring(2);
            return (c + v + 'XXX').substring(0, 3);
        };
        this.handleBirthday = (bd, g) => {
            const day = ("00" + (bd.getDate() + 1 * g)).slice(-2);
            const year = ("00" + bd.getFullYear()).slice(-2);
            const month = "ABCDEHLMPRST"[bd.getMonth()];
            return year + month + day;
        };
        this.handleBirthCity = (city, prov) => {
            var _a, _b;
            return (_b = (_a = repo.Cities.find(c => c.name == city && (prov == null || c.prov == prov))) === null || _a === void 0 ? void 0 : _a.code) !== null && _b !== void 0 ? _b : "X000";
        };
        this.calculateCheckCode = (fc) => {
            const isDigit = (c) => c >= '0' && c <= '9';
            const ZERO = '0'.charCodeAt(0);
            const A = 'A'.charCodeAt(0);
            const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            const odds = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
            let sum = 0;
            Array.from(fc).forEach((c, i) => {
                let depl = isDigit(c) ? c.charCodeAt(0) - ZERO : c.charCodeAt(0) - A;
                sum += i % 2 == 0 ? odds[depl] : depl;
            });
            return ALPHABET[sum % 26];
        };
        this.generateFiscalCode = (data) => {
            const fc = this.handleLastName(data.lastName) +
                this.handleFirstName(data.firstName) +
                this.handleBirthday(data.birthday, data.gender) +
                this.handleBirthCity(data.birthCity, data.birthProvince);
            return fc + this.calculateCheckCode(fc);
        };
    }
}
exports.FiscalCodeService = FiscalCodeService;
