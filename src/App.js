
import './App.css';
import Navbar from './components/navbar/navbar';
import ItemListContainer from './components/itemListContainer/itemListContainer';

function App() {
  const mensaje = "buenos dias"

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer mensaje={mensaje}/>
    </div>
  );
}

export default App;
