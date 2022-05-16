import React from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';
import CartItem from './CartItem';

const Cart = () => {
  const {cart, removeFromCart, clearCart, totalPrice} = useCartContext()

  if(cart.length === 0){
    return (
    <div style={{textAlign: 'center'}}>
      <h2>No hay items en el carrito</h2>
      <button style={{backgroundColor: "#688F4E", border: "1px solid #688F4E"}} className="my-10 btn px-8 font-light"><Link to="/todo">Ver todo</Link></button>
    </div>
    )
  }else{
    return(
      <>
        <div className="grid grid-cols-12">
          {cart.map(itemCart => <CartItem key={itemCart.id} productCart={itemCart} removeFromCart={removeFromCart}></CartItem>)}
        </div>

        <div className="bg-slate-200 border-slate-200 grid grid-cols-3 py-3">
          <div className='col-span-1 pl-10'>
            <p><span className='text-2xl font-semibold'>Total:</span> ${totalPrice}</p>
          </div>

          <div className='col-span-1'></div>

          <div className='col-span-1 pr-10'>
            <button className='float-right btn px-8 font-light bg-rose-800 border-rose-800 text-white' onClick={clearCart}>
              <i className='	fas fa-trash-alt text-white mr-1'></i>
              VACIAR CARRITO
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Cart