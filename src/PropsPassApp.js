import React, { useState, useRef } from "react"
import PropsGetComp from "./PropsGetComp";
import { BrowserRouter, Navigate, useNavigate } from "react-router-dom";

const PropsPassComp = () => {

    const [name, setName] = useState("hi");
    const [clicked, setClicked] = useState(false);
    const ref = useRef();
   // const navigate = useNavigate();

    function handleSubmit (e) {
        e.preventDefault();
        if(!name) return;

        setName('');
     //   navigate("/App");
       
    }
/*
    function passPropData (e)
    {
        
        setClicked(true);
       e.preventDefault();
       <PropsGetComp captureData={name}></PropsGetComp>
    }
*/
    return (
        <>
        <PropsGetComp name = {name}
            setName = {setName}
            handleSubmit = {handleSubmit} 
        />
        <h1> Welcome {name} </h1>
        </>


    )
}
export default PropsPassComp;