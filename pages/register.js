import Navbar from '../components/Navbar';
import bgHero from '../public/register.png';
import Hero from '../components/hero';
import Footer from '../components/footer';
import RegisterUser from '../components/registerUser';
import JoinusHero from '../components/joinusHero';

const register = () => {
  return (
    <>
        <Navbar/>
        <JoinusHero/>
        <RegisterUser/>
        <Footer/>
    </>
  )
}

export default register