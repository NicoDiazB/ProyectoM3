import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
// import { ICredencial } from "../interfaces/ICredential";
import { Credencial } from "./Credencial";
import { Appointment } from "./Appointment";
// import { credencials } from "../db/credencial";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column({ unique: true, type: "varchar", length: 200 })
  email: string;

  @Column({ type: "date" })
  birthday: Date;
  // revisar si se le puede subir el numero maximo de digitos al int
  @Column({ unique: true, type: "int" })
  dni: number;

  @OneToMany(() => Appointment, (appointments) => appointments.user)
  appointments: Appointment[];

  @OneToOne(() => Credencial)
  @JoinColumn({ name: "credencialId" })
  credencial: Credencial["id"];
  //               antes tenia ^ number ^
}
