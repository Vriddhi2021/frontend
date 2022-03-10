import Head from 'next/head'
import AppCarousel from '../components/AppCarousel';
import styles from '../styles/Home.module.css'



const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vriddhi 2021</title>
        <meta name="description" content="Vriddhi 2021" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        {/* <h1 className={styles.title}>
          Welcome to <a href="#">Vriddhi 2021</a>
        </h1> */}
        <div className="">
        </div>
      </main>
    </div>
  )
}

export default Home;
