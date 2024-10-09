"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fiscalcodeservice_1 = require("./api/fiscalcodeservice");
const s = new fiscalcodeservice_1.FiscalCodeService();
const fc = s.generateFiscalCode(new fiscalcodeservice_1.PersonalData("Aniello", "Rizzo", new Date(1968, 6, 6), fiscalcodeservice_1.Gender.Male, "Vallo della Lucania", "SA"));
console.log(fc);
