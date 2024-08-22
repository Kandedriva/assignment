import React, { useEffect, useState } from "react";


function DomesticAnimals(){
    const [domesticsAnimals, setdomesticsAnimals] = useState([]);
    const [showDetails, setShowdetails] = useState(false)

    // http Get request to get the list of domestic animals from the server
    useEffect(() => {
        fetch("http://localhost:5001/domesticAnimals")
        .then(response =>response.json())
        .then(domesticsAnimals =>setdomesticsAnimals(domesticsAnimals))
        
    }, []);

    function showADetails(){
        setShowdetails(true)

    }

    return(
        <>
        {
            //mapping through the domesticsAnimals array to display the domestic animals list
            domesticsAnimals.map(domesticsAnimal =>(
                <div key={domesticsAnimal.id} className="container">
                    <div>
                        <h2 className="animalsName">{domesticsAnimal.breed} </h2>
                        <img src={domesticsAnimal.image} className="AnimalsImages"/>
                       <div className="comntainer">
                      
                      <p>{domesticsAnimal.characteristics} </p>
              
                       </div>
                    </div>
                  

                </div>
            ))
        }
           </>
    )
}
export default DomesticAnimals;