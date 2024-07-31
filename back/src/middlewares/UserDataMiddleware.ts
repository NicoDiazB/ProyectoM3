import { NextFunction, Request, Response } from "express"
import IUserDto from "../dto/UserDto";
import { CredencialModel, UserModel } from "../config/data-source";

export const validateUserData = async (req: Request, res: Response, next: NextFunction) => {
    const userData: IUserDto = req.body;
    const requiredFields = ["name", "email", "birthday", "dni", "username", "password"];
    const missingFields = requiredFields.filter(field => !(field in userData));

    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Faltan datos en el body: ${missingFields.join(', ')}` });
    }
    if(!userData.birthday || !userData.dni || !userData.email ||!userData.name || !userData.username || !userData.password){
        return res.status(400).json({message: "Faltan campos por llenar"})
    }
    const comparadorDni = await UserModel.findOne({where: {dni: userData.dni }})
    if(comparadorDni){
        return res.status(400).json({message: "Dni ya existente"})
    }
    const comparadorEmail = await UserModel.findOne({where: {email: userData.email}})
    if(comparadorEmail){
        return res.status(400).json({message: "Email ya existente"})
    }
    const comparadorUserName = await CredencialModel.findOne({where: {username: userData.username}})
    if(comparadorUserName){
        return res.status(400).json({message: "Username ya existente"})
    }
   
    next();   
};
