import NavBar from "./NavBar";

function Footer (){
    return (
        <footer className="flex-grow">
            <NavBar isHeader={false}/>
        </footer>
    )
}

export default Footer ;