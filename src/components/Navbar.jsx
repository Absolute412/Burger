import burgerLogo from "../assets/img/Burger.svg"
import { Link } from "react-router-dom"
import Slider from "./Slider";

const Nav = () => { 
    return (
        <div>
            <nav className="container">
                <Link to="/"><img src={burgerLogo} className="burger-logo" alt="a pic" /></Link>
                <div className="navlinks">
                    <Link to="/order">Order</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/offers">Offers</Link>
                    <Link to="#">Resturants</Link>
                    <Link to="#">Careers</Link>
                    <Link to="#">News</Link>
                </div>
            
            </nav>
            <Slider/>
        </div>
    );
}

export default Nav