import { useState } from 'react'
import { MdDashboardCustomize } from 'react-icons/md'

const UserProfile = () => {
    const [change, setChange] = useState('Dashboard')

    const Dashboard = () => (
        <div style={{ padding: '14px', backgroundColor: 'black', margin: "14px", height: "90%", borderRadius: '14px' }}>
            <p style={{ fontSize: '20px', margin: '4px' }}>DASHBOARD</p>
            <div style={{ backgroundColor: 'whitesmoke', height: '1px' }} />
            <p style={{ margin: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p style={{ margin: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nobis itaque pariatur ipsa atque fugiat et aut odit accusamus, quas illum ea repellat nemo harum modi consectetur aliquam! Repudiandae, vitae!
            </p>
        </div>
    )
    const Events = () => (
        <div style={{ padding: '14px', backgroundColor: 'black', margin: "14px", height: "90%", borderRadius: '14px' }}>
            <p style={{ fontSize: '20px', margin: '4px' }}>Events</p>
            <div style={{ backgroundColor: 'whitesmoke', height: '1px' }} />
            <p style={{ margin: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p style={{ margin: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nobis itaque pariatur ipsa atque fugiat et aut odit accusamus, quas illum ea repellat nemo harum modi consectetur aliquam! Repudiandae, vitae!
            </p>
        </div>
    )
    const Profile = () => (
        <div style={{ padding: '14px', backgroundColor: 'black', margin: "14px", height: "90%", borderRadius: '14px' }}>
            <p style={{ fontSize: '20px', margin: '4px' }}>Profile</p>
            <div style={{ backgroundColor: 'whitesmoke', height: '1px' }} />
            <p style={{ margin: '14px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <p style={{ margin: '24px' }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nobis itaque pariatur ipsa atque fugiat et aut odit accusamus, quas illum ea repellat nemo harum modi consectetur aliquam! Repudiandae, vitae!
            </p>
        </div>
    )


    return (
        <div className="" style={{ color: 'white', margin: '14px', display: 'flex', }}>
            <div style={{ flex: '0.3', padding: '14px', cursor: 'pointer', }}>
                <div onClick={e => setChange('Dashboard')} style={{ backgroundColor: 'black', padding: '12px', margin: '6px', borderRadius: '14px' }}>
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        DASHBOARD
                    </p>
                </div>
                <div onClick={e => setChange('Profile')} style={{ backgroundColor: 'black', padding: '12px', margin: '6px', borderRadius: '14px' }}>
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        PROFILE
                    </p>
                </div>
                <div onClick={e => setChange('Events')} style={{ backgroundColor: 'black', padding: '12px', margin: '6px', borderRadius: '14px' }}>
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        EVENTS
                    </p>
                </div>
                <div style={{ backgroundColor: 'black', padding: '12px', margin: '6px', borderRadius: '14px' }}>
                    <p style={{ marginTop: '14px', fontSize: '20px', display: 'flex', justifyContent: 'center', }}>
                        LOGOUT
                    </p>
                </div>
            </div>
            <div style={{ flex: '0.7' }}>
                {change === "Dashboard" && <Dashboard />}
                {change === "Events" && <Events />}
                {change === "Profile" && <Profile />}
            </div>
        </div>
    )
}

export default UserProfile