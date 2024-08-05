import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./firebaseConfig";

const db = getFirestore (app) ;
const coleccionDeProductos = collection (db, "productos");

export function generarMisProductos (si){

const producto = {
}
        if (si === true){
        addDoc(coleccionDeProductos , producto);
        }
}

export function getProductos (){
        return getDocs(coleccionDeProductos)
                .then((res)=>{
                        const productos= res.docs.map((doc)=>{
                                const producto = doc.data();
                                producto.id = doc.id;
                                return producto;
                        })
                        return productos;

                })
                .catch((err)=>{
                    console.log(err)
                })
                
}
