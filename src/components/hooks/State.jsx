
import '../../components/EV.css';
import {useState} from "react";
export const State = () =>{
  
    const [count, setCount]= useState(0);
     console.log("Parent Component rendered");
    const handleButtonClick =() =>{
        setCount(() => count +1);
       
    }
    console.log(count);


    return (
        <>
        <h1>{count}</h1>
        <button onClick={handleButtonClick} >Increment</button>
        
        <ChildComponent count = {count} />
        </>

    );
};

function ChildComponent({count}){
    console.log("Child Component rendered");
    return(
        <div>
            <h2 className="main-div">Child Component - {count}</h2>
        </div>
    )
};












