import { Route, Routes } from 'react-router';
import './App.css';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Services from './pages/Services/Services';
import Team from './pages/Team/Team';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/shop' element={<Product />}/>
      <Route path='/shop/:slug' element={<ProductDetails />}/>
      <Route path='/team' element={<Team />}/>
      <Route path='/contact' element={<Contact />}/>
      
    </Routes>
      
    </>
  );
}

export default App;
