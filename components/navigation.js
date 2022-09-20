import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
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
  );
}
