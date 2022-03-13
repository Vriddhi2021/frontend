import Footer from '../components/footer';
import Hero from '../components/hero';
import Navbar from '../components/Navbar';
import bgHero from '../public/Tournament.png';
import TrendingVideo from '../components/trendingVideo';
import AppCarousel from '../components/AppCarousel';
import TournamentEvents from '../components/tournamentEvents';

function tournaments() {
  return (
    <>  
        <Navbar/>
        <Hero
             title="Tournament"
             img={bgHero.src}
        />
        <TrendingVideo/>
        <AppCarousel/>
        <section style={{background: "#1D023E"}}>
          <h1 className='text-center text-white py-5'>Tournaments</h1>
          <TournamentEvents/>
        </section>
        <Footer/>
    </>
  )
}

export default tournaments