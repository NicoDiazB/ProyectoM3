"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserData = void 0;
const data_source_1 = require("../config/data-source");
const validateUserData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const requiredFields = ["name", "email", "birthday", "dni", "username", "password"];
    const missingFields = requiredFields.filter(field => !(field in userData));
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Faltan datos en el body: ${missingFields.join(', ')}` });
    }
    if (!userData.birthday || !userData.dni || !userData.email || !userData.name || !userData.username || !userData.password) {
        return res.status(400).json({ message: "Faltan campos por llenar" });
    }
    const comparadorDni = yield data_source_1.UserModel.findOne({ where: { dni: userData.dni } });
    if (comparadorDni) {
        return res.status(400).json({ message: "Dni ya existente" });
    }
    const comparadorEmail = yield data_source_1.UserModel.findOne({ where: { email: userData.email } });
    if (comparadorEmail) {
        return res.status(400).json({ message: "Email ya existente" });
    }
    const comparadorUserName = yield data_source_1.CredencialModel.findOne({ where: { username: userData.username } });
    if (comparadorUserName) {
        return res.status(400).json({ message: "Username ya existente" });
    }
    next();
});
exports.validateUserData = validateUserData;
