import "./Header.css"
import { useCart } from "../context/CartContext"


export default function Header(){
    const {amount}=useCart()
    return(
        <header>
            <p>Shopping App</p>
            <p>สินค้าในตะกร้า : {amount}</p>
        </header>
    )



}