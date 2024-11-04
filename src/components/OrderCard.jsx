import Order1 from "../assets/img/order1.jpg"
import KnifeFork from "../assets/img/fork and knife.svg"
import Takeout from "../assets/img/take-away.png"
import Delivery from "../assets/img/delivery-bike.png"


export const OrderCard = () => {
    return <>
    
        <div className="order-background">
            <div className="order-card"> 
                <h1 className="order-card-title">What would you like?</h1>

                <div className="order-content">
                    <img src={KnifeFork} alt="fork and knife" className="placeholder-img" />
                    <span className="placeholder-text">Dine-in Pickup</span>
                    {/* <div className="hidden">Order is served for resturant</div>  */}
                </div>

                <div className="order-content">
                    <img src={Takeout} alt="takeout" className="placeholder-img" />
                    <span className="placeholder-text">Takeout</span>
                    {/* <div className="hidden"> Order is paced for outsiders</div> */}
                </div>

                <div className="order-content">
                    <img src={Delivery} alt="delivery" className="placeholder-img" />
                    <span className="placeholder-text">Delivery</span>
                    {/* <div className="hidden">Order is delivered to you</div> */}
                </div>
            </div>
        </div>
    </>
}