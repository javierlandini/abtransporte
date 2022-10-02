import Script from "next/script";
import styles from "./whatsapp.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
export default function Whatsapp() {
  return (
    <>
      <Script id="update-whatsapp-link" strategy="lazyOnload">
        {`
  let url_prefix = "web";
  if (navigator.userAgent.match(/iPhone|Android|webOS|BlackBerry|iPod/i)) {
    url_prefix = "api";
  }
  let wa_link = 'https://' + url_prefix + '.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WA_NUMBER}&text=De%20abtransporte.com:%20Hola!%20Quer%C3%ADa%20consultarte%20sobre%20el%20servicio%20de%20transporte.';
  document.getElementById('whatsapp-link').href = wa_link;
  `}
      </Script>
      <div className={styles.whatsappContact}>
        <a
          id="whatsapp-link"
          href={`https://web.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WA_NUMBER}&text=De%20abtransporte.com:%20Hola!%20Quer%C3%ADa%20consultarte%20sobre%20el%20servicio%20de%20transporte.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactanos por WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>
    </>
  );
}
