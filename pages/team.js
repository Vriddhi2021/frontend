import Card from '../components/Card';
import Navbar from '../components/Navbar';
import bgHero from '../public/gellery.png';
import Hero from '../components/hero';
import TrendingVideo from '../components/trendingVideo';
import teamDetails from '../components/teamDetails';
import Footer from '../components/footer';


const team = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Our Team"
        img={bgHero.src}
      />
      <TrendingVideo />
      <section>
        <div className="row mt-5">
          <div className="col-11 col-md-10 mx-auto">
          <div className="row">
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