import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const mensaje = "buenos dias";

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ItemListContainer mensaje={mensaje} />}/>
        <Route exact path="/category/:category" element={<ItemListContainer />}/>
        <Route exact path="/item/:itemID" element={<ItemDetailContainer />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
