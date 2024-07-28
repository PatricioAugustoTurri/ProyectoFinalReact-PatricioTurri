import { Link} from "react-router-dom";

function ItemList ( {productos} ){
    return (
        <section className="grid grid-cols-6 gap-4">
            {productos.map((a , b)=>{
                return (
                    <article key={b} className="p-4 text-black transition-all bg-white rounded-md shadow-lg hover:scale-105 hover:shadow-2xl">
                        <img src={a.images[0]} alt="a.title" className="object-contain w-48 h-auto aspect-square" />
                        <h3 className="font-bold truncate">{a.title}</h3>
                        <p className="text-gray-400">$ {a.price}</p>
                        <Link to ={"/prod/"+a.id} 
                        className="flex p-2 font-bold text-center text-white bg-blue-500 rounded">Detalles del producto</Link>
                    </article>
                )
            })}
        </section>
    )
}

export default ItemList ;