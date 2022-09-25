import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Whatsapp from "../components/whatsapp";
import Servicios from "../components/servicios";
import Contacto from "../components/contacto";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Fletes, mudanzas, logística y distribución en Rosario | AB Transporte
        </title>
        <meta
          name="description"
          content="Servicios de fletes, mudanzas, logística y distribución desde Rosario a cualquier punto del país y viceversa, las 24 hs del día."
          key="description"
        />
        <meta property="og:title" content="AB Transporte" key="ogTitle" />
        <meta
          property="og:description"
          content="Servicios de fletes, mudanzas, logística y distribución desde Rosario a cualquier punto del país y viceversa, las 24 hs del día."
          key="ogDescription"
        />
        <meta
          property="og:image"
          content={`https://${process.env.NEXT_PUBLIC_VERCEL_URL}/img/AB-logo-blue.jpg`}
          key="ogImage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Whatsapp />
        <Navigation />
        <Hero />
        <Servicios />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}
