import styles from '../styles/TournamentHead.module.css';

function hero(props) {
  return (
    <section className={styles.hero} style={{height: "80vh"}}>
    <div className='d-flex justify-content-center align-items-center' style={{height: "100%"}}>
    <div className='col-11 col-md-10 mx-auto'>
        <div  className={styles.hero__layout} style={{alignItems: "center !important"}}>
            <h1 className='text-white text-center' style={{fontSize: "64px", textAlign: "center !important"}}>{props.title}</h1>
        </div>
        </div>
        </div>
    </section>
  )
}

export default hero;