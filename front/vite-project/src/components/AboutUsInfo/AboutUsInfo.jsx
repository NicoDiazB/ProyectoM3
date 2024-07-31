import React from "react";
import styles from "./AboutUsInfo.module.css";
const AboutUsInfo = () => {
  return (
    <div className={styles.container}>
      <h1>Sobre Nosotros</h1>
      <p>
        Somos una clínica dedicada a brindar servicios médicos de calidad para
        el bienestar de nuestros pacientes.<br></br> Nuestro equipo está
        conformado por médicos especialistas en diversas áreas de la salud,
        comprometidos con ofrecer la mejor atención médica.
      </p>
      <h2>Nuestra Misión</h2>
      <p>
        Nuestra misión es proporcionar atención médica integral y personalizada,
        promoviendo la salud y el bienestar de nuestros pacientes a través de un
        trato humano y profesional.
      </p>
      <h2>Nuestra Visión</h2>
      <p>
        Nuestra visión es ser líderes en servicios de salud, reconocidos por
        nuestra excelencia en el cuidado de nuestros pacientes y por la
        innovación en nuestros tratamientos médicos.
      </p>
      <h2>Nuestros Valores</h2>
      <ul>
        <li>Compromiso con la salud y el bienestar de nuestros pacientes.</li>
        <li>Ética profesional en todos nuestros servicios médicos.</li>
        <li>Trabajo en equipo para ofrecer la mejor atención médica.</li>
        <li>Innovación y mejora continua en nuestros tratamientos médicos.</li>
        <li>Respeto y empatía en nuestra relación con los pacientes.</li>
      </ul>
    </div>
  );
};

export default AboutUsInfo;
