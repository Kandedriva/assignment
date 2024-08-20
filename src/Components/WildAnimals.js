import React, { useEffect, useState } from "react";

function WildAnimals(){

    const [wildbreeds, setWildbreeds] = useState([])

  useEffect(() => {
    fetch("http://localhost:5001/wildAnimals")
    .then(response =>response.json())
    .then(wilds=>setWildbreeds(wilds))
  }, []);
    return(
        <>
        {
            wildbreeds.map(wildbreeds =>(
                <div key={wildbreeds.id}>
                    <div>
                        <h3>{wildbreeds.name} </h3>
                        <img src={wildbreeds.image} />
                        <p>{wildbreeds.description}</p>
                    </div>
                </div>
            ))
        }

        </>
    )
}

export default WildAnimals