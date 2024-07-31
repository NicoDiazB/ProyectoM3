import { Router } from "express";
import { createUserAsync, getUserByIdAsync, getUsersAsync, loginuserAsync } from "../controllers/usersController";
import auth from "../middlewares/auth";
import { validateUserData } from "../middlewares/UserDataMiddleware";
import { validateLogin } from "../middlewares/loginMiddleware";

const routesUsers: Router = Router()

routesUsers.get("/" ,getUsersAsync);
routesUsers.get("/:id" , getUserByIdAsync); 
routesUsers.post("/register", validateUserData ,createUserAsync);
routesUsers.post("/login", validateLogin, loginuserAsync );
// routesUsers.delete("/", deleteUser);

export default routesUsers