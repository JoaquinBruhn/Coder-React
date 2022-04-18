import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import Cart from "./components/cart/cart";
import { CartContextProvider } from "./context/cartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const mensaje = "buenos dias";

  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer mensaje={mensaje} />} />
            <Route exact path="/category/:category" element={<ItemListContainer />} />
            <Route exact path="/item/:itemID" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
