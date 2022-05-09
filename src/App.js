import './App.css';
import { NavBar } from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './components/Cart';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Header word="Plantar"></Header>}></Route>

        <Route path='/categoria/:categoryId' element={<ItemListContainer greeting="Categorías"></ItemListContainer>}></Route>
        <Route path='/producto/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;