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
        <title>Vriddhi NITR- E-sports Fest</title>

        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>

        {/* *********** Meta SEO***********  */}
        <meta property="og:title" content="Vriddhi'21, E-sports is a place for all of you, so don't hold back. Embrace the gamer in you as you will have the most fantastic time during Vriddhi 2021 this year" />
        <meta name="keywords"  content="vriddhinitr,vriddhinitrkl,vriddhinitrourkela, vriddhi, fest nitr, fest, festnitr, festnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,esports fest,esports" />
        <meta name="description" content="Official Website of Vriddhi NIT Rourkela" />
        
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vriddhinitr.com/" />
        <meta property="og:image" content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png" />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" /> <meta name="description" content="Vriddhi 2021" />
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
