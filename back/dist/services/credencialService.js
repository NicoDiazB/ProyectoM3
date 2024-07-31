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
exports.checkCredencial = exports.generateCredencial = void 0;
const data_source_1 = require("../config/data-source");
const bcrypt_1 = require("../utils/bcrypt");
function generateCredencial(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password, }) {
        try {
            const hash = (0, bcrypt_1.encryptPassword)(password);
            const credencial = yield data_source_1.CredencialModel.create({
                username,
                password: hash,
            });
            yield data_source_1.CredencialModel.save(credencial);
            return credencial.id;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.generateCredencial = generateCredencial;
function checkCredencial(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, password, }) {
        try {
            const credencial = yield data_source_1.CredencialModel.findOne({
                where: { username },
                select: ["id", "password"],
            });
            if (!credencial)
                throw "User not found";
            const isValid = (0, bcrypt_1.comparePassword)(password, credencial.password);
            if (!isValid) {
                throw new Error("credenciales invalidas");
            }
            return credencial.id;
        }
        catch (error) {
            throw new Error(error);
        }
    });
}
exports.checkCredencial = checkCredencial;
