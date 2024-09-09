import React from "react";
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <>
        <div className="navbar">
        <h1 className="zoo">Petsite</h1>
                <Link to ="/">About Us</Link>
                <Link to ="/WildAnimals">Wild Animals</Link>
                <Link to ="/DomesticAnimals">Domestic Animals </Link>
        </div>

        </>
    )
}

export default Navbar