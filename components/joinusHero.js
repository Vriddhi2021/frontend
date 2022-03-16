import bgHero from '../public/register.png';
import styles from '../styles/TournamentHead.module.css';

const joinusHero = () => {
  return (
    <section className={styles.hero} style={{backgroundImage: bgHero.src}}>
    <div className='d-flex justify-content-center align-items-center' style={{height: "100%"}}>
    <div className='col-11 col-md-10 mx-auto'>
        <div className={styles.hero__layout} style={{alignItems: "center !important"}}>
            <h1 className="heroText glitch layersText text-white text-center text-uppercase" data-text="JOIN US" style={{fontSize: "78px", textAlign: "left !important"}}><span>Join us</span></h1>
        </div>
        </div>
        </div>
    </section>
  )
}

export default joinusHero