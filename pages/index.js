import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vriddhi 2021</title>
        <meta name="description" content="Vriddhi 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Vriddhi 2021</a>
        </h1>
      </main>
    </div>
  )
}
