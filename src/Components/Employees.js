import React, { useEffect, useState } from "react";


function Employees(){
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/employees")
        .then(response =>response.json())
        .then(employees =>setEmployees(employees))
        
    }, []);

    return(
        <>
            <h1>Hello Word..!</h1>
        </>
    )
}
export default Employees