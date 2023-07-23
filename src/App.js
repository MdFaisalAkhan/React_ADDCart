import React, { useState } from 'react';
import './App.css';
import Products from './Products';
import CartItem from './CartItem';

const PAGE_PRODUCTS = "products";
const PAGE_CART = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const addToCart = (item)=> {
    setCart([...cart, {...item}]);
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter(item => item !== itemToRemove))
  };

  const navigateTo = (nextpage)=>{
    setPage(nextpage);
  }

  


  return (
    <div className="App">
    <header>
      <button onClick={()=>navigateTo(PAGE_CART)}>Go To Cart ({cart.length})</button>
      <button onClick={()=>navigateTo(PAGE_PRODUCTS)}>View Products</button>
    </header>
    {page === PAGE_PRODUCTS && (<Products addToCart={addToCart}/>)}
    {page === PAGE_CART &&(<CartItem cart={cart} removeFromCart={removeFromCart}/>)}
      </div>
      
  );
}

export default App;
