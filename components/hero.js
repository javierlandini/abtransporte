import Image from "next/image";
import logo from "../public/img/AB-logo-white.png";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.banner}>
        <div>
          <Image src={logo} alt="" width={200} height={200} layout="fixed" />
        </div>
        <h1 className={styles.title}>AB Transporte</h1>
      </div>
      <p className={styles.description}>
        Somos una empresa familiar, que con trabajo y responsabilidad ganamos un
        lugar en el rubro del transporte. Actualmente establecida en Rosario.
        Desde el primer momento demostramos a nuestros clientes la calidad de
        nuestros servicios, cubriendo y adaptándonos a sus necesidades, siendo
        versátiles y competitivos ya que al ser una empresa familiar tenemos la
        ventaja de no tercerizar, brindando una mejor atención.
      </p>
    </section>
  );
}
