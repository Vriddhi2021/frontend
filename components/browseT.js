import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TournamentsComp from './tournamentsComp';
import { useState } from 'react';
import { TextField } from '@mui/material';
import eventsJson from './eventsJson';
 

const browseT = () => {
    const [eventList, setEventList] = useState(eventsJson);
    const [status, setStatus] = useState('');
    const [cat, setCat] = useState('Major Events');
    const [catt, setCatt] = useState(eventsJson);
    const [day, setDay] = useState(1);
    const [dayy, setDayy] = useState([]);
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };
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
            <h1 className="text-white text-center py-5">Browse Tournament</h1>
            <Box sx={{ minWidth: 120 }}>
            <div className="row mx-auto">
            <div className="col-8 d-flex">
            <select value={status} class="form-select" aria-label="Default select example">
                <option selected value="Upcoming">Upcoming</option>
                <option value="Ongoing">Ongoing</option>
                <option value="Completed">Completed</option>
            </select>
            <select onChange={handleChangeDay} value={day} onClick={() => filterDay(day)} class="form-select" aria-label="Default select example">
                <option value="1" selected>Day 1</option>
                <option value="2">Day 2</option>
                <option value="3">Day 3</option>
            </select>

            <select onChange={handleChangeCat} value={cat} onClick={() => filterCat(cat)} class="form-select" aria-label="Default select example">
                {/* <option value="" selected>All Categories</option> */}
                <option value="Major Events" selected>Major Events</option>
                <option value="Events with Clubs">Events with Clubs</option>
                <option value="Fun Events (general and pre vridhi)">Fun Events (Pre vridhi)</option>
                <option value="General Games & Events">General Games & Events</option>
                <option value="Fun Events (games)">Fun Events (games)</option>
            </select>
            </div>
            <div className="col-4">
            <FormControl fullWidth>
                    <TextField
                    sx={{
                        borderRadius: "8px",
                        borderColor: "#eee",
                        color: "white",
                        outline: "white"
                    }}
                    inputProps={{ style: {color: 'white'}}}
                    id="outlined-basic" label="Search" variant="outlined" />
            </FormControl>
            </div>
            </div>
            </Box>
            <div className="row mx-auto my-5">
            {catt.map((curData) => {
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
    </section>
  )
}

export default browseT