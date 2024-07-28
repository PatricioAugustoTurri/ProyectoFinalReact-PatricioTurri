import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Checkout from "./Checkout";
import MisProductosConteiner from "./MisProductosConteiner";

function Main (){
    return (
        <main className="flex flex-col min-h-screen">
            <Routes>
                <Route path="/" element={<h1>Home</h1>}/>
                <Route path="/prod" element={<ItemListContainer/>}/>
                <Route path="/category/:id" element={<ItemListContainer/>}/>
                <Route path="/misfotos" element={<MisProductosConteiner/>}    />
                <Route path ="/prod/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Checkout/>}/>
            </Routes>
        </main>
    )
}

export default Main ;