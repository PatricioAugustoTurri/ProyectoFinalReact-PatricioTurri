import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductos } from "../misProductos"

function ItemDetailContainer (){
    
    const para = useParams()
    const [producto , setProducto] = useState ({})
    console.log(para.id)
    
    useEffect (()=>{
        fetch("https://dummyjson.com/products/"+para.id)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProducto(data)
        })
        getProductos().then((res)=>{
            res.forEach((a)=>{
                if (a.id == para.id){
                    setProducto(a)
                }
            })
        })
    }, [])
    return (
        <ItemDetail detalle={producto}/>
    )
}

export default ItemDetailContainer ;