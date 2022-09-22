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
            La puntualidad y el cuidado de sus pertenencias son nuestras
            prioridades. Realizamos mudanzas y fletes desde Rosario y Gran
            Rosario, a cualquier punto del país y viceversa.
          </p>
        </div>
        <div>
          <h3>Logística y distribución</h3>
          <p>
            Contamos con personal capacitado y vehículos habilitados para
            transportar cargas generales. Ofrecemos un servicio confiable,
            seguro, responsable y puntual. Realizamos servicios para empresas
            adaptándonos a sus necesidades. Efectuamos viajes a cualquier punto
            del país.
          </p>
        </div>
      </div>
    </section>
  );
}
