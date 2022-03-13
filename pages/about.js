import Footer from '../components/footer';
import Navbar from '../components/Navbar';
import bgHero from '../public/about.png';
import Aboutus from '../components/aboutus';
import Hero from '../components/hero';

const about = () => {
  return (
    <>
        <Navbar/>
        <Hero
             title="About us"
             img={bgHero.src}
        />
        <Aboutus/>
        <Footer/>
    </>
  )
}

export default about