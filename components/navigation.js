import Link from "next/link";
import Script from "next/script";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <>
      <Script id="close-mobile-navigation" strategy="lazyOnload">
        {`
        const links = document.querySelectorAll('.${styles.menu} a');
        const check = document.getElementById('checkbox_toggle');
        links.forEach((link) => {
          link.addEventListener('click', (e) => {
            check.click();
          });
        });
  `}
      </Script>

      <nav className={styles.navbar}>
        <div className={styles.logo}>AB Transporte</div>
        <ul className={styles.navlinks}>
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className={styles.hamburger}>
            &#9776;
          </label>
          <div className={styles.menu}>
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="#servicios">Servicios</Link>
            </li>
            <li>
              <Link href="#contacto">Contacto</Link>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}
