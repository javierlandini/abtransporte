import Form from "./form";
import styles from "../styles/Home.module.css";
import moduleStyles from "./contacto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

export default function Contacto() {
  return (
    <section id="contacto" className={moduleStyles.contacto}>
      <main className={styles.main}>
        <h2 className={moduleStyles.title}>Contacto</h2>
        <div className={moduleStyles.cards}>
          <div className={moduleStyles.card}>
            <div className={moduleStyles.icon}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <h4>Teléfono</h4>
            <p>{process.env.NEXT_PUBLIC_WA_NUMBER}</p>
            <mark>(respondemos llamadas y WhatsApp)</mark>
          </div>
          <div className={moduleStyles.card}>
            <div className={moduleStyles.icon}>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h4>Horarios de atención</h4>
            <p>Lunes a sábados de 06:30hs a 19:00hs</p>
            <mark>(Consultar por excepciones)</mark>
          </div>
          <div className={moduleStyles.card}>
            <div className={moduleStyles.icon}>
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <h4>Zona de cobertura</h4>
            <p>Viajes locales y a todo el país</p>
          </div>
        </div>
        <Form />
      </main>
    </section>
  );
}
