import server from "./server/server"
import { PORT } from "./config/envs";
import "reflect-metadata"
import { AppDataSource } from "./config/data-source";

AppDataSource.initialize()
.then(res =>{
    console.log("Conexcion con la BD");
    server.listen(PORT, ()=>{
        console.log(`server is listenig on port ${PORT}`)
    })    
})