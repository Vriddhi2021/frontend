import styles from "../styles/TournamentHead.module.css";

function HeaderTourna() {
  const openOauth = () => {
    window.open("https://api.vriddhinitr.com/auth/google", "_self");
  };
  return (
    <section className={styles.hero}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div className="col-11 col-md-10 mx-auto">
          <div className={styles.hero__layout}>
            <h2 className={styles.header}>E-Sports Fest</h2>
            <h1 className={styles.header__main}>
              <p
                className="text-uppercase heroText glitch layersText"
                data-text="VRIDDHI'2021"
                style={{
                  fontSize: "60px !important",
                  // lineHeight: "40px !important",
                }}
              >
                <span>vriddhi&apos;2021</span>
              </p>
            </h1>
            <p className={styles.hero__text}>
              E-sports is a place for all of you, so don&apos;t hold back.
              Embrace the gamer in you as you will have the most fantastic time
              during Vriddhi 2021 this year.
            </p>
            <a onClick={openOauth} className={styles.coolBeans} href="#">
              Register Now
            </a>
          </div>
        </div>
      </div>
      <div className="d-none">
        <h1 className="text-white display-4 text-uppercase bar">
          <span className="bar_content">
            Welcome to first ever E-sports fest of Eastern India. So don&apos;t
            hold back and mark the date. 25th - 27th March&apos;2020
          </span>
        </h1>
      </div>
    </section>
  );
}
export default HeaderTourna;
