import Link from "next/link";
import styles from "./servicios.module.css";

export default function Servicios() {
  return (
    <section id="servicios" className={styles.servicios}>
      <h2 className={styles.title}>Servicios</h2>
      <div className={styles.grillaServicios}>
        <div>
          <h3>Fletes y mudanzas</h3>
          <p>
            Un servicio completo, desde la puntualidad hasta el cuidado de sus
            pertenencias son nuestras prioridades. Realizamos mudanzas y fletes
            desde Rosario y Gran Rosario, a cualquier punto del país y
            viceversa.
          </p>
        </div>
        <div>
          <h3>Logística y distribución</h3>
          <p>
            Contamos con personal capacitado y vehículos habilitados para
            transportar todo tipo de cargas (generales, delicadas). Ofrecemos un
            servicio confiable, seguro, responsable y puntual. Realizamos
            descuentos especiales para empresas. Habilitados para efectuar
            viajes a cualquier punto del país. Estamos a su disposición para
            demostrarle la calidad de nuestros servicios.
          </p>
        </div>
      </div>
    </section>
  );
}
