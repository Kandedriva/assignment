import React, { useEffect, useState } from "react";

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
                <div key={wildbreed.id} className="container">
                    <div>
                        <h2 className="animalsName">{wildbreed.name} </h2>
                        <img src={wildbreed.image} className="AnimalsImages"/>
                       <div className="comntainer">
                      
                      <p>{wildbreed.description} </p>
              
                       </div>
                    </div>
                  

                </div>
            ))
        }

        </>
    )
}

export default WildAnimals