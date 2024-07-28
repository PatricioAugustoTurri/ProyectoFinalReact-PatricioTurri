import { useContext, useState } from "react";
import { miContexto } from "../Provaider/CartProvider";
import { userContext } from "../Provaider/UserProvider";

function Checkout (){
    const y =useContext (userContext)
    const x = useContext (miContexto)
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault ()
        y.setUser (nombre , email)
        setNombre ('')
        setEmail ('')
        }
    
    if (x.productos.map(element => element[0]) == "" && x.productos.map(element => element[1]) == ""){
        return(<h1>No hay productos en el carrito</h1>)
    } else {
    return(
        <div className="flex flex-col p-4">
            {x.productos.map((element)=>{
                return (
                    <article className="p-4 overflow-hidden font-bold text-center text-black bg-white rounded-lg shadow-lg">
                        <h1 className="text-3xl font-bold text-red-500">{element.title}</h1>
                        <p className="text-xl font-bold">Cantidad: {element.cant}</p>
                        <p className="text-xl font-bold">$ {element.price}</p>
                    </article>
                )
            })}
            <p>Total: $ {x.productos.map(element => element.price*element.cant).reduce((a,b) => a + b)}</p>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} className="text-black border-2 border-black rounded-lg"/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="text-black border-2 border-black rounded-lg"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
    };
}

export default Checkout ;