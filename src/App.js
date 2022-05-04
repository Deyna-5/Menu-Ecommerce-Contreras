import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Hola Bienvenido"></ItemListContainer>}></Route>
        <Route path='/categoria/:categoryId' element={<ItemListContainer greeting="Categorías"></ItemListContainer>}></Route>
        <Route path='/producto/:productId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;