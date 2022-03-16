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
                <h1 className={styles.header__main}><p className='text-uppercase heroText glitch layersText' data-text="VRIDDHI'2021" style={{fontSize: "58px !important", lineHeight: "40px !important"}}><span>vriddhi'2021</span></p></h1>
                <p className={styles.hero__text}>E-sports is a place for all of you, so don’t hold back. Embrace the gamer in you as you will have the most fantastic time during Vriddhi 2021 this year.</p>
                {/* <button className={styles.btn}>
                    Register Now
                </button> */}
                <a className={styles.coolBeans} href="#">Register Now</a>
            </div>
            </div>
            </div>
            <div className={styles.hero__icons}>
                <h1 className='text-white display-4 text-uppercase bar'><span className='bar_content'>Welcome to first ever E-sports fest of Eastern India. So don’t hold back and mark the date. 25th - 27th March'2020</span></h1>
            </div>
        </section>
    );
    
}

// sx={{backgroundColor:"#a81eed",
//                          borderRadius:40,
//                         textTransform:"none",
//                         }
export default TournamentHead;


