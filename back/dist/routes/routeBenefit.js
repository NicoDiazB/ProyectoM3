"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const benefitController_1 = require("../controllers/benefitController");
const routerBenefit = (0, express_1.Router)();
routerBenefit.get("/", benefitController_1.getAllBenefits);
routerBenefit.get("/:id", benefitController_1.getBenefitById);
exports.default = routerBenefit;
