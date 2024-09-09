import React from "react";

function DisplayAnimals({breed, image, description, like}){
    function CountLike(){
        console.log("I have been liked")
    }
    return(<>
    <div className="container">
                        <h2 className="animalsName">{breed} </h2>
                        <img src={image} className="AnimalsImages"/>
                       <div className="comntainer">
                      <p>{description} </p>
                      <button onClick={CountLike} className="details-button">Like</button>
                      <button >{like}</button>
              
                       </div>
                    </div>

    </>)
}

export default DisplayAnimals;