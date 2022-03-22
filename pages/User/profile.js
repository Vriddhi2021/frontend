import Footer from "../../components/footer"
import Navbar from "../../components/Navbar"
import Hero from '../../components/hero';
import bgHero from '../../public/contactBanner.png';
import UserProfile from "../../components/UserProfile"


const profile = () => {
    return (
        <>
            <Navbar />
            <Hero
                title="Dashboard"
                img={bgHero.src}
                style={{height: "40vh !important"}}
            />
            <UserProfile />
            <Footer />
        </>
    )
}

export default profile