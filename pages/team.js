import Card from '../components/Card';
import Navbar from '../components/Navbar';
import bgHero from '../public/gellery.png';
import Hero from '../components/hero';
import TrendingVideo from '../components/trendingVideo';
import Grid from '@mui/material/Grid';
import Footer from '../components/footer';


const team = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Our Team"
        img={bgHero.src}
      />
      <TrendingVideo />
      <section>
        <div className="row">
          <div className="col-11 col-md-10 mx-auto">
            <div className="row">
            <Card/><Card/><Card/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default team;