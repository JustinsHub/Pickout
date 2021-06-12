import React from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/global.css'

//User profile and information with edit button
const Profile = ({currentUser}) => {

    const history = useHistory()

    const profileEdit = () => {
        history.push('/profile/edit')
    } 
    
    const {username, first_name, last_name, email, address} = currentUser.data

    if(!currentUser){
        history.push('/access/error')
    }

    return (
        <main className="global-form card rounded mx-auto d-block" style={{height: "17rem"}}>
            <div className="text-center">
                <h1 className="global-create-account h2 mb-2 fw-normal">{username} Profile</h1>
                <p><b>First Name:</b> {first_name === null ? <i>First Name</i> : first_name}</p>
                <p><b>Last Name:</b> {last_name === null ? <i>Last Name</i> : last_name}</p>
                <p><b>Email:</b> {email === null ? <i>Email Address</i> : email}</p>
                <p><b>Address:</b> {address === null ? <i>Shipping Address</i> : address}</p>
                <div className="mt-3">
                <button className="btn btn-primary" type="submit" onClick={profileEdit}>Edit Profile</button>
                </div>
            </div>
        </main>
    )
}

export default Profile