import Head from 'next/head'

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
        <title>AB Transporte</title>
        <meta name="description" content="Generated by create next app" />
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
