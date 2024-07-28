import { useContext, useState } from "react";
import { miContexto } from "../Provaider/CartProvider";

function ItemDetail ({detalle}){

    const x = useContext (miContexto)
    const [cantCarro , setCantCarro] = useState(1);

    const sumarAlcarro = () => {
        if (cantCarro > 1 || cantCarro < 10){
            setCantCarro(cantCarro + 1)
        }
    }
    const restarAlcarro = () => {
        if (cantCarro > 1){
            setCantCarro(cantCarro - 1)
        }
    }
    const agregarAlcarro = () => {
        x.setProducto (cantCarro , detalle.title , detalle.price)
    }
    return (
        <article className="flex flex-col items-center gap-4 p-4 text-center text-black bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-red-500">{detalle.title}</h1>
            <p className="px-10 text-xl font-bold">{detalle.description}</p>
            <p className="text-xl font-bold">$ {detalle.price}</p>
            <div className="flex items-center gap-4 text-center">
                <button onClick={sumarAlcarro} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">+</button>
                <button onClick={restarAlcarro} className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">-</button>
                <p className="flex px-4 py-2 text-xl font-bold text-white bg-red-500 rounded-full">{cantCarro}</p>
                <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700" onClick={agregarAlcarro}>Agregar</button>
            </div>

        </article>
    )
       
}

export default ItemDetail ;