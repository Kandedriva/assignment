import React, { useEffect, useState } from "react";


function DomesticAnimals(){
    const [domesticsAnimals, setdomesticsAnimals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/domesticAnimals")
        .then(response =>response.json())
        .then(domesticsAnimals =>setdomesticsAnimals(domesticsAnimals))
        
    }, []);

    return(
        <>
        {
            domesticsAnimals.map(domesticsAnimal =>(
                <div key={domesticsAnimal.id}>
                    <div>
                        <h3>{domesticsAnimal.breed} </h3>
                        <img src={domesticsAnimal.image} />
                        <p>{domesticsAnimal.characteristics}</p>
                    </div>
                </div>
            ))
        }
            
        </>
    )
}
export default DomesticAnimals