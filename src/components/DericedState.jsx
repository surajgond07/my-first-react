import {useState} from "react";

export const DerivedState = ()=>{
    const [users, setUsers] = useState([
        {name: "Alice", age: 25},
        {name: "Bob", age: 30},
        {name: "Charlies", age: 35},
        {name: "Angles", age: 45},
    ]);

    return(
        <div className="main-div">
            <h1>User List</h1>
            <ul>
                {users.map((curElem, index) =>{
                    return (
                    
                        <li key={index}>{`Name: ${curElem.name}, Age: ${curElem.age}`}</li>
                   
                    )
                })}
            </ul>

        </div>
    )

    
};



