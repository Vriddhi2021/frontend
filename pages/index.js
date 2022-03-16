import Head from "next/head";
import AppCarousel from "../components/AppCarousel";
import BrowseTournament from "../components/BrowseTournament";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import TournamentHead from "../components/tournamentHead";
import BrowseT from '../components/browseT';
import TrendingVideo from '../components/trendingVideo';
import TournamentsFormat from '../components/tournamentsFormat';

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
      <TournamentHead />
      <AppCarousel />
      <BrowseT/>
      <TrendingVideo/>
      <Footer />
    </div>
  );
};

export default Home;
