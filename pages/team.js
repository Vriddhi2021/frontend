import Card from '../components/Card';
import Navbar from '../components/Navbar';
import bgHero from '../public/gellery.png';
import Hero from '../components/hero';
import TrendingVideo from '../components/trendingVideo';
import Footer from '../components/footer';


const team = () => {
  return (
    <>
     <Navbar/>
     <Hero
        title="Our Team"
        img={bgHero.src}
     />
    <TrendingVideo/>
    <section>
    <section>
    <Card/>
    <Card/>
    <Card/>
    </section>
    </section>
    <Footer/>
     </>
  )
}

export default team