import styles from '../styles/TournamentHead.module.css';
import compstyles from '../styles/about.module.css';
import aboutImg from '../public/esports.png';


const Aboutus = () => {
  return (
    <>
    <section className='my-5 aboutUsPage'>
        <div className="row my-5 mx-auto">
          <div className="col-11 col-md-10 mx-auto">
            <div className="row">
              <div className="col-12 col-md-6 mx-auto">
              <img src={aboutImg.src} alt='image' style={{borderRadius : "20px",height:"100%",width:"100%"}}/>
              </div>
              <div className="col-12 col-md-6 text-white mx-auto d-flex justify-content-center align-items-center">
                <div className="aboutUsContent">
                <h4>About Vriddhi</h4>
                <h1>Vriddhi'2021</h1>
                <p className="text-justify">We, at the National Institute of Technology, Rourkela, feel thrilled to announce the much-awaited next edition of our very own SPORTS fest, VRIDDHI,2021. <br/>Initiated in 2017-2018, VRIDDHI continues to carry on its motto to incite enthusiasm and sportsmanship among the contenders. It has gained national stature and established its niche as one of the largest SPORTS fests in EASTERN INDIA.<br/><br/> With the unprecedented outbreak of the novel coronavirus, VRIDDHI this year has gone online. Still, the fun and grandeur of the fest remain the same. The power-packed fest welcomes its viewers to dive into the world of E-SPORTS and have the time of their lives and embrace the gamer in them by featuring major E-SPORTS tournaments and events such as Bgmi, VALORANT, CHESS, and many more; the jazzy event will take place right on your screens.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>

    
    </>
   


  )
}

export default Aboutus