import styles from '../styles/TournamentHead.module.css';
import compstyles from '../styles/about.module.css';
import aboutImg from '../public/esports.png';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import bg from '../public/bg2.png';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import TrendingVideo from '../components/trendingVideo';

const Aboutus = () => {
  return (
    <>
    <section className='py-5 aboutUsPage' style={{backgroundImage: `url(${bg.src})`, backgroundPosition: "bottom", backgroundSize: "cover"}}>
        <div className="row my-5 mx-auto">
          <div className="col-11 col-md-10 mx-auto">
            <div className="row">
              <div className="col-12 col-md-6 mx-auto">
              <img src={aboutImg.src} alt='image' style={{borderRadius : "20px",height:"100%",width:"100%"}}/>
              </div>
        </div>
    </section>
    <section className='text-white aboutCountUp my-5 py-5'>
      <div className="row mx-auto">
        <div className="col-11 col-md-10 mx-auto">
          <div className="row">
            <div className="col-10 col-md-8 mx-auto">
              <div className="row mx-auto">
                <div className="col-12 col-md-4 mx-auto text-center py-3">
                  <SportsEsportsIcon className='aboutCountUpIcon'/>
                  <p className='display-4'><strong><CountUp suffix="+" end={25} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></strong></p>
                  <h1>Number of Events</h1>
                </div>
                <div className="col-12 col-md-4 mx-auto text-center py-3">
                <FacebookIcon className='aboutCountUpIcon'/>
                  <p className='display-4'><strong><CountUp suffix="+" end={900} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp></strong></p>
                  <h1>Number of Likes</h1>
                </div>
                <div className="col-12 col-md-4 mx-auto text-center py-3">
                <InstagramIcon className='aboutCountUpIcon'/>
                  <p className='display-4'><strong>

                  <CountUp suffix="+" end={1850} redraw={true}>
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
    </CountUp>

                  </strong></p>
                  <h1>Number of Followers</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
    <TrendingVideo />
    </section>

<<<<<<< HEAD
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
=======
>>>>>>> a6d9bcdf47db236e47efef31c8f1f0d9bed40d5e
    </>
   


  )
}

export default aboutus