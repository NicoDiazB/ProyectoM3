import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Status } from "../interfaces/IAppointment";
// import IUser from "../interfaces/IUser";
import { User } from "./User";


@Entity({
    name: "appointments"
})
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "date"})
    date: Date

    @Column({type: "time"})
    time: string
    
    @Column({type: "text"})
    description: string
    
    @Column({type: "enum",enum: Status, default: Status.ACTIVE})
    status: Status
    
    @ManyToOne(()=> User,(user)=> user.appointments)
    user: User
}
