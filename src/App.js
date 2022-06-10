import './App.scss';
import { NavBar } from './components/layout/NavBar';
import ItemDetailContainer from './components/item/ItemDetailContainer';
import ItemListContainer from './components/item/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/cart/Cart';
import {CartContextProvider} from './context/CartContext'
import Landing from './components/landing/Landing';
import Footer from './components/layout/Footer';


function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Landing></Landing>}></Route>

          <Route path='/categoria/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/producto/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/todo' element={<ItemListContainer></ItemListContainer>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;