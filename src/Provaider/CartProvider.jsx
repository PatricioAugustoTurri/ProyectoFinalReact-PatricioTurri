import { createContext, useState } from "react";

export const miContexto = createContext ()
const Provider = miContexto.Provider

function CartProvider (props) {
    const [pro , setPro] = useState ([
        {cant: 0 , title: "" , price: 0}]
    )

    const carro = {
        productos: pro,
        setProducto: (a , b , c) => setPro(pro.concat({cant:a , title: b , price: c})),
    }
 
    return (
        <Provider value={carro}>
            {props.children}
        </Provider>
    )
}

export default CartProvider ;