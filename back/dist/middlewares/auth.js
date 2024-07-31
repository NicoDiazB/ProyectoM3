"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    const { token } = req.headers;
    console.log(token);
    if (token === "autentificado")
        next();
    else
        res.status(400).json({ message: "Error falta autentificacion " });
    next();
};
exports.default = auth;
