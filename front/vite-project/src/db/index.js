export const user = {
  id: 1,
  name: "santiago",
  email: "santigo0@gmail.com",
  birthday: "1985-05-05",
  dni: 752750,
  credencials: {
    id: 1,
    username: "santiago",
  },
};

export const appointmentsDb = [
  {
    id: 1,
    date: "2025-05-16",
    time: "10:47:00",
    description: "Consulta mudo",
    status: "ACTIVE",
    userId: {
      id: 1,
      name: "santiago",
      email: "santigo0@gmail.com",
      birthday: "1985-05-05",
      dni: 752750,
    },
  },
  {
    id: 2,
    date: "2024-05-16",
    time: "10:47:00",
    description: "Consulta mudo",
    status: "ACTIVE",
    userId: {
      id: 2,
      name: "nico",
      email: "nico0@gmail.com",
      birthday: "1990-05-05",
      dni: 7527504,
    },
  },
];
