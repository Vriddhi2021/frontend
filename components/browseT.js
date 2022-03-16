import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TournamentsComp from './tournamentsComp';
import { useState } from 'react';
import { Button, Link, TextField } from '@mui/material';
import eventsJson from './eventsJson';
import FlipMove from 'react-flip-move';
 

const BrowseT = () => {
    const [eventList, setEventList] = useState(eventsJson);
    const [status, setStatus] = useState('');
    const [cat, setCat] = useState('Major Events');
    const [catt, setCatt] = useState(eventsJson);
    const [day, setDay] = useState(1);
    const [dayy, setDayy] = useState([]);
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    // const handleChangeDay = (event) => {
    //     setDay(event.target.value);
    // };
    const handleChangeCat = (event) => {
        setCat(event.target.value);
    };
    console.log(cat);
    const filterDay = (cardsDay) => {
        const updatedCardss  = catt.filter((oldData) => {
            return oldData.day === cardsDay;
        });
        setCatt(updatedCardss);
    }
    const filterCat = (category) => {
        const updatedCatCards  = eventsJson.filter((oldData) => {
            return oldData.category === category;
        });
        setCatt(updatedCatCards)
    }
  return (
    <section style={{background: "#1D023E"}}>
        <div className="col-11 col-md-10 mx-auto my-5">
            <h1 className="text-white text-center pt-5">Browse Tournament</h1>
            <Box sx={{ minWidth: 120 }}>
            <div className="row mx-auto BrowseTournamentsPadding mt-5">
            <div className="col-12 mx-auto col-md-8 d-flex justify-content-between">
            <select value={status} className="form-select mx-2 browseTSelect browseTSelectSelect" aria-label="Default select example">
                <option selected value="Upcoming">Upcoming</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
            </select>
            {/* <select onChange={handleChangeDay} value={day} onClick={() => filterDay(day)} className="form-select" aria-label="Default select example">
                <option value="1" selected>Day 1</option>
                <option value="2">Day 2</option>
                <option value="3">Day 3</option>
            </select> */}

            <select onChange={handleChangeCat} value={cat} onClick={() => filterCat(cat)} className="mx-2 form-select browseTSelect browseTSelectSelect" aria-label="Default select example">
                {/* <option value="" selected>All Categories</option> */}
                <option value="Major Event" selected>Major Events</option>
                <option value="General Games & events">General Games & Events</option>
                <option value="Events with Clubs">Events with Clubs</option>
                <option value="Fun-event">Fun Event</option>
            </select>
            </div>
            <div className="col-12 col-md-4 browseSearch mx-auto">
            
                <form className="form-inline d-flex">
                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                <input type="text" className="browseTSelect form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="e.g: Valorant"/>
                <button type="submit" className="browseTSelect btn btn-primary mb-2">Submit</button>
                </form>

            </div>
            </div>
            </Box>
            <div>
            <FlipMove className="row mx-auto my-5">
            {catt.map((old) => {
                return (
                    <div key={old.id} className="col-12 col-md-6 mx-auto px-4 py-2 my-4">
        <div className="text-white tournamentsBrowseCards bg-dark p-2" style={{backgroundImage: `url(${old.img})`}}>
        <div className="row cardTarsparent"></div>
        <div className="row cardData">
            <div className="col-4 mx-auto p-2 d-flex justify-content-center align-items-center"><div className="roundBox text-center px-2 py-3">March&apos;22<br/><span>{old.date}</span></div></div>
            <div className="col-8 mx-auto py-3 px-0">
                <p className="cardTitle">{old.name}</p>
                <div className="row dataCard2">
                <div className="col-5"><p>Team Size: {old.teamSize}</p><p>Prize - ₹{old.prize}</p></div>
                <div className="col-7"><p>Day - 0{old.day}</p><Button 
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
                    variant="contained"><Link className="text-decoration-none text-white" href={`/tournaments/${old.id}`}>Register</Link></Button></div>
                </div>
            </div>
        </div>
        </div>
    </div>
                )
            })}
            </FlipMove>
            </div>
        </div>
    </section>
  )
}

export default BrowseT;