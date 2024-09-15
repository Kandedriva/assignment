import React, { useEffect, useState } from "react";
import DisplayAnimals from "./DisplayAnimals";

function WildAnimals(){

    const [wildbreeds, setWildbreeds] = useState([])

// http Get request to get the list of wild animals from the server
useEffect(() => {
    fetch("http://localhost:5001/wildAnimals")
    .then(response =>response.json())
    .then(wilds=>setWildbreeds(wilds))
  }, []);
    return(
        <>
        {
    //mapping through the wildbreeds to display the wild animals list

            wildbreeds.map(wildbreed =>(
                <DisplayAnimals 
                key={wildbreed.id} 
                animalid ={wildbreed.id}
                breed ={wildbreed.breed} 
                image={wildbreed.image} 
                description={wildbreed.description}
                like={wildbreed.like}

                />
                )
            )
        }

        </>
    )
}

export default WildAnimals