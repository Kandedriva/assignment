import React from "react";
import { useState } from "react";

function DisplayAnimals({breed, image, description, like, animalid}){



   let [liked, setLiked] = useState(like);
    function CountLike(){
        fetch(`http://localhost:5001/animalslike/${animalid}`,
        {
            method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ like: liked += 1})}
        )
        .then(response=>response.json())
        .then(setLiked(liked))
        
        
    }
    return(<>
    <div className="container">
                        <h2 className="animalsName">{breed} </h2>
                        <img src={image} className="AnimalsImages"/>
                       <div className="comntainer">
                      <p>{description} </p>
                      <button onClick={()=>CountLike(liked)} className="details-button">Like</button>
                      <button className="like-button">{liked} likes</button>
              
                       </div>
                    </div>

    </>)
}

export default DisplayAnimals;