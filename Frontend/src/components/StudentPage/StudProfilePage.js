import React from "react"
import StudNavbar from "./StudNavbar"
import "./stylesStud.css"

export default function StudentProfilePage() {
    /* modify later if this is a submitable form for opt
    in email notifications from cybertexas
    
    <form onSubmit={this.handleSubmit}>
    </form>

    const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();
  
        
    }; */
    
    return(
    <>
    <StudNavbar />
    <div className="profilecontainer">
        <h1>Profile</h1>
        <div className="studentAttributes">
            <ul>
                <li className="studentName">
                    <p>Name: </p>
                </li>

                <li className="studentYear">
                    <p>Year: </p>
                </li>
                <li className="studentCoach">
                    <p>Coach: </p>
                </li>
                <li className="studentStatus">
                    <p>Status: </p>
                </li>
            </ul>
        </div>
    </div>
    </>
    ); 
    
    //<h1>Profile</h1>;
}