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
exports.cancelAppointmetsServices = exports.postAppointmetsServices = exports.getAppointmetsByIdServices = exports.getAppointmetsServices = void 0;
const data_source_1 = require("../config/data-source");
const IAppointment_1 = require("../interfaces/IAppointment");
const getAppointmetsServices = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield data_source_1.AppointmentModel.find({ relations: ["user"] });
        return appointments;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getAppointmetsServices = getAppointmetsServices;
const getAppointmetsByIdServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appoiment = yield data_source_1.AppointmentModel.findOneBy({
            id,
        });
        if (!appoiment) {
            throw new Error("Turno no encontrado");
        }
        return appoiment;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.getAppointmetsByIdServices = getAppointmetsByIdServices;
const postAppointmetsServices = (userAppointment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAppointment = data_source_1.AppointmentModel.create(userAppointment);
        yield data_source_1.AppointmentModel.save(newAppointment);
        const user = yield data_source_1.UserModel.findOneBy({
            id: userAppointment.userId,
        });
        if (user) {
            newAppointment.user = user;
            yield data_source_1.AppointmentModel.save(newAppointment);
        }
        return newAppointment;
    }
    catch (error) {
        throw new Error(error);
    }
});
exports.postAppointmetsServices = postAppointmetsServices;
const cancelAppointmetsServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield data_source_1.AppointmentModel.update(id, {
            status: IAppointment_1.Status.CANCELED,
        });
    }
    catch (error) {
        throw new Error("la promesa se rompio en service" + error);
    }
});
exports.cancelAppointmetsServices = cancelAppointmetsServices;
