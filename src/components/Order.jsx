import Nav2 from "./Navbar2"
import { OrderCard } from "./OrderCard"
import { OrderFooter } from "./OrderFooter"
import { OrederNews } from "./OrderNews"

export const Order = () => {
    return <>
        <Nav2 />
        <OrderCard />
        <OrederNews />
        <OrderFooter />
    </>
}