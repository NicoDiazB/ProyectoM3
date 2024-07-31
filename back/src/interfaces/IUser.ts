import { IAppointment } from "./IAppointment"
import { ICredencial } from "./ICredential"


interface IUser {
    id?: number,
    name: string,
    email: string,
    birthday: Date,
    dni: number,
    appointments: IAppointment[]
    credencials: ICredencial["id"]
}


export default IUser