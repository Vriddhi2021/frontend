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
              <div className="col-12 col-md-6 text-white mx-auto d-flex justify-content-center align-items-center">
                <div className="aboutUsContent">
                <h4>About Vriddhi</h4>
                <h1>Vriddhi&apos;2021</h1>
                <p className="text-justify">We, at the National Institute of Technology, Rourkela, feel thrilled to announce the much-awaited next edition of our very own SPORTS fest, VRIDDHI,2021. <br/>Initiated in 2017-2018, VRIDDHI continues to carry on its motto to incite enthusiasm and sportsmanship among the contenders. It has gained national stature and established its niche as one of the largest SPORTS fests in EASTERN INDIA.<br/><br/> With the unprecedented outbreak of the novel coronavirus, VRIDDHI this year has gone online. Still, the fun and grandeur of the fest remain the same. The power-packed fest welcomes its viewers to dive into the world of E-SPORTS and have the time of their lives and embrace the gamer in them by featuring major E-SPORTS tournaments and events such as Bgmi, VALORANT, CHESS, and many more; the jazzy event will take place right on your screens.</p>
                </div>
              </div>
            </div>
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

    </>
   


  )
}

export default Aboutus