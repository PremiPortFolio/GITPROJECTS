import React from "react";  


const PropsGetComp = ({name, setName, handleSubmit}) => {

    return (
        <>
        <form id="form" onSubmit={handleSubmit}>
                <input type="text" height={40} size={20} 
                placeholder="UserName" 
                value={name}
                onChange={ (e) => setName(e.target.value)}
               
                ></input>
        
                <button size={30}> click </button>
                
                    </form>

       
        </>
    )
}
export default PropsGetComp;