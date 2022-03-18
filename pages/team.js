import Card from '../components/Card';
import Navbar from '../components/Navbar';
import bgHero from '../public/team.png';
import Head from "next/head";
import Hero from '../components/hero';
import TrendingVideo from '../components/trendingVideo';
import teamDetails from '../components/teamDetails';
import Footer from '../components/footer';


const team = () => {
  return (
    <>
    <Head>
        <title>Vriddhi - Our Team</title>

        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        
        {/* *********** Meta SEO***********  */}
        <meta property="og:title" content="Vriddhi'21, E-sports is a place for all of you, so don't hold back. Embrace the gamer in you as you will have the most fantastic time during Vriddhi 2021 this year" />
        <meta name="keywords"  content="vriddhinitr,vriddhinitrkl,vriddhinitrourkela, vriddhi, fest nitr, fest, festnitr, festnitrkl, nitr,nitrkl,nitrourkela,nit,rourkela,nit rourkela,esports fest,esports" />
        <meta name="description" content="Official Website of Vriddhi NIT Rourkela" />
        
        {/* *********** Meta Facebook SEO***********  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.vriddhinitr.com/" />
        <meta property="og:image" content="https://www.vriddhinitr.com/_next/static/media/logoBranding.00987fe3.png" />
        <meta property="og:image:width" content="806" />
        <meta property="og:image:height" content="280" /> <meta name="description" content="Vriddhi 2021" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <Hero
        title="Our Team"
        img={bgHero.src}
      />
      <TrendingVideo />
      <section>
        <div className="row mt-5">
          <div className="col-11 col-md-10 mx-auto">
          <div className="row mx-auto">
          <h2 className="teamPageHeading text-white">Conveners</h2>
            {teamDetails.filter((old) => (old.post === "Convener")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">Tech Team</h2>
            {teamDetails.filter((old) => (old.team === "Tech Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">Content Team</h2>
            {teamDetails.filter((old) => (old.team === "Content Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">Design Team</h2>
            {teamDetails.filter((old) => (old.team === "Design Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">DBM Team</h2>
            {teamDetails.filter((old) => (old.team === "DBM Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">Publicity Team</h2>
            {teamDetails.filter((old) => (old.team === "Publicity Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">Sponsership Team</h2>
            {teamDetails.filter((old) => (old.team === "Sponsership Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">PR Team</h2>
            {teamDetails.filter((old) => (old.team === "PR Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">EM Team</h2>
            {teamDetails.filter((old) => (old.team === "EM Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">IA Team</h2>
            {teamDetails.filter((old) => (old.team === "IA Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">CM Team</h2>
            {teamDetails.filter((old) => (old.team === "CM Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">Streaming Team</h2>
            {teamDetails.filter((old) => (old.team === "Streaming Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
            <div className="row my-4">
            <h2 className="teamPageHeading text-white">Workshop Team</h2>
            {teamDetails.filter((old) => (old.team === "Workshop Team")).map((oldData) => {
              return <Card
                key={oldData.id}
                id={oldData.id}
                name={oldData.name}
                post={oldData.post}
                team={oldData.team}
                img={oldData.img}
              />
            })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default team;