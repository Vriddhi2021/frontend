import Footer from "../../components/footer";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";
import Hero from '../../components/hero';
import EventPage from '../../components/eventPage'
import eventJson from '../../components/eventsJson';
import bgHero from '../../public/contactBanner.png';
import { useEffect, useState } from "react";
import TournamentsComp from '../../components/tournamentsComp';


export const getStaticPaths = async () => {
  const paths = eventJson.map(old => ({
    params: { event: old.id.toString()},
  }))
  return  { paths, fallback: false }
}
export const getStaticProps = async ({params}) => {
  const eventJsonOne = eventJson.filter(old => old.id.toString() === params.event);
  return{
    props: {
      eventt: eventJsonOne[0]
    },
  }
}
const event = ({ eventt }) => {
  const SimilarEvents = eventJson.filter((old) => { return old.category === eventt.category});
  return (
    <>
        <Navbar/>
        <Hero
             title={eventt.name}
             img={bgHero.src}
        />
        <section>
          <EventPage {...eventt}/>
        </section>
        <section className="py-5">
          <div className="row my-3">
            <div className="col-10 col-md-9 mx-auto">
              <div className="row">
                <h2 className="SimilarEventTitle">Similar Events</h2>
              </div>
              <div className="row">
              {SimilarEvents.map((curData) => {
                return (
                    <TournamentsComp
                        key={curData.id}
                        id={curData.id}
                        name={curData.name}
                        day={curData.day}
                        img={curData.img}
                        date={curData.date}
                        prize={curData.prize}
                        teamSize={curData.teamSize}
                        registerLink={curData.registerLink}
                    />
                )
            })}
              </div>
            </div>
          </div>
        </section>
        <Footer/>
    </>
  )
}

export default event