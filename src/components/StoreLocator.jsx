import { TiLocationArrow } from "react-icons/ti";
import React, { useState } from "react";
import person from "../assets/img/person1.png"

const StoreLocator = () => {
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        console.log("Searching for:", address);
    };

    return(
        <>
            <div className="store-locator">
                <div className="store-container">
                    <div className="store-content">
                        <h2 className="store-text">Store locator</h2>
                        <p className="find-text">Find a location nearby</p>
                        
                        <form onSubmit={handleSubmit} className="search-form">
                            <input 
                                type="text"
                                placeholder="Your address" 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="input-box"
                            />
                            <button type="submit" className="search-button">
                                <TiLocationArrow size={24} />
                            </button>
                        </form>
                    </div>

                    <div className="illustrator">
                        <div className="person">
                            <img src={person} alt="a random person" width={"50%"} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StoreLocator