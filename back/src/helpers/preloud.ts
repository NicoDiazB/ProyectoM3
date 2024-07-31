


const preloadUsers = [
    {
       name: "Rick",
       email: "rick@mail.com",
       birthdate: 20201225, 
       nDni: 45786544,
       username: "rickuser",
       password: "rickpass"
   },
   
{
       name: "Marcos",
       email: "marcos@mail.com",
       birthdate: 20201225, 
       nDni: 12345678,
       username: "marcosuser",
       password: "marcospass"
   },
   {
       name: "Florencia",
       email: "florencia@mail.com",
       birthdate: new Date(1999, 11, 15), 
       nDni: 87654321,
       username: "floruser",
       password: "florpass"
   },
   {
       name: "Lucho",
       email: "lucho@mail.com",
       birthdate: new Date(1976, 2, 1), 
       nDni: 98765432,
       username: "luchouser",
       password: "luchopass"
   }
]

const preloadAppointments = [
   {
       date: new Date(2024, 4, 20), // 20 de mayo de 2024
       time: "08:30", // Representa las 8:30 AM
       description: "Consulta médica",
       userId: 1
   },
   {
       date: new Date(2024, 7, 15), // 15 de agosto de 2024
       time: "14:00", // Representa las 2:00 PM
       description: "Reunión de trabajo",
       userId: 1
   },
   {
       date: new Date(2024, 10, 10), // 10 de noviembre de 2024
       time: "10:30", // Representa las 10:30 AM
       description: "Entrega de proyecto",
       userId: 2
   },
   {
       date: new Date(2025, 0, 5), // 5 de enero de 2025
       time: "15:00", // Representa las 3:00 PM
       description: "Entrevista de trabajo",
       userId: 4
   }
]