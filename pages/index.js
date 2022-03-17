import Head from "next/head";
import AppCarousel from "../components/AppCarousel";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import HeaderTourna from "../components/HeaderTourna";
import BrowseT from '../components/browseT';
import TrendingVideo from '../components/trendingVideo';

const Home = () => {
  return (
    <div className="container-fluid">
      <Head>
        <title>Vriddhi 2021</title>
        <meta name="description" content="Vriddhi 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />

      <main className="">
        {/* <h1 className={styles.title}>
          Welcome to <a href="#">Vriddhi 2021</a>
        </h1> */}
        <div className=""></div>
      </main>
      <HeaderTourna/>
      <AppCarousel />
      <BrowseT/>
      <TrendingVideo/>
      <Footer />
    </div>
  );
};

export default Home;
