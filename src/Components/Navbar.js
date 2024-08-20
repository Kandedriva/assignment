import React from "react";
import { Link } from "react-router-dom";


function Navbar(){

    return(
        <>
        <div className="navbar">
            <a>
                <Link to ="/">About Us</Link>
            </a>
            <a>
                <Link to ="/WildAnimals">Wild Animals</Link>
            </a>
            <a>
                <Link to ="/DomesticAnimals">Domestic Animals </Link>
            </a>
        </div>

        </>
    )
}

export default Navbar