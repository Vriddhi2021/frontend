import { Button, Link } from "@mui/material"
import axios from 'axios';
import { useEffect, useState } from 'react'

const UserProfile = () => {
    const [change, setChange] = useState('Dashboard');
    const [user, setUser] = useState({});
    useEffect(() => {
        function getCookie(cname) {
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(";");
            for (let i = 0; i < ca.length; i++) {
              let c = ca[i];
              while (c.charAt(0) == " ") {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }
          let userId=getCookie("userid");


        const getUser = async () => {
            await axios.get(`https://api.vriddhinitr.com/user/${userId}`)
            .then((res) => {
                console.log(res.data);
                setUser(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
        }
        getUser();

    },[]);

    
    console.log(((user?.paidStatus === false) && (user?.isNitr)))

    const Dashboard = () => (
        <div style={{ padding: '14px', backgroundColor: '#2b0c52', margin: "14px", height: "90%", borderRadius: '2px' }}>
            <p style={{ fontSize: '20px', margin: '4px' }}>DASHBOARD</p>
            <div style={{ backgroundColor: 'whitesmoke', height: '1px' }} />
            <div className="row">
                <div className="col-12 col-md-4 mx-auto m-3 p-2">
                <img src="https://i.pinimg.com/736x/51/96/b3/5196b34be5aec2079e4b68190299a544.jpg" alt="Avatar" className="img-thumbnail rounded"/>
                </div>
                <div className="col-12 col-md-8 mx-auto">
                <p style={{ margin: '18px' }}><span style={{color: "#ffffff96"}}>User ID/ Unique ID:     </span> {user?.uniqueId}</p>
                <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>Name:     </span> {user?.name}</p>
                <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>Email:     </span> {user?.email}</p>
                <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>College Name:     </span> {user?.collegeName}</p>
                <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>Contact Number:     </span> {user?.contact}</p>
                <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>You are currently registered in {user?.participatedEvents?.length} Events</span></p>
                
                <div className='d-flex'>
                
                {/* { ((user?.paidStatus === false) && (user?.isNitr)) ? <Button 
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
                    variant="contained"><Link className="text-decoration-none text-white" href="/User/otp">Verify OTP</Link></Button> : <>
                        &nbsp;&nbsp;&nbsp;
                   {user?.paidStatus ? null :  <Button
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
                    variant="contained"><Link className="text-decoration-none text-white" href="/paymentHTML.html">Payment</Link></Button>}
                    </> } */}

                
                </div>

                </div>
            </div>
            {/* <p style={{ margin: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nobis itaque pariatur ipsa atque fugiat et aut odit accusamus, quas illum ea repellat nemo harum modi consectetur aliquam! Repudiandae, vitae!
            </p> */}
        </div>
    )
    const Events = () => (
        <div style={{ padding: '14px', backgroundColor: '#2b0c52', margin: "14px", height: "90%", borderRadius: '2px' }}>
            <p style={{ fontSize: '20px', margin: '4px' }}>Events</p>
            <div style={{ backgroundColor: 'whitesmoke', height: '1px' }} />
            <p style={{ margin: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p style={{ margin: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nobis itaque pariatur ipsa atque fugiat et aut odit accusamus, quas illum ea repellat nemo harum modi consectetur aliquam! Repudiandae, vitae!
            </p>
        </div>
    )
    const Profile = () => (
        <div style={{ padding: '14px', backgroundColor: '#2b0c52', margin: "14px", height: "90%", borderRadius: '2px' }}>
            <p style={{ fontSize: '20px', margin: '4px' }}>My Profile</p>
            <div style={{ backgroundColor: 'whitesmoke', height: '1px' }} />
            <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>Name:     </span> {user?.name}</p>
            <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>User ID/ Unique ID:     </span> {user?.uniqueId}</p>
            <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>Email:     </span> {user?.email}</p>
            <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>Contact Number:     </span> {user?.contact}</p>
            <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>College Name:     </span> {user?.collegeName}</p>
            <p style={{ margin: '14px' }}><span style={{color: "#ffffff96"}}>Payment Status:     </span> {(user?.paidStatus) ? 'Paid' : 'Unpaid'}</p>
            {/* <p style={{ margin: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nobis itaque pariatur ipsa atque fugiat et aut odit accusamus, quas illum ea repellat nemo harum modi consectetur aliquam! Repudiandae, vitae!
            </p> */}
        </div>
    )


    return (
        <div className="" style={{ color: 'white', margin: '14px', display: 'flex', }}>
        <div className="row">
            <div style={{ padding: '14px', cursor: 'pointer', }} className="col-12 col-md-3 mx-auto">
                <div onClick={e => setChange('Dashboard')} style={{ backgroundColor: '#2b0c52', padding: '12px', margin: '6px', borderRadius: '2px' }} className="col-12 mx-auto">
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        DASHBOARD
                    </p>
                </div>
                <div onClick={e => setChange('Profile')} style={{ backgroundColor: '#2b0c52', padding: '12px', margin: '6px', borderRadius: '2px' }} className="col-12 mx-auto">
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        PROFILE
                    </p>
                </div>
                {/* <div onClick={e => setChange('Events')} style={{ backgroundColor: '#2b0c52', padding: '12px', margin: '6px', borderRadius: '2px' }}>
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        EVENTS
                    </p>
                </div> */}
                {/* <div style={{ backgroundColor: '#2b0c52', padding: '12px', margin: '6px', borderRadius: '2px' }}>
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        LOGOUT
                    </p>
                </div> */}
            </div>
            <div className="col-12 col-md-9 mx-auto">
                {change === "Dashboard" && <Dashboard />}
                {change === "Events" && <Events />}
                {change === "Profile" && <Profile />}
            </div>
        </div>
        </div>
    )
}

export default UserProfile