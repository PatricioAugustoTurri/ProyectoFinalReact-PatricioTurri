import { useEffect, useState } from "react";
import { generarMisProductos, getProductos } from "../misProductos";
import MisProductos from "./MisProductos";


function MisProductosConteiner (){

    generarMisProductos(false);
    const [productos , setProductos] = useState ([])
    useEffect(()=>{
        getProductos().then((res)=>{
            console.log(res)
            setProductos(res)
        })
    } , [])

    return (
        <div>
            <MisProductos productos={productos}/>
        </div>
    )
}

export default MisProductosConteiner ;
