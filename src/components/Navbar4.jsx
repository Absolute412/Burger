import burgerLogo from "../assets/img/Burger.svg"
import { Link } from "react-router-dom"

const Nav4 = () => {
    return (
        <div className="menu-div">
            <nav className="container">
                <Link to="/"><img src={burgerLogo} className="burger-logo" alt="a pic" /></Link>
                <div className="navlinks">
                    <Link to="/order">Order</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/offers"><button className="offer-button">Offer</button></Link>
                    <Link to="#">Resturants</Link>
                    <Link to="#">Careers</Link>
                    <Link to="#">News</Link>
                </div>
            </nav>
        </div>
    );
}

export default Nav4