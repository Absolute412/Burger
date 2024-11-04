import burgerLogo from "../assets/img/Burger.svg"
import { Link } from "react-router-dom"

const Nav2 = () => {
    return <>
        <nav className="container1">
            <Link to="/"><img src={burgerLogo} className="burger-logo" alt="a  pic" /></Link>
            <div className="navlinks1"> 
                <Link to='/order'>Order</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/offers'>Offers</Link>
                <Link to='#'>Resturants</Link>
                <Link to='#'>Careers</Link>
                <Link to='#'>News</Link>
            </div>

            <div className="register-container">
                <button className="register-button">
                    Register
                </button>
            </div>
       </nav>
       <hr className="nav-hr" />
    </>   
}

export default Nav2