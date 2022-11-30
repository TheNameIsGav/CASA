import React from "react"
import "./styleCoach.css"

export default function Profile() {
    
    const fetchUserAccount = (e, incText) => {
        e.preventDefault()

        var postData = { id: incText}

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json',
            body: JSON.stringify(postData)
        };
            
        fetch('/api/user/display_user/', requestOptions).then(
            res => res.text()).then(text => {
                try {
                    const userVal = JSON.parse(text)
                    //navigate('/about', {replace: true, state:{userVal}})
                    //Figure out what to do with this information from userVal
                } catch (error) {

                }
            }
        )
    
    }
    
    return(
    <>
    <div className="profilecontainer">
        <h1>Profile</h1>
        <div className="Attributes">
            <ul>
                <li className="Name">
                    <p>Name: </p>
                </li>

                <li className="Year">
                    <p>Year: </p>
                </li>
                <li className="# of Teams">
                    <p>Coach: </p>
                </li>
            </ul>
        </div>
    </div>
    </>
    ); 
}
