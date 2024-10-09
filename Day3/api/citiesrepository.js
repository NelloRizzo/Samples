"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitiesRepository = exports.City = void 0;
const fs_1 = __importDefault(require("fs"));
class City {
    constructor(name, prov, code) {
        this.name = name;
        this.prov = prov;
        this.code = code;
    }
}
exports.City = City;
class CitiesRepository {
    constructor() {
        this.cities = new Array();
        const data = fs_1.default.readFileSync('./comuni.csv');
        data.toString().split('\n').forEach(line => {
            const parts = line.split(';');
            this.cities.push({ 'name': parts[2], 'prov': parts[0], 'code': parts[6] });
        });
        this.cities.shift();
        console.log('CitiesRepository', `Loaded ${this.cities.length} cities`);
    }
    get Cities() { return this.cities.sort((c, o) => c.name < o.name ? -1 : 1); }
    get Provinces() {
        return [...new Set(this.cities.map(c => c.prov).filter(v => v.length > 0).sort())];
    }
}
exports.CitiesRepository = CitiesRepository;
