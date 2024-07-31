import React from "react";
import styles from "./ServicesInfo.module.css";
const ServicesInfo = () => {
  return (
    <div className={styles.container}>
      <h1>Alguno de los servicios que tenemos</h1>
      <div>
        <h2>Consulta Médica General</h2>
        <p>
          Consulta médica con un médico general para evaluación y tratamiento de
          enfermedades comunes.
        </p>
      </div>
      <div>
        <h2>Cardiología</h2>
        <p>
          Consulta médica con un cardiólogo para evaluación y tratamiento de
          enfermedades del corazón.
        </p>
      </div>
      <div>
        <h2>Dermatología</h2>
        <p>
          Consulta médica con un dermatólogo para evaluación y tratamiento de
          enfermedades de la piel.
        </p>
      </div>
      <div>
        <h2>Ginecología</h2>
        <p>
          Consulta médica con un ginecólogo para evaluación y tratamiento de
          problemas ginecológicos en mujeres.
        </p>
      </div>
      <div>
        <h2>Pediatría</h2>
        <p>
          Consulta médica con un pediatra para evaluación y tratamiento de
          problemas de salud en niños.
        </p>
      </div>
      <div>
        <h2>Oftalmología</h2>
        <p>
          Consulta médica con un oftalmólogo para evaluación y tratamiento de
          problemas de la vista.
        </p>
      </div>
      <div>
        <h2>Otorrinolaringología</h2>
        <p>
          Consulta médica con un otorrinolaringólogo para evaluación y
          tratamiento de problemas de oídos, nariz y garganta.
        </p>
      </div>
      <div>
        <h2>Neurología</h2>
        <p>
          Consulta médica con un neurólogo para evaluación y tratamiento de
          problemas neurológicos.
        </p>
      </div>
      <div>
        <h2>Psicología</h2>
        <p>
          Consulta con un psicólogo para evaluación y tratamiento de problemas
          emocionales y mentales.
        </p>
      </div>
    </div>
  );
};

export default ServicesInfo;
