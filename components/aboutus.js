import styles from '../styles/TournamentHead.module.css';
import compstyles from '../styles/about.module.css';

const aboutus = () => {
  return (
    <>
       <section className='text-center text-white p-5 display-1' style ={{flex: "1",display:"flex" ,height: "100%",alignItems: "center",
        justifyContent: "center",flexDirection : "row"}}>
        <div className='LeftImagePart' style={{paddingLeft:"100px"}}>
          <img src='https://as2.ftcdn.net/v2/jpg/01/17/16/11/1000_F_117161164_mBhUQUTj1vXMJYlBLVBnwgaoeNihNv00.jpg' alt='image' style ={{borderRadius : "50%",height:"300px",width:"300px"}}/>
        </div>
        <div className='RightTextPart' style={{paddingLeft:"100px",textAlign:"left"}}> 
          <div  className={styles.hero__layout}>
                  <h2 className={styles.header}>About Vriddhi</h2>
                  <h3 className={styles.header__main}>Mauris semper nulla est, nulla est, sollicitudin et faucibus integer.Lorem ipsu</h3>
                  <p className={styles.hero__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris semper nulla est, sollicitudin et faucibus integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris semper nulla est, sollicitudin et faucibus integer.Mauris semper nulla est, sollicitudin et faucibus integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris semper nulla est, sollicitudin et faucibus integer.Mauris semper nulla est, sollicitudin et faucibus integer.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Mauris semper nulla est, sollicitudin et faucibus integer.
                  </p>
              </div>
        </div>
    </section>

    <section className={compstyles.counters} style ={{flex: "1",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",flexDirection: "column"
	}}>

			<div className={compstyles.container}>
				<div>
					<div className={compstyles.counter}>1500</div>
					<h3>Participants</h3>
				</div>
				<div>
					<div className={compstyles.counter}>15+</div>
					<h3>Events</h3>
				</div>
				<div>
					<div className={compstyles.counter}>2000</div>
					<h3>Followers</h3>
				</div>
				<div>
					<div className={compstyles.counter}>200</div>
					<h3>Visits</h3>
				</div>
			</div>
      
		</section>
    </>
   


  )
}

export default aboutus