import React, { useEffect, useState } from "react";


function DomesticAnimals(){
    const [domesticsAnimals, setdomesticsAnimals] = useState([]);
    const [showDetails, setShowdetails] = useState(false)

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