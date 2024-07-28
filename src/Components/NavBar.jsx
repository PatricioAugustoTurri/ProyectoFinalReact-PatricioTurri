import { Link } from "react-router-dom";

function NavBar (props){
   
   const headerLinks = [
    {texto : "Todos los productos", ruta : "/prod"},
    {texto : "Motos", ruta : "/category/motorcycle"},
    {texto : "Vehículos", ruta : "/category/vehicle"},
    {texto : "Mis fotos", ruta : "/misfotos"},
   ] ;

   const footerLinks = [
       {texto: "Contacto", ruta: "/contacto"},
       {texto: "Instagram", ruta: "/instagram"},
       {texto: "Facebook", ruta: "/facebook"},
   ] ;

   const metodo = `flex gap-4 ${props.isHeader ? "items-center" : "justify-center text-base p-7 bg-white text-black"}`
   
   const funcionHeader = (links)=>{
        return links.map((a , b)=><Link key={b} to={a.ruta}>{a.texto}</Link>)
   }
    return (
        <nav className={metodo}>
            <Link to="/">Home</Link>
            {props.isHeader ? funcionHeader(headerLinks) : funcionHeader(footerLinks)}
        </nav>
    )
}
    export default NavBar ;

    