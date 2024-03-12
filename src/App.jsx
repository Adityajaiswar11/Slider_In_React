
import Cart from './components/Cart';
import Header from './components/Header'
import ImagesSlider from './components/Imageslider'
import Product from './components/Product'

import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <ImagesSlider/>
    
      <Routes>
        <Route path="/" exact element={<Product/>}>
    
        </Route>
          <Route path="/product/:id" element={<Cart/>} />
      </Routes>
    </BrowserRouter>

 
    
 
    </>
  )
}

export default App
