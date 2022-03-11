import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>Vriddhi 2021</title>
        <meta name="description" content="Vriddhi 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Vriddhi 2021</a>
        </h1>
      </main>

      <Footer />
    </div>
  );
}
