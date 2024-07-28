import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer (){
    
    const [prod , setProd] = useState ([])
    const para = useParams ()

    useEffect (()=>{
        if (para.id) {
            fetch ("https://dummyjson.com/products/category/" + para.id)
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
                setProd(data.products)  
            })
        } else {
        fetch("https://dummyjson.com/products")
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setProd(data.products)       
        })}
    }, [para.id])

    return (
        <div>
            <ItemList productos={prod}/>
        </div>
    )
}

export default ItemListContainer ;