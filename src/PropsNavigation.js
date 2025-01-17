import React from "react";
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import PropsGetComp from "./PropsGetComp";
import PropsPassApp from './PropsPassApp';
import GoToFile from "./gotoFile";


function PropsNavigation () {
    return (
    <>
    
        <Router>
            
            <Routes>                
                <Route  path='/' exact  Component={PropsPassApp}/>
                <Route path='/PropsGetComp' Component={PropsGetComp}/>
            </Routes>
        </Router>

    </>
    );
}
export default PropsNavigation;
