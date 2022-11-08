import React from "react"
import { ReactDOM } from "react-dom/client"
import "./stylesStud.css"
import StudNavbar from "./StudNavbar"
import Body from "./Body"

export default function StudentMainPage() {
    return (
    //<Body studnavbar>
    <>
    <StudNavbar />
    
    <div className="maincontainer">
        <h1>Main</h1>
        <div className="mainrow">
            <div className="maincol1">
                <div className="teamSection">
                    <h2>Team</h2>
                    <ul>
                        <li className="checknatscores">
                            <a href="/natscores">Check National Scores</a>

                        </li>
                        <li className="checkcontact">
                            <a href="/contact">Contact Team Members</a>
                        </li>
                    </ul>
                </div>
                
                <div className="assessmentsSection">
                    <h2>Assessments</h2>
                    <ul>
                        <li className="takeAssess">
                            <a href="/takeassess">Take Self-Assessment</a>
                        </li>
                        <li className="viewAssess">
                            <a href="/viewAssess">View Assessments</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="maincol2">
                <div className="howtoCASASection">
                    <h2>How to Use CASA</h2>
                    <div className="howtoCASA">
                        <p>Tips on Using CASA: </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    </>
        
    //</Body>
    );
}