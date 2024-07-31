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
exports.cancelAppoinmetsAsync = exports.postAppoinmetsAsync = exports.getAppoinmetsByIdAsync = exports.getAppointmentsAsync = void 0;
const catchAsyc_1 = __importDefault(require("../utils/catchAsyc"));
const appointmentsService_1 = require("../services/appointmentsService");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield (0, appointmentsService_1.getAppointmetsServices)();
    res.status(200).json(appointments);
});
const getAppoinmetsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const appointment = yield (0, appointmentsService_1.getAppointmetsByIdServices)(Number(id));
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ message: "appointment no encontrado" });
    }
});
const postAppoinmets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userAppointment = req.body;
    const newAppointment = yield (0, appointmentsService_1.postAppointmetsServices)(userAppointment);
    res
        .status(200)
        .json({ message: "el turno se creo con exito", newAppointment });
});
const cancelAppoinmets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    yield (0, appointmentsService_1.cancelAppointmetsServices)(Number(id));
    res.status(200).json({ message: "El turno se cancelo con exito" });
});
exports.getAppointmentsAsync = (0, catchAsyc_1.default)(getAppointments);
exports.getAppoinmetsByIdAsync = (0, catchAsyc_1.default)(getAppoinmetsById);
exports.postAppoinmetsAsync = (0, catchAsyc_1.default)(postAppoinmets);
exports.cancelAppoinmetsAsync = (0, catchAsyc_1.default)(cancelAppoinmets);
