import { Button, Link } from "@mui/material"

const tournamentsComp = (props) => {
  return (

    <div className="col-12 col-md-6 mx-auto px-4 py-2 my-4">
        <div className="text-white tournamentsBrowseCards bg-dark p-2" style={{backgroundImage: `url(${props.img})`}}>
        <div className="row cardTarsparent"></div>
        <div className="row cardData">
            <div className="col-4 mx-auto p-2 d-flex justify-content-center align-items-center"><div className="roundBox text-center px-2 py-3">March&apos;22<br/><span>{props.date}</span></div></div>
            <div className="col-8 mx-auto py-3 px-0">
                <p className="cardTitle">{props.name}</p>
                <div className="row dataCard2">
                <div className="col-5"><p>Team Size: {props.teamSize}</p><p>Prize - ₹{props.prize}</p></div>
                <div className="col-7"><p>Day - 0{props.day}</p><Button 
                    sx={{
                        borderRadius: "40px",
                        border: "1px solid #8800CD",
                        background: "#AA1EF1",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "transparent",
                            color: "white",
                            boxShadow: "none",
                            border: "1px solid #8800CD",
                        },
                    }}
                    variant="contained"><Link className="text-decoration-none text-white" href={`/tournaments/${props.id}`}>Register</Link></Button></div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default tournamentsComp