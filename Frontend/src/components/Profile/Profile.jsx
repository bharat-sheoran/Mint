import './Profile.css';

export default function Profile({display}){
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    return(
        <div style={{display: display}} className='profile-container'>
            <div className='profile-user-name'>{user.name}</div>
            <div className='profile-user-username'>{user.username}</div>
            <div className='profile-user-phone'>{user.phone}</div>
            <div className='profile-user-mail'>{user.email}</div>
        </div>
    )
}