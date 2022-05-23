import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';
import CartItem from './CartItem';

// FIREBASE
import { collection, doc, setDoc, Timestamp } from "firebase/firestore/lite"
import {firestoreDB} from "../data/Firebase"

const Cart = () => {
  const {cart, removeFromCart, clearCart, totalPrice} = useCartContext()
  const [cartOrderId, setcartOrderId] = useState(0);

  const handlerBuy = () => {
    const buyOrder = {
      buyer: {
        name: 'Deyna Contreras',
        phone: '123456789',
        email: 'deyna_contreras@boximail.com'
      },
      items: [...cart],
      total: totalPrice
    }
    createBuyOrder(buyOrder);
    clearCart();
  }

  function createBuyOrder(buyOrder){
    const buyTimestap = Timestamp.now();
    const orderWithDate = {...buyOrder, date: buyTimestap}
    const myCollection = collection(firestoreDB, 'orders');

    const newDoc = doc(myCollection);
    setDoc(newDoc, orderWithDate)
    .then(() => {
      setcartOrderId(newDoc.id)
    });
  }

  const closeCheckout = () => { 
    setcartOrderId(0)
  }

  if(cart.length === 0 && cartOrderId == 0){
    return (
    <div style={{textAlign: 'center'}}>
      <h2>No hay items en el carrito</h2>
      <button style={{backgroundColor: "#688F4E", border: "1px solid #688F4E"}} className="my-10 btn px-8 font-light"><Link to="/todo">Ver todo</Link></button>
    </div>
    )
  }else if(cart.length === 0 && cartOrderId != 0){
    return (
      <div style={{textAlign: 'center'}} className='bg-emerald-300 border-emerald-300 text-white py-10'>
        <h2>Felicidades por tu compra!</h2>
        <h3>Tu número de orden es: {cartOrderId}</h3>

        <div>
          <i className='far fa-thumbs-up mt-5' style={{fontSize: '60px'}}></i>
        </div>

        <button className='btn mt-10 px-8 font-light bg-emerald-600 border-emerald-600 text-white' onClick={closeCheckout}>
          Cerrar
        </button>
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
            <button className='float-right btn px-8 font-light bg-emerald-300 border-emerald-300 text-white' onClick={handlerBuy}>
              <i className='fa fa-check-circle text-white mr-1'></i>
              COMPRAR
            </button>

            <button className='float-right btn px-8 font-light bg-rose-800 border-rose-800 text-white mr-4' onClick={clearCart}>
              <i className='fas fa-trash-alt text-white mr-1'></i>
              VACIAR CARRITO
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default Cart