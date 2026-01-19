import { useState } from "react";
import "./ToggleSwitch.css";
export const ToggleSwitch = () =>{
    const [isOn, setIsOn] = useState(false);

    return(
        <div className="toggle-switch">

            <div className="switch">
                <span className="switch-state">{isOn ? "ON" : "OFF"}</span>
            </div>

        </div>

    )
}

