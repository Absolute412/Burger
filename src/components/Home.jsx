import { Download } from "./Download"
import Navbar from "./Navbar"
import { News } from "./News"
import StoreLocator from "./StoreLocator"
import { Footer } from "./Footer"


export const Home = () => {
    return <> 
        <Navbar/>
        <StoreLocator/>
        <Download/>
        <News/>
        <Footer/>
    </>
}