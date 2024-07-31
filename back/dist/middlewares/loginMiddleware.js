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
exports.validateLogin = void 0;
const data_source_1 = require("../config/data-source");
const bcrypt_1 = require("../utils/bcrypt");
const validateLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const credencialData = req.body;
    const requiredFields = ["username", "password"];
    const missingFields = requiredFields.filter((field) => !(field in credencialData));
    if (missingFields.length > 0) {
        return res
            .status(400)
            .json({ error: `Faltan datos en el body: ${missingFields.join(", ")}` });
    }
    if (!credencialData.password || !credencialData.password) {
        return res
            .status(400)
            .json({ mensaje: "Debe proporcionar un usuario y contraseña" });
    }
    const isValidUsername = yield data_source_1.CredencialModel.findOne({
        where: { username: credencialData.username },
    });
    if (!isValidUsername) {
        return res.status(400).json({ mensaje: "Usuario no existente" });
    }
    const credencial = yield data_source_1.CredencialModel.findOne({
        where: { username: credencialData.username },
        select: ["id", "password"],
    });
    if (!credencial) {
        return res.status(404).json({ mensaje: "Las credenciales estan mal" });
    }
    const isValid = (0, bcrypt_1.comparePassword)(credencialData.password, credencial.password);
    if (!isValid) {
        return res.status(400).json({ mensaje: "Las credenciales estan mal" });
    }
    next();
});
exports.validateLogin = validateLogin;
