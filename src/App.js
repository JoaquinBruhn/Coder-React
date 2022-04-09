import "./App.css";
import Navbar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemListContainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/itemDetailContainer";

function App() {
  const mensaje = "buenos dias";

  return (
    <div className="App">
      <Navbar />
      <ItemDetailContainer />
      <ItemListContainer mensaje={mensaje} />
    </div>
  );
}

export default App;
