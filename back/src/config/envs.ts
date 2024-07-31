
import dotenv from "dotenv";
dotenv.config({path: "./src/config/.env"})

 const PORT = Number(process.env.PORT) || 3001
 const BD_TYPE=  process.env.BD_TYPE || "postgres"
 const BD_HOST= process.env.BD_HOST || "localhost"
 const BD_PORT= Number(process.env.BD_PORT) || 5432 
 const BD_USERNAME= process.env.BD_USERNAME || "test"
 const BD_PASSWORD= process.env.BD_PASSWORD || "test"
 const BD_NAME= process.env.BD_NAME || "test"


 export {
    PORT,
    BD_TYPE,
    BD_HOST,
    BD_PORT,
    BD_USERNAME,
    BD_PASSWORD,
    BD_NAME
 }