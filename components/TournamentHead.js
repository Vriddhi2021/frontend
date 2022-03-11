// import * as React from 'react';
// import { makeStyles } from '@mui/styles';
// import {Typography ,Button} from '@mui/material';
import styles from '../styles/TournamentHead.module.css';

function TournamentHead(props){
    return(
        <section className={styles.hero} >
            <div  className={styles.hero__layout}>
                
                <h2 className={styles.header}>LOREM IPSUM</h2>
                <h1 className={styles.header__main}>TOURNAMENTS</h1>
                
                <p className={styles.hero__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Mauris semper nulla est, sollicitudin et faucibus integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Mauris semper nulla est, sollicitudin et faucibus integer.
                </p>
                {/* <button className={styles.btn}>
                    Register Now
                </button> */}
                <a className={styles.coolBeans} href="#">Register Now</a>
            </div>
            <div className={styles.hero__icons}>
                <img className={styles.pngs} src="images/sponsor-1.png"  alt="flipkart image" />
                <img className={styles.pngs} src="images/sponsor-2.png"  alt="flipkart image" />
                <img className={styles.pngs} src="images/sponsor-3.png"  alt="flipkart image" />
                <img className={styles.pngs} src="images/sponsor-4.png"  alt="flipkart image" />  
            </div>
        </section>
    );
    
}

// sx={{backgroundColor:"#a81eed",
//                          borderRadius:40,
//                         textTransform:"none",
//                         }
export default TournamentHead;


