import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import bgHero from '../public/gellery.png';
import Head from "next/head";
import TrendingVideo from '../components/trendingVideo';
import Hero from '../components/hero';
import GalleryImg from "../components/GalleryImg";

const gallery = () => {
  return (
     <>
     <Head>
        <title>Vriddhi - Gallery</title>

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
     <Navbar/>
     <Hero
        title="gallery"
        img={bgHero.src}
     />
    <TrendingVideo/>
    <section>
    <GalleryImg/>
    </section>
    <Footer/>
     </>
  )
}

export default gallery