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
        <section>
          <Grid container spacing={{ xs: 2, md: 6 }} columns={{ xs: 2, sm: 8, md: 12 }} style={{ margin: 'auto', }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card style={{ margin: '16px', }} />
              </Grid>
            ))}
          </Grid>
        </section>
      </section>
      <Footer />
    </>
  )
}

export default team;