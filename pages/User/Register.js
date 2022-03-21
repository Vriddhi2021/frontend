import Navbar from "../../components/Navbar";
import Head from "next/head";
import Footer from "../../components/footer";
import RegisterUser from "../../components/registerUser";
import JoinusHero from "../../components/joinusHero";
import { useState, useEffect } from "react";

const Register = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("https://api.vriddhinitr.com/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          mode: "no-cors",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject);
          console.log(resObject.userFound);
          document.cookie = `jwt=${resObject.jwt}`;
          document.cookie = `userid=${resObject.userid}`;
          if (resObject.userFound) {
            console.log(1);
            window.open("https://www.vriddhinitr.com/", "_self");
            console.log(2);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <>
      <Head>
        <title>Vriddhi - Register</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        {/* *********** Meta SEO***********  */}
        <meta
          property="og:title"
          content="Vriddhi'21, E-sports is a place for all of you, so don't hold back. Embrace the gamer in you as you will have the most fantastic time during Vriddhi 2021 this year"
        />
        <meta
          name="keywords"
          content="vriddhinitr,vriddhinitrkl,vriddhinitrourkela, vriddhi, fest nitr, fest, festnitr, festnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,esports fest,esports"
        />
        <meta
          name="description"
          content="Official Website of Vriddhi NIT Rourkela"
        />
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vriddhinitr.com/" />
        <meta
          property="og:image"
          content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png"
        />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" />{" "}
        <meta name="description" content="Vriddhi 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <JoinusHero />
      <RegisterUser />
      <Footer />
    </>
  );
};

export default Register;
