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
                breed ={wildbreed.breed} 
                image={wildbreed.image} 
                description={wildbreed.description}
                like={wildbreed.like}

                />
                )
            )
        }
                
                 {/* key={wildbreed.id} className="container">
                    <div>
                        <h2 className="animalsName">{wildbreed.name} </h2>
                        <img src={wildbreed.image} className="AnimalsImages"/>
                       <div className="comntainer">
                      
                      <p>{wildbreed.description} </p>
                      <button className="details-button">Like</button>
                      <button>{wildbreed.like}</button>
              
                       </div>
                    </div>
                  

                </div>
            ))
        } */}

        </>
    )
}

export default WildAnimals