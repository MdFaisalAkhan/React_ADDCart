import React from 'react'

const CartItem = ({cart, removeFromCart}) => {
    return (
        <>
    <h1><b>Cart</b></h1>
    <div className="products">
    {cart.map((item, ind)=>(
    <div className="product" key={ind}>
      <h3>{item.name}</h3>
      <h4>{item.cost}</h4>
      <img src={item.image}alt=""/>
      <button onClick={()=> removeFromCart(item)}>Remove Cart</button>
    </div>
    ))}
    </div>
    </>
    )
}

export default CartItem
