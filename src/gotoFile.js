import React from "react";
//import { useLocation } from "react-router-dom";
import {Link} from "react-router-dom";

function GoToFile ({newName}) {
    //const location = useLocation();
    return (
    <>
     <p>
    <h1>{newName}</h1>
    <h2>Your Order Details</h2>
        
        <p style={{backgroundColor : "yellow", fontSize : "25px" }}>
            choco 1
            wafer 1 
            nuttoz 4
        </p>
    
    </p>
    </>
    )
};
export default GoToFile;
