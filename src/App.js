import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';

import { CartProvider } from './context/CartContext';



const App = () => {
  return (
    <div className='App'>
        <BrowserRouter>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer greeting={'Todos nuestros productos'}/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting={'Productos filtrados por categoria'}/>}/>
              <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
              <Route path="/cart" element={<Cart />}/>
                <Route path="/checkout" element={<Checkout />}/>
            </Routes>
          </CartProvider>
        </BrowserRouter>
    </div>
  )
}


export default App;
