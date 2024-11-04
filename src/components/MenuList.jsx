import bigKingXxl from "../assets/img/menu-img/big-king-xxl.jpg"
import bigKing from "../assets/img/menu-img/big-king.jpg"
import caramelSundae from "../assets/img/menu-img/caramel-sundae.jpg"
import cheeseBurger from "../assets/img/menu-img/cheeseburger.jpg"
import cheesyBites from "../assets/img/menu-img/cheesy-bites.jpg"
import chickenNuggets from "../assets/img/menu-img/chicken-nuggets.jpg"
import chickenRoyale from "../assets/img/menu-img/chicken-royale.jpg"
import chickenWings from "../assets/img/menu-img/chicken-wings.jpg"
import chocolateSundae from "../assets/img/menu-img/chocolate-sundae.jpg"
import Coke from "../assets/img/menu-img/coke.jpg"
import crispyChicken from "../assets/img/menu-img/crispy-chicken.jpg"
import doubleCheeseBurger from "../assets/img/menu-img/double-cheese-burger.jpg"
import doubleSteakHouse from "../assets/img/menu-img/double-steak-house.jpg"
import doubleWhopper from "../assets/img/menu-img/double-whopper.jpg"
import fries from "../assets/img/menu-img/fries.jpg"
import hamBurger from "../assets/img/menu-img/hamburger.jpg"
import kingFillet from "../assets/img/menu-img/king-fillet.png"
import kitKatFusion from "../assets/img/menu-img/kit-kat-fusion.jpg"
import onionRings from "../assets/img/menu-img/onion-rings.jpg"
import plantainCubes from "../assets/img/menu-img/plantain-cubes.png"
import potatoCubes from "../assets/img/menu-img/potato-cubes.png"
import sprite from "../assets/img/menu-img/sprite.jpg"
import steakHouse from "../assets/img/menu-img/steak-house.jpg"
import strawberrySundae from "../assets/img/menu-img/strawberry-sundae.jpg"
import water from "../assets/img/menu-img/water.jpg"
import whopperJnr from "../assets/img/menu-img/whopper-jnr.jpg"
import whopper from "../assets/img/menu-img/whopper.jpg"
import YamFries from "../assets/img/menu-img/Yam-Fries.png"

export const MenuList = () => {
    return (
        <div>
            <div>
                <div></div>
            </div>

            <div>
                <h4>Home / Menu</h4>
            </div>

            <div className="menu-list">
                <h3>Flame Grilled Burgers</h3>
            </div> 
            
            <div className="menu-container">
                <div className="whopper-container">
                    <a href="#"><img src={whopper} alt="whopper" /><h4>Whopper</h4></a>
                </div>

                <div className="steakhouse-container">
                    <a href="#"><img src={steakHouse} alt="steakhouse" /><h4>Steakhouse</h4></a>
                </div>

                <div className="big-king-container">
                    <a href="#"><img src={bigKing} alt="big king" /><h4>Big King</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={doubleWhopper} alt="whopper" /><h4>Double Whopper</h4></a>
                </div>

                <div className="steakhouse-container">
                    <a href="#"><img src={doubleSteakHouse} alt="steakhouse" /><h4>Double Steakhouse</h4></a>
                </div>

                <div className="big-king-container">
                    <a href="#"><img src={bigKingXxl} alt="big king" /><h4>Big King XXL</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={whopperJnr} alt="whopper" /><h4>Whopper Jnr</h4></a>
                </div>

                <div className="steakhouse-container">
                    <a href="#"><img src={cheeseBurger} alt="steakhouse" /><h4>Cheeseburger</h4></a>
                </div>

                <div className="big-king-container">
                    <a href="#"><img src={hamBurger} alt="big king" /><h4>Hamburger</h4></a>
                </div>

                <div className="big-king-container">
                    <a href="#"><img src={doubleCheeseBurger} alt="big king" /><h4>Double Cheese Burger</h4></a>
                </div>
            </div>

            <div className="menu-list">
                <h3>Chicken Burgers</h3>
            </div>

            <div className="menu-container">
                <div className="whopper-container">
                    <a href="#"><img src={chickenRoyale} alt="chicken royale" /><h4>Chicken Royale</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={kingFillet} alt="king chic fillet" /><h4>King Chicken FIllet</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={crispyChicken} alt="crispy chicken" /><h4>Crispy Chicken</h4></a>
                </div>
            </div>

            <div className="menu-list">
                <h3>Sides</h3>
            </div>

            <div className="menu-sides">
                <div className="whopper-container">
                    <a href="#"><img src={plantainCubes} alt="plantain cubes" /><h4>Plantain Cubes</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={potatoCubes} alt="plantain cubes" /><h4>Plantain Cubes</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={YamFries} alt="yam fries" /><h4>Yam Fries</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={chickenWings} alt="chicken wings" /><h4>Chicken Wings</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={cheesyBites} alt="cheesy bites" /><h4>Cheesy Bites</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={chickenNuggets} alt="chicken nuggets" /><h4>Chicken Nuggets</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={onionRings} alt="onion rings" /><h4>Onion Rings</h4></a>
                </div>

                <div className="whopper-container">
                    <a href="#"><img src={fries} alt="fries" /><h4>Fries</h4></a>
                </div>
            </div>

        </div>
    );
}