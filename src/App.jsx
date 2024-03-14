
import Header from "./components/Header";
import Product from "./components/Product";
import ImagesSlider from "./components/Imageslider";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Cart from "./components/Cart";

const context= createContext()

function App() {

  const [cart,setCart]=useState([])

 

 



  return (
    <context.Provider
     value={{cart,setCart}}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<ImagesSlider />}></Route>
          <Route path="/product"  element={<Product />}  />
          <Route path="/cart"  element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
export {context}
