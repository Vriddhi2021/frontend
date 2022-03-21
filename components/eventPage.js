import { Button, Link } from "@mui/material";
import { useState } from "react";
import axios from 'axios';

const EventPage = (props) => {
    const [teamName,setTeamName]=useState("");
    const [team, setTeam] = useState({
        person1: "",
        person2: "",
        person3: "",
        person4: "",
        person5: ""
      });
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTeam({ ...team, [name]: value });
      };
      const handleChange2 = (e) => {
        const value = e.target.value;
        setTeamName(value);
      };
    const Actionform = async (e) => {
        e.preventDefault();
        // alert(e);
        // console.log(team);
        console.log(props.id);
        let tm = [] ;
        for(let key in team){
            let curritem = team[key];
            if(curritem)
                tm.push(curritem);
        }
        console.log(tm);
        let body = {
            name : teamName,
            eventId : props.id,
            teamMembers : tm
        }
        // console.log(body);
        // let res = await axios.;
        try {
            const res = await axios.post("https://api.vriddhinitr.com/Team/Register", body , { headers: {
              mode: "no-cors",
            }});
            console.log(res);
          } catch (err) {}
        // this.append('<input type="hidden" name="eventID" value="Sahil"}>');
    }
  return (
    <section className="EventPageSection">
        <div className="row text-white py-5">
            <div className="col-10 col-md-9 mx-auto my-5">
                <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <img style={{width:"100%", height: "100%"}} src={props.img} alt="Event img" className="img-fluid rounded"/>
                </div>
                <div className="col-12 col-md-6 mx-auto eventDetailsSection">
                    <h2>{props.name}</h2>
                    <p className="eventDescription">{props.description}</p>
                    <div className="row mx-auto px-0 my-1 prizeAndDiscord">
                    <div className="col-6 px-0 mx-auto">
                        <div className="eventsDate">Prize:<span>{props.prize}</span></div>
                    </div>
                    <div className="col-6 px-0 mx-auto downloadPDFcol">
                        <Button style={{position: "relative"}} variant="outlined" className="text-capitalize downloadPDF"><p className="discordPdfLink"><Link href={props.discord} className="text-decoration-none">Discord Link</Link></p></Button>
                    </div>
                    </div>
                    <form onSubmit={Actionform} method="POST" action="/teamDetails">
                    <div className="row InputTeamID">
                    {(Number(props.teamSize) !== 1) ? <><div className="col-12 mx-auto">
                                <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Team Name*</span>
                                </div>
                                <input name="teamName" type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" onChange={handleChange2} value={teamName}/>
                                </div>

                     </div><p>Fill your team mates&apos; ID</p>{Array(Number(props.teamSize)).fill().map((_, i) => {
                        return <div key={i} className="col-12 col-md-6 mx-auto">
                                <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Person {i+1}*</span>
                                </div>
                                <input name={`person${i}`} type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" value={team[`person${i}`]} onChange={handleChange}/>
                                </div>

                                </div>
                    })}</> : null}
                    
                    <div className="row mx-auto px-0 my-1">
                    <div className="col-6 mx-auto">
                        <div className="eventsDate">March&apos;22<br/><span>{props.date}</span></div>
                    </div>
                    <div className="col-6 mx-auto downloadPDFcol">
                        <Button style={{position: "relative"}} variant="outlined" className="text-capitalize downloadPDF"><img className="downloadPDFimg" src="https://breslin.biz/wp-content/uploads/2016/10/icon-pdf-white.png" alt="pdfImg"/><br/><p className="discordPdfLink"><Link href={props.pdfLink} className="text-decoration-none">Event Details</Link></p></Button>
                    </div>
                    </div>
                    <div className="row mt-3">
                    <Button onClick={Actionform}
                        sx={{
                            background: "#AA1EF1",
                            border: "1px solid #AA1EF1",
                            color: "white",
                            "&:hover": {
                                backgroundColor: "transparent",
                                borderColor: "#AA1EF1",
                                color: "white",
                            }
                        }}
                            style={{margin: "12px 12px 0 12px"}} variant="contained">Register Now</Button>
                    </div>
                    </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default EventPage;