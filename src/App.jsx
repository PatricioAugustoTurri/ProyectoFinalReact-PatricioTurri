import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./Provaider/CartProvider";
import UserProvider from "./Provaider/UserProvider";

function App (){
  return(
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <Header/>
          <Main/>
          <Footer/>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App ;
