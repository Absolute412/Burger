import Facebook from "../assets/img/facebook.svg"
import Instagram from "../assets/img/instagram.svg"
import Twitter from "../assets/img/twitter.svg"
import Youtube from "../assets/img/youtube.svg"
import "./footer.css"
import { ToggleSwitch } from "./ToggleSwitch"

export const OrderFooter = () => {
    return (
        <>
            <div className="contrast-container">
                <div className="contrast">
                    <div className="contrast-text-container">
                        <label 
                        htmlFor="contrast-text-container" 
                        className="contrast-text">
                            High Contrast
                        </label>
                    </div>
                    <ToggleSwitch />
                </div>
            </div>


            <div className="o-footer-parent">
                <div className="o-footer-child">
                    <div className="o-main-texts1">
                        <a href="#"><h2>BURGER KING.</h2></a>
                    </div>

                    <div className="o-main-texts">
                        <a href="#">BK INFO</a>
                        <div className="o-sub-texts" >
                            <p>About Bk</p>
                            <p>Privacy Policy</p>
                            <p>Reach out to US</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>

                    <div className="o-main-texts">
                        <a href="#">BK Cares</a>
                        <div className="o-sub-texts">
                            <p>Allergens Info</p>
                            <p>Food Quality</p>
                            <p>Responsibility</p>
                        </div>
                    </div>

                    <div className="o-main-texts">
                        <a href="#">BK AND YOU</a>
                        <div className="o-sub-texts">
                            <p>Careers</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>


                <div className="o-copyright-parent">
                    <div className="o-copyright">
                        <p>TM & Copyright 2021 Burger King Corperation. All Rights Resernver.</p>
                    </div>
                    <div className="o-copyright-img">
                        <img src={Facebook} alt="facebook" className="o-social-img" />
                        <img src={Instagram} alt="instagram" className="o-social-img" />
                        <img src={Twitter} alt="twitter" className="o-social-img" />
                        <img src={Youtube} alt="youtube" className="o-social-img" />
                    </div>
                </div>
            </div>
        </>
    );
}