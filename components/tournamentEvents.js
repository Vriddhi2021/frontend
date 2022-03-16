import TournamentsComp from './tournamentsComp';
import eventsJson from './eventsJson';
import { useState } from 'react';

const tournamentEvents = () => {
  const majorEvents = eventsJson.filter((oldData) =>  {return oldData.category === "Major Event"} );
  const GeneralGames = eventsJson.filter((oldData) =>  oldData.category ===  "General Games & events" );
  const EventswithClubs = eventsJson.filter((oldData) =>  oldData.category ===  "Events with Clubs" );
  const FunEvents = eventsJson.filter((oldData) =>  oldData.category ===  "Fun-event" );
 
  return (
    <div className="col-11 col-md-10 mx-auto">
        <section id="majorEvents" className="row my-2 fontSizeEvents">
          <h2 className="text-center mt-5 text-white Eventsh2">Major Events</h2><br/>
          <div className="row mx-auto my-5">
            {majorEvents.map((curData) => {
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
        </section>
        <section id="GeneralGames" className="row my-2 fontSizeEvents">
          <h2 className="text-center mt-5 text-white Eventsh2">General Games & Events</h2><br/>
          <div className="row mx-auto my-5">
            {GeneralGames.map((curData) => {
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
        </section>
        <section id="EventswithClubs" className="row my-2 fontSizeEvents">
          <h2 className="text-center mt-5 text-white Eventsh2">Events with Clubs</h2><br/>
          <div className="row mx-auto my-5">
            {EventswithClubs.map((curData) => {
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
        </section>
        <section id="FunEvents" className="row my-2 fontSizeEvents">
          <h2 className="text-center mt-5 text-white Eventsh2">Fun Events</h2><br/>
          <div className="row mx-auto my-5">
            {FunEvents.map((curData) => {
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
        </section>
        
    </div>
  )
}

export default tournamentEvents