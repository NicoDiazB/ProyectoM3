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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginuserAsync = exports.createUserAsync = exports.getUserByIdAsync = exports.getUsersAsync = void 0;
const usersService_1 = require("../services/usersService");
const catchAsyc_1 = __importDefault(require("../utils/catchAsyc"));
const getusers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield (0, usersService_1.getusersService)();
    if (users) {
        res.status(200).json(users);
    }
    else
        res.status(404).json({ message: "usuarios no encontrados" });
});
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield (0, usersService_1.getUserByIdService)(Number(id));
    if (user)
        res.status(200).json(user);
    else
        res.status(404).json({ message: "usuario no encontrado" });
});
const createuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userData = req.body;
    const newUser = yield (0, usersService_1.createuserService)(userData);
    res.status(201).json({ message: `se creo el usuario` });
});
const loginuser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const id = yield (0, usersService_1.loginUserService)({ username, password });
    res.status(200).json({ Login: true, message: `usuario logeado`, id });
});
exports.getUsersAsync = (0, catchAsyc_1.default)(getusers);
exports.getUserByIdAsync = (0, catchAsyc_1.default)(getUserById);
exports.createUserAsync = (0, catchAsyc_1.default)(createuser);
exports.loginuserAsync = (0, catchAsyc_1.default)(loginuser);
