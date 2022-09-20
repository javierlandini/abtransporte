import Navigation from "./navigation";
import Form from "./form";
import Footer from "./footer";
import Whatsapp from "./whatsapp";
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
            <h3>Teléfono (respondemos llamadas y WhatsApp)</h3>
            <p>+54 9 341 5118786</p>
          </div>
          <div className={moduleStyles.card}>
            <div className={moduleStyles.icon}>
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h3>Horarios de atención</h3>
            <p>Lunes a viernes de 07:00hs a 19:00hs</p>
            <p>(Consultar por excepciones)</p>
          </div>
          <div className={moduleStyles.card}>
            <div className={moduleStyles.icon}>
              <FontAwesomeIcon icon={faMapMarker} />
            </div>
            <h3>Zona de cobertura</h3>
            <p>Viajes a todo el país</p>
          </div>
        </div>
        <Form />
      </main>
    </section>
  );
}
