import React from "react";

function DisplayAnimals({breed, image, description, like}){
    return(<>
    <div className="container">
                        <h2 className="animalsName">{breed} </h2>
                        <img src={image} className="AnimalsImages"/>
                       <div className="comntainer">
                      
                      <p>{description} </p>
                      <button className="details-button">Like</button>
                      <button>{like}</button>
              
                       </div>
                    </div>

    </>)
}

export default DisplayAnimals;