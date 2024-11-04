import Facebook from "../assets/img/facebook.svg"
import Instagram from "../assets/img/instagram.svg"
import Twitter from "../assets/img/twitter.svg"
import Youtube from "../assets/img/youtube.svg"

export const Footer = () => { 
    return (
        <>
            <div className="footer-parent">
                <div className="footer-child">
                    <div className="main-texts">
                        <a href="/"><h2>Burger King.</h2></a>
                    </div>

                    <div className="main-texts">
                        <a href="#">BK INFO</a>
                        <div className="sub-texts">
                            <p>About Bk</p>
                            <p>Privacy Policy</p>
                            <p>Reach out to US</p>
                            <p>Terms and Conditions</p>
                        </div>
                    </div>

                    <div className="main-texts">
                        <a href="#">BK Cares</a>
                        <div className="sub-texts">
                            <p>Allergens Info</p>
                            <p>Food Quality</p>
                            <p>Responsibility</p>
                        </div>
                    </div>

                    <div className="main-texts">
                        <a href="#">BK AND YOU</a>
                        <div className="sub-texts">
                            <p>Careers</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                </div>

                <div className="line-container">
                    <hr />
                </div>

                <div className="copyright-parent">
                    <div className="copyright">
                        <p>TM & Copyright 2021 Burger King Corperation. All Rights Resernver.</p>
                    </div>
                    <div className="copyright-img">
                        <img src={Facebook} alt="facebook" className="social-img" />
                        <img src={Instagram} alt="instagram" className="social-img" />
                        <img src={Twitter} alt="twitter" className="social-img" />
                        <img src={Youtube} alt="youtube" className="social-img" />
                    </div>
                </div>
            </div>
        </>
    );
}
