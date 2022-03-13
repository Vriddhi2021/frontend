import TournamentsComp from './tournamentsComp';
import eventsJson from './eventsJson';
import { useState } from 'react';

const tournamentEvents = () => {
  const majorEvents = eventsJson.filter((oldData) =>  {return oldData.category === "Major Events"} );
  const GeneralGames = eventsJson.filter((oldData) =>  oldData.category ===  "General Games & Events" );
  const EventswithClubs = eventsJson.filter((oldData) =>  oldData.category ===  "Events with Clubs" );
  const FunEvents = eventsJson.filter((oldData) =>  oldData.category ===  "Fun Events (general and pre vridhi)" );
 
  return (
    <div className="col-11 col-md-10 mx-auto">
        <section id="majorEvents" className="row my-2">
          <h2 className="text-white" style={{textAlign: "left", fontSize: "48px"}}>Major Events</h2><br/>
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
        <section id="GeneralGames" className="row my-2">
          <h2 className="text-white" style={{textAlign: "left", fontSize: "48px"}}>General Games & Events</h2><br/>
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
        <section id="EventswithClubs" className="row my-2">
          <h2 className="text-white" style={{textAlign: "left", fontSize: "48px"}}>Events with Clubs</h2><br/>
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
        <section id="FunEvents" className="row my-2">
          <h2 className="text-white" style={{textAlign: "left", fontSize: "48px"}}>Fun Events</h2><br/>
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