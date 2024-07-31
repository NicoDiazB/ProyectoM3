import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";


@Entity({
    name: "credencials"
})
export class Credencial {
    @PrimaryGeneratedColumn({type : "int"})
    id?: number

    @Column({unique: true, type: "varchar", length: 50})
    username: string
//                           puede que esto me rompa el login como lo tengo
    @Column({type: "text", select: false})
    password: string
}