import { useState } from 'react';
import Profile from '../../Profile/Profile';
import './Settings.css';
import axios from 'axios';

export default function Settings({display}) {
    const user = JSON.parse(localStorage.getItem('user'));
    const [profileDisplay, setProfileDisplay] = useState(false);

    function handleProfileDisplay(){
        if(profileDisplay){
            setProfileDisplay(false);
        }else{
            setProfileDisplay(true);
        }
    }

    async function logout() {
        try {
            console.log("Logout Button Clicked");
            const response = await axios.get(`http://localhost:8080/auth/logout`);
            if (response.status === 200) {
                await localStorage.removeItem('user');
                console.log("Item Deleted");
                return (
                    <Navigate to={'/home'} />
                )
            }
        } catch (e) {
            console.log("Error while Logging out");
        }
    }
    return (
        <div style={{display: display}} className='settings-container'>
            <div className='user-name'>{user != null? user.name: ""}</div>
            <div onClick={handleProfileDisplay} className='settings-list profile'>Your Profile</div>
            <Profile display={profileDisplay?'flex':'none'}/>
            <div onClick={logout} className='settings-list logout'>Logout</div>
        </div>
    )
}