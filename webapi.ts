import express from 'express'
import cors from 'cors'
import { FiscalCodeService, PersonalData, Gender } from './fiscalcodeservice'
import { CitiesRepository } from './citiesrepository'

const app = express()
const repo = new CitiesRepository()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const router = express.Router()
router.get('/provinces', (req, res) => {
    return res.status(200).json(repo.Provinces)
})
router.get('/cities/:prov', (req, res) => {
    const { prov } = req.params
    let c = repo.Cities.filter(c => c.prov == prov.toString().toUpperCase())
    return res.status(200).json(c)
})

router.post('/fiscalcode', (req, res) => {
    const service = new FiscalCodeService()
    const data = req.body
    const pd = new PersonalData(data.firstName, data.lastName, new Date(data.birthday), data.gender, data.birthCity, data.birthProvince)
    return res.status(200).json({ 'fiscalCode': service.generateFiscalCode(pd) })
})

app.use('/api', router)
const port = 8888

app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})