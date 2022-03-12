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
    const [day, setDay] = useState('');
    const [cat, setCat] = useState('');
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleChangeDay = (event) => {
        setDay(event.target.value);
    };
    const handleChangeCat = (event) => {
        setCat(event.target.value);
    };
    const filterCards = (cardsDay) => {
        const updatedCards  = eventsJson.filter((oldData) => {
            return oldData.day = cardsDay;
        });
        setEventList(updatedCards)
    }
  return (
    <section style={{background: "#1D023E"}}>
        <div className="col-11 col-md-10 mx-auto my-5">
            <h1 className="text-white text-center py-5">Browse Tournament</h1>
            <Box sx={{ minWidth: 120 }}>
            <div className="row mx-auto">
            <div className="col-8 d-flex">
            <FormControl className='mx-3' fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                    <Select
                    sx={{
                        borderRadius: "8px",
                        borderColor: "#eee",
                        color: "white",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={status}
                    label="Status"
                    onChange={handleChangeStatus}
                    >
                    <MenuItem value={10}>Upcoming</MenuItem>
                    <MenuItem value={20}>Ongoing</MenuItem>
                    <MenuItem value={30}>Completed</MenuItem>
                    </Select>
            </FormControl>
            <FormControl className='mx-3' fullWidth>
                    <InputLabel id="demo-simple-select-label">Day</InputLabel>
                    <Select
                    sx={{
                        borderRadius: "8px",
                        borderColor: "#eee",
                        color: "white",
                    }}
                    onClick={() => {filterCards(day)}}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={day}
                    label="Age"
                    onChange={handleChangeDay}
                    >
                    <MenuItem value="all">All</MenuItem>
                    <MenuItem value={1}>Day 1</MenuItem>
                    <MenuItem value={2}>Day 2</MenuItem>
                    <MenuItem value={3}>Day 3</MenuItem>
                    </Select>
            </FormControl>
            <FormControl className='mx-3' fullWidth>
                    <InputLabel id="demo-simple-select-label">Catagory</InputLabel>
                    <Select
                    sx={{
                        borderRadius: "8px",
                        borderColor: "#eee",
                        color: "white",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={cat}
                    label="Age"
                    onChange={handleChangeCat}
                    >
                    <MenuItem value={10}>Major Events</MenuItem>
                    <MenuItem value={20}>General Games & Events </MenuItem>
                    <MenuItem value={30}>Events with Clubs</MenuItem>
                    <MenuItem value={30}>Fun Events (Pre vridhi)</MenuItem>
                    <MenuItem value={30}>Fun Events (games)</MenuItem>
                    </Select>
            </FormControl>
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
            {eventList.map((curData) => {
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