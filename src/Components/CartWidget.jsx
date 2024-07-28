import { useContext } from "react";
import { Link } from "react-router-dom";
import { miContexto } from "../Provaider/CartProvider";
import {ShoppingCart} from "lucide-react"

function CartWidget (){
    const cant =useContext (miContexto)

    return (
        <div>
            <Link to="/cart" className="flex items-center justify-center gap-1">{cant.productos.map(element => element.cant).reduce((a,b) => a + b)} {<ShoppingCart/>}</Link>
        </div>
    )
}

export default CartWidget ;
