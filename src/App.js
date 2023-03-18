import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className= "app">
    < Navbar/>
    < ItemListContainer greeting={"Bienvenidos a mi Ecommerce"}/>
    </div>
    
  );
}

export default App;
