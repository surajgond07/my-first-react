import { useState } from "react";
import "./ToggleSwitch.css";
import { IoIosSwitch } from "react-icons/io";




export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);
    const handleToggleSwitch= () => {
        setIsOn(!isOn);
    }

    const checkIsOn = isOn ? "on" : "off";
    
    const toggleBGColor= {backgroundColor: isOn ? "#4caf50"  : ""  };

    return(
        <>
        <h1 style={{ textAlign: "center"}}>Toggle Switch</h1>

        <IoIosSwitch style={{fontSize: "80px",color: "red", textAlign: "center"}} />
   <div className="toggle-switch" style={toggleBGColor} onClick= {handleToggleSwitch}>

            <div className={`switch ${checkIsOn} `}>
                <span className="switch-state">{checkIsOn}</span>
            </div>

        </div>
        </>
     

    )
}

