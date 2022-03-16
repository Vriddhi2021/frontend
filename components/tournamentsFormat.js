import format from '../public/arrowImg.png';
import GroupIcon from '@mui/icons-material/Group';
import AddCardIcon from '@mui/icons-material/AddCard';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const tournamentsFormat = () => {
  return (
    <>
        <p className="_text formatTitle tournamentsFormat" style={{ color: "white", textAlign: "center", padding:'10px', fontSize:'30px', fontWeight: 'bold'}}>TOURNAMENT FORMAT</p>
    <div className="container mx-auto tournament">
        <div className="row mx-auto text-center justify-content-center ">
          
                    <div className="my-3 col-md-2 icons">
                        <div className="icons">
                            <GroupIcon style={{fontSize: "34px", color: "#AA1EF1", width: "45px", height: "45px"}}/>
                        </div>
                        <h4 className="fs-6 fw-normal text-white mt-2">SIGN UP</h4>
                        <p className='text-white'>Sign up by providing the required information</p>
                    </div>
                
                    <div className="col-md-1 mt-md-5">
                    <img src={format.src} className="img-fluid arroww" alt=""/>
                    </div>

                    <div className="my-3 col-md-2 icons  mt-md-5 pt-md-5 ">
                        <div className="icons">
                            <AddCardIcon style={{fontSize: "34px", color: "#AA1EF1", width: "45px", height: "45px"}}/>
                        </div>
                        <h4 className="fs-6 fw-normal text-white mt-2">DEPOSITE</h4>
                        <p className='text-white'>Deposit the required amount</p>
                    </div>

                    <div className="col-md-1 mt-md-5">
                        <img src={format.src} className="img-fluid rotateImg " alt=""/>
                    </div>

                    <div className="my-3 col-md-2 icons">
                        <div className="icons">
                            <AssignmentTurnedInIcon style={{fontSize: "34px", color: "#AA1EF1", width: "45px", height: "45px"}}/>
                        </div>
                        <h4 className="fs-6 fw-normal text-white mt-2">COMPLETE</h4>
                        <p className='text-white'>Embrace the gamer in you</p>
                    </div>

                    <div className="col-md-1 mt-md-5">
                        <img src={format.src} className="img-fluid arroww" alt=""/>
                    </div>

                    <div className="my-3 col-md-2 icons mt-md-5 pt-md-5">
                        <div className="icons">
                            <EmojiEventsIcon style={{fontSize: "34px", color: "#AA1EF1", width: "45px", height: "45px"}}/>
                        </div>
                        <h4 className="fs-6 fw-normal text-white mt-2">WIN & EARN</h4>
                        <p className='text-white'>All set,let's go!!!</p>
                    </div>
                    
           
          
        </div>
        
    </div>
    </>
  )
}

export default tournamentsFormat