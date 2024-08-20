import React from "react";
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <>
        <div className="navbar">
            <li>
                <Link to ="/">About Us</Link>
            </li>
            <li>
                <Link to ="/WildAnimals">Wild Animals</Link>
            </li>
            <li>
                <Link to ="/DomesticAnimals">Domestic Animals </Link>
            </li>
        </div>

        </>
    )
}

export default Navbar