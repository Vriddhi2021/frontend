import styles from '../styles/TournamentHead.module.css';

function hero(props) {
  return (
    <section className={styles.hero} style={{backgroundImage: `url(${props.img})`}}>
    <div className='d-flex justify-content-center align-items-center' style={{height: "100%"}}>
    <div className='col-11 col-md-10 mx-auto'>
        <div className={styles.hero__layout} style={{alignItems: "center !important"}}>
            <h1 className="heroText glitch layersText text-white text-center text-uppercase" data-text={props.title} style={{fontSize: "78px", textAlign: "center !important"}}><span>{props.title}</span></h1>
        </div>
        </div>
        </div>
    </section>
  )
}

export default hero;