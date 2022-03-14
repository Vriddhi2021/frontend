// import { makeStyles } from '@mui/styles';
// import {Typography ,Button} from '@mui/material';
import styles from '../styles/TournamentHead.module.css';

function TournamentHead(){
    return(
        <section className={styles.hero}>
        <div className='d-flex justify-content-center align-items-center' style={{height: "100%"}}>
        <div className='col-11 col-md-10 mx-auto'>
            <div  className={styles.hero__layout}>
                <h2 className={styles.header}>E-Sports Fest</h2>
                <h1 className={styles.header__main}><p className='text-uppercase heroText glitch layersText' style={{fontSize: "48px", letterSpacing: "0"}} data-text="TOURNAMENTS"><span>vriddhi'2021</span></p></h1>
                <p className={styles.hero__text}>E-sports is a place for all of you, so don’t hold back. Embrace the gamer in you as you will have the most fantastic time during Vriddhi 2021 this year.</p>
                {/* <button className={styles.btn}>
                    Register Now
                </button> */}
                <a className={styles.coolBeans} href="#">Register Now</a>
            </div>
            </div>
            </div>
            <div className={styles.hero__icons}>
                <img className={styles.pngs} src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-icon-flat-style-png-4.png"  alt="flipkart image" />
                <img className={styles.pngs} src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"  alt="flipkart image" />
                <img className={styles.pngs} src="https://www.freepnglogos.com/uploads/flipkart-logo-png/flipkart-logo-icon-flat-style-png-4.png"  alt="flipkart image" />
                <img className={styles.pngs} src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"  alt="flipkart image" />  
            </div>
        </section>
    );
    
}

// sx={{backgroundColor:"#a81eed",
//                          borderRadius:40,
//                         textTransform:"none",
//                         }
export default TournamentHead;


