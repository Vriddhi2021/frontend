import styles from "../styles/TournamentHead.module.css";
import Snackbar from '@mui/material/Snackbar';
import { useEffect, useState } from "react";
// import './globals.css';

function HeaderTourna() {
  const [state, setState] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const [user, setUser] = useState(null);
  

  // const [state, setState] = React.useState({
  //   open: false,
  //   vertical: 'top',
  //   horizontal: 'center',
  // });

  useEffect(() => {
    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
    let token = getCookie("jwt");
    let userid = getCookie("userid")
     console.log(token);
    console.log(userid);
    setUser(userid);
  },[]);
  const { vertical, horizontal, open } = state;
  const openOauth = () => {
    window.open("https://api.vriddhinitr.com/auth/google", "_self");
    // setState({ ...state, open: true });
  };
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setState({ ...state, open: false });
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
            {user ? <a className={styles.coolBeans}
            // href="/tournaments"
            >
            Register Events
            </a> : <a
            onClick={openOauth}
            className={styles.coolBeans} href="#">
              Join now
            </a>}
            <Snackbar
              // bodyStyle={{ maxWidth: '100%', height: '30%' }}
              // bodyStyle={{ height: '200%', width: '200%', flexGrow: 0 }}
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              message="The registration and payment gateway will be live from 21 March 2022 6PM. STAY TUNED !!"
              // action={action}
            />
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
