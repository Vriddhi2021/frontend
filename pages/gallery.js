import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import bgHero from '../public/gellery.png';
import TrendingVideo from '../components/trendingVideo';
import Hero from '../components/hero';
import GalleryImg from "../components/GalleryImg";

const gallery = () => {
  return (
     <>
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