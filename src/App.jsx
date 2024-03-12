
import Header from "./components/Header";
import Product from "./components/Product";
import ImagesSlider from "./components/Imageslider";

import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Cart from "./components/Cart";

function App() {
  const [cart,setCart]=useState([])

  const getItem = (e,item) => {
    e.preventDefault()
       const _cart = cart.find((matchItem)=>matchItem.id == item.id);
    if(_cart){
      const updatedCart = cart.map(product=> product.id==item.id? {...item,qty:product.qty+1}:item);
      setCart(updatedCart)
    }else{
      setCart( [...cart,{...item,qty:1}]);
    }
  };
 const qtnInc =(id)=>{
  let incQty = cart.map((item)=>{
    return item.id==id ? {...item, qty : item.qty +1}:item;
  })
   setCart(incQty )
 }

 const qtnDec =(id)=>{
  let decQty = cart.map((item)=>{
    return item.id==id && item.qty>1? {...item, qty : item.qty - 1}:item;
  })
   setCart(decQty )
 }

 
  const total = cart.reduce((acc,item)=>{
      return acc+item.price*item.qty+40
  },0)
  
  const removeitem = (id)=>{
    const newCart=cart.filter((item)=>item.id!==id)
     setCart(newCart)

  }
 
 


  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" exact element={<ImagesSlider />}></Route>
          <Route path="/product"  element={<Product getItem={getItem} />}  />
          <Route path="/cart"  element={<Cart cart={cart} qtnInc={qtnInc} qtnDec={qtnDec} total={total} removeitem={removeitem }/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
