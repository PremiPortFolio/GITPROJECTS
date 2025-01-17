import React from "react";  

import GoToFile from "./gotoFile";

const PropsGetComp = ({name, setName, handleSubmit}) => {

    
    return (
        <>
        <form id="form" onSubmit={handleSubmit} >
            <input type="text" height={40} size={20} 
                placeholder="UserName" 
                name = "username"
                value={name}
                onChange={ (e) => setName(e.target.value)}
                >
          </input>
        
            <input type='submit' size={30} value='submit'/>
                
        </form>
        </>
    )
}
/*
    PropsGetComp.defaultProps = {
        name : "SignIn User" // Default value displayed when no data received.
    }
*/
export default PropsGetComp;