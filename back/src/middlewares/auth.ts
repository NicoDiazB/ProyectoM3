import { NextFunction, Request, Response } from "express"

const auth = (req: Request, res: Response, next: NextFunction)=>{
    const {token} = req.headers;
    console.log(token)
    if(token === "autentificado") next()
    else res.status(400).json({message: "Error falta autentificacion "})
    next()   
}


export default auth