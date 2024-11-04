import { useState } from "react";
import "./ToggleSwitch.css"

export const ToggleSwitch = () => {
    const [isOn, SetIsOn] = useState(false);

    const toggleSwitch = () => SetIsOn(!isOn);

    return (
        <div className="toggle-switch" onClick={toggleSwitch}>
            <div className={`switch ${isOn ? 'on' : 'off'}`}>
                <div className="switch-handle"></div>
            </div>
        </div>
    );
};