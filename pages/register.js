import Navbar from '../components/Navbar';
import bgHero from '../public/register.png';
import Hero from '../components/hero';
import Footer from '../components/footer';
import RegisterUser from '../components/registerUser';

const register = () => {
  return (
    <>
        <Navbar/>
        <Hero
            title="Join us"
            img={bgHero.src}
        />
        <RegisterUser/>
        <Footer/>
    </>
  )
}

export default register