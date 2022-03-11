import Head from 'next/head'
import AppCarousel from '../components/AppCarousel';
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import TournamentHead from '../Components/TournamentHead'



const Home = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>Vriddhi 2021</title>
        <meta name="description" content="Vriddhi 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className=''>
        {/* <h1 className={styles.title}>
          Welcome to <a href="#">Vriddhi 2021</a>
        </h1> */}
        <div className="">
        </div>
      </main>
      <TournamentHead />
      
      <Footer/>
    </div>
  )

export default Home;

