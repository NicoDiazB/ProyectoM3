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
exports.loginUserService = exports.getUserByIdService = exports.createuserService = exports.getusersService = void 0;
const credencialService_1 = require("./credencialService");
const data_source_1 = require("../config/data-source");
const getusersService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersDb = yield data_source_1.UserModel.find({
            relations: ["appointments", "credencial"],
        });
        return usersDb;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getusersService = getusersService;
const createuserService = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentialId = yield (0, credencialService_1.generateCredencial)({
            username: userData.username,
            password: userData.password,
        });
        const newUser = data_source_1.UserModel.create({
            name: userData.name,
            email: userData.email,
            birthday: userData.birthday,
            dni: userData.dni,
            credencial: credentialId,
        });
        yield data_source_1.UserModel.save(newUser);
        return newUser;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.createuserService = createuserService;
let ejemplo = "algo";
const getUserByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = data_source_1.UserModel.findOne({
            where: { id: id },
            relations: ["appointments", "credencial"],
        });
        return user;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getUserByIdService = getUserByIdService;
const loginUserService = (credencial) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credencialId = yield (0, credencialService_1.checkCredencial)(credencial);
        const credencialUser = yield data_source_1.UserModel.findOne({
            where: { id: credencialId },
            relations: ["appointments"],
        });
        return credencialUser;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.loginUserService = loginUserService;
