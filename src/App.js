import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className= "app">
    
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path = '/' element ={<ItemListContainer/>}/>
    <Route path = '/category/:categoryId' element ={<ItemListContainer/>}/>
    <Route path="/item/:productId" element={<ItemDetailContainer/>}/>

    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
