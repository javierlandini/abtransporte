import Image from "next/image";
import Script from "next/script";
import styles from "./whatsapp.module.css";
import whatsappImage from "../public/img/WhatsApp_Logo_1.png";

export default function Whatsapp() {
  return (
    <>
      <Script id="update-whatsapp-link" strategy="lazyOnload">
        {`
  let url_prefix = "web";
  if (navigator.userAgent.match(/iPhone|Android|webOS|BlackBerry|iPod/i)) {
    url_prefix = "api";
  }
  let wa_link = 'https://' + url_prefix + '.whatsapp.com/send?phone=+5492613442588&text=De%20abtransporte.com:%20Hola!%20Quer%C3%ADa%20consultarte%20sobre%20el%20servicio%20de%20transporte.';
  document.getElementById('whatsapp-link').href = wa_link;
  `}
      </Script>
      <div className={styles.whatsappContact}>
        <a
          id="whatsapp-link"
          href="https://web.whatsapp.com/send?phone=+5492613442588&text=De%20abtransporte.com:%20Hola!%20Quer%C3%ADa%20consultarte%20sobre%20el%20servicio%20de%20transporte."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactanos por WhatsApp"
        >
          <Image src={whatsappImage} alt="" width={50} height={50} />
        </a>
      </div>
    </>
  );
}
