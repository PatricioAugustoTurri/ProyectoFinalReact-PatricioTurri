import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

function Header (){

    return (
        <header className="flex items-center justify-between p-5 text-center truncate">
            <h1 className="text-5xl font-bold">Patricio Turri</h1>
            <div className="flex items-center justify-between gap-5 text-base font-bold">
                <NavBar isHeader={true}/>
                <CartWidget/>
            </div>
        </header>
    )
}

export default Header ;