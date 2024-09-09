import React, { useEffect, useState } from "react";
import DisplayAnimals from "./DisplayAnimals";


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
    //mapping through the domesticsAnimals array to display the wild animals list

    domesticsAnimals.map(domesticsAnimal =>(
                <DisplayAnimals 
                key={domesticsAnimal.id} 
                breed ={domesticsAnimal.breed} 
                image={domesticsAnimal.image} 
                description={domesticsAnimal.description}
                like={domesticsAnimal.like}

                />
                )
            )
        }

        </>
    )
}
export default DomesticAnimals;