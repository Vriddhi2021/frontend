import * as React from 'react';
import { makeStyles } from '@mui/styles';
import {Typography ,Button} from '@mui/material';
import styles from '../styles/TournamentHead.module.css';


// const useStyles = makeStyles({
//     heading: {
      
//     },
//     center:{
        
//     },
//     display: {
        
//     },
//     btn__hero :`
//         backgroundColor: '#a81eed',
//     `,
//   });

function TournamentHead(props){
    // const classes=useStyles();
    // return (
    //     <div sx={{
    //         background:'red',
    //         }}>
    //         <section >
    //         <Typography variant="h5" className={classes.heading}>LOREM IPSUM</Typography>
    //         <Typography variant="h3" className={classes.heading}>TOURNAMENTS</Typography>
    //         <Typography variant="body1"  component="p" className={classes.heading}>
    //             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
    //             blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
    //             neque doloribus.
    //         </Typography>
    //         <Button className={classes.btn__hero} 
    //                 variant="contained" c >
    //           Register Now
    //         </Button>
    //     </section>
    //     </div>
    // );
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


