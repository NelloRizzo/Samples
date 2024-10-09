"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fiscalcodeservice_1 = require("./fiscalcodeservice");
const citiesrepository_1 = require("./citiesrepository");
const app = (0, express_1.default)();
const repo = new citiesrepository_1.CitiesRepository();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const router = express_1.default.Router();
router.get('/provinces', (req, res) => {
    return res.status(200).json(repo.Provinces);
});
router.get('/cities/:prov', (req, res) => {
    const { prov } = req.params;
    let c = repo.Cities.filter(c => c.prov == prov.toString().toUpperCase());
    return res.status(200).json(c);
});
router.post('/fiscalcode', (req, res) => {
    const service = new fiscalcodeservice_1.FiscalCodeService();
    const data = req.body;
    const pd = new fiscalcodeservice_1.PersonalData(data.firstName, data.lastName, new Date(data.birthday), data.gender, data.birthCity, data.birthProvince);
    return res.status(200).json({ 'fiscalCode': service.generateFiscalCode(pd) });
});
app.use('/api', router);
const port = 8888;
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
