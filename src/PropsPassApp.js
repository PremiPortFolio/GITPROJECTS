import React, { useState, useRef } from "react"
import PropsGetComp from "./PropsGetComp";
import GoToFile from "./gotoFile";

const PropsPassApp = () => {

    const [name, setName] = useState("");
    const [newName, setNewName] = useState();    
    const ref = useRef();

    function handleSubmit (e) {
        
        e.preventDefault();
        if(!name) return;
        callUserName(name)
        setName('');
    }
            
    function callUserName(name) {
        setNewName("Welcome " + name)
    }

    return (
        <>
        <h1> SignIn </h1>

        <PropsGetComp 
            name = {name}
            setName = {setName}
            handleSubmit={handleSubmit}
        />
        
        {
           (newName != null)
            &&
            <GoToFile 
            newName={newName}
            setNewName = {setNewName}
            />
         }
     



        </>


    )
}
export default PropsPassApp;