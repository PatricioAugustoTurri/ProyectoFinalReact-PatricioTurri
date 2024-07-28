import { Link } from "react-router-dom";

function MisProductos ( {productos} ){
    return (
        <section className="grid items-center gap-10 p-2 mt-10 justify-normal">
                {productos.map((a,b)=>{
                    return (
                    <article className="p-10 text-black transition-all rounded-md shadow-lg bg-slate-100 hover:scale-105 hover:shadow-2xl" key={b}>
                        <img src={a.images} alt={a.title} className="items-center w-1/2 h-auto rounded-lg" />
                        <h3 className="font-bold truncate">{a.title}</h3>
                        <p className="text-xl text-gray-400">$ {a.prece}</p>
                        <Link to ={"/prod/"+a.id} 
                        className="text-xl font-bold text-center text-white bg-blue-500 rounded">Detalles del producto</Link>
                    </article>
                )})}
            
        </section>
    )
}

export default MisProductos ;