import burgerLogo from "../assets/img/Burger.svg"
import { Link } from "react-router-dom"

const Nav3 = () => {
    return (
        <div className="menu-div">
            <nav className="container">
                <Link to="/"><img src={burgerLogo} className="burger-logo" alt="a pic" /></Link>
                <div className="navlinks">
                    <Link to="/order">Order</Link>
                    <Link to="/menu"><button className="menu-button">Menu</button></Link>
                    <Link to="/offers">Offers</Link>
                    <Link to="#">Resturants</Link>
                    <Link to="#">Careers</Link>
                    <Link to="#">News</Link>
                </div>

                <div className="random-list">
                    <div className="menu-list">
                        <a href="#" className="menu-list-text">Flame Grilled Burgers</a>    
                        <a href="#" className="menu-list-text">Chicken Burgers</a>
                        <a href="#" className="menu-list-text">Sides</a>
                        <a href="#" className="menu-list-text">Drinks</a>
                        <a href="#" className="menu-list-text">Desserts</a>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Nav3