import { Button, Link } from "@mui/material";

const EventPage = (props) => {
    const Actionform = (e) => {
        e.preventDefault();
        // alert(e);
        console.log(e)
        this.append('<input type="hidden" name="eventID" value="Sahil"}>');
    }
  return (
    <section className="EventPageSection">
        <div className="row text-white py-5">
            <div className="col-10 col-md-9 mx-auto my-5">
                <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <img style={{width:"100%", height: "100%"}} src={props.img} alt="Event img" className="img-fluid rounded"/>
                </div>
                <div className="col-12 col-md-6 mx-auto">
                    <h2>{props.name}</h2>
                    <p className="eventDescription">{props.description}</p>
                    <div className="row mx-auto px-0 my-1 prizeAndDiscord">
                    <div className="col-6 px-0 mx-auto">
                        <div className="eventsDate">Prize:<span>{props.prize}</span></div>
                    </div>
                    <div className="col-6 px-0 mx-auto downloadPDFcol">
                        <Button style={{position: "relative"}} variant="outlined" className="text-capitalize downloadPDF"><p><Link href={props.discord} className="text-decoration-none">Discord Link</Link></p></Button>
                    </div>
                    </div>
                    <form onSubmit={Actionform} method="POST" action="/teamDetails">
                    <div className="row InputTeamID">
                    {(Number(props.teamSize) !== 1) ? <><div className="col-12 mx-auto">
                                <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Team Name*</span>
                                </div>
                                <input name="teamName" type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                                </div>

                     </div><p>Fill your team mates&apos; ID</p>{Array(Number(props.teamSize)).fill().map((_, i) => {
                        return <div key={i} className="col-6 mx-auto">
                                <div className="input-group input-group-sm mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-sm">Person {i+1}*</span>
                                </div>
                                <input name={`id${i}`} type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                                </div>

                                </div>
                    })}</> : null}
                    
                    <div className="row mx-auto px-0 my-1">
                    <div className="col-6 mx-auto">
                        <div className="eventsDate">March&apos;22<br/><span>{props.date}</span></div>
                    </div>
                    <div className="col-6 mx-auto downloadPDFcol">
                        <Button style={{position: "relative"}} variant="outlined" className="text-capitalize downloadPDF"><img className="downloadPDFimg" src="https://breslin.biz/wp-content/uploads/2016/10/icon-pdf-white.png" alt="pdfImg"/><br/><p><Link href={props.pdfLink} className="text-decoration-none">Event Details</Link></p></Button>
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