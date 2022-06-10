import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useCartContext from '../../context/CartContext';
import CartItem from './CartItem';

// FIREBASE
import { collection, doc, setDoc, Timestamp } from "firebase/firestore/lite"
import {firestoreDB} from "../../data/Firebase"

const Cart = () => {
  const {cart, removeFromCart, clearCart, totalPrice, totalCount} = useCartContext()
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
      <>
        <div className="grid grid-cols-12 mt-4 py-20" id='invoice-show'>
          <div className='col-span-1'></div>

          <div className='col-span-10'>
            <div style={{textAlign: 'center'}} className='special-font-color py-10 success-message'>
              <h2>No hay items en el carrito</h2>

              <div className='item-count-aditional-buttons mt-10'>
                <button><Link to="/todo">Ver todo</Link></button>
              </div>
            </div>
          </div>

          <div className='col-span-1'></div>
        </div>
      </>
    )
  }else if(cart.length === 0 && cartOrderId != 0){
    return (
      <div className="grid grid-cols-12 mt-4 py-20" id='invoice-show'>
        <div className='col-span-1'></div>

        <div className='col-span-10'>
          <div style={{textAlign: 'center'}} className='special-font-color py-10 success-message'>
            <h2>Felicidades por tu compra!</h2>
            <h3>Tu número de orden es: {cartOrderId}</h3>

            <div>
              <i className='far fa-thumbs-up mt-5' style={{fontSize: '60px'}}></i>
            </div>

            <div className='item-count-aditional-buttons mt-10'>
              <button onClick={closeCheckout}>
                Cerrar
              </button>
            </div>
            
          </div>
        </div>

        <div className='col-span-1'></div>
      </div>
    )
  }else{
    return(
      <>
        <div className="grid grid-cols-12 pt-4">
          <div className='col-span-1'></div>

          <div className='col-span-10 pt-10' id='cart-view'>
            <table className="table w-full">
              <thead>
                <tr>
                  <th className='font-semibold tracking-wider leading-relaxed'>Producto</th>
                  <th className='font-semibold tracking-wider leading-relaxed text-center'>Precio</th>
                  <th className='font-semibold tracking-wider leading-relaxed text-center'>Cantidad</th>
                  <th className='font-semibold tracking-wider leading-relaxed text-center'>Subtotal</th>
                  <th className='font-semibold tracking-wider leading-relaxed text-center'></th>
                </tr>
              </thead>
              <tbody>
                {cart.map(itemCart => <CartItem key={itemCart.id} productCart={itemCart} removeFromCart={removeFromCart}></CartItem>)}
              </tbody>
            </table>
          </div>
          

          <div className='col-span-1'></div>
        </div>

        <div className="grid grid-cols-12 pb-20">
          <div className='col-span-1'></div>

          <div className='col-span-10'>
            <div className='grid grid-cols-2'>
              <div className='col-span-1 item-count-aditional-buttons mt-3'>
                <button onClick={clearCart}>
                  <i className='fas fa-trash-alt text-white mr-1'></i>
                  Vaciar Carrito
                </button>
              </div>

              <div className='col-span-1 mt-3'>
                <div className='float-right cart-invoice'>
                  <div className='d-block'>
                    <p className='inline-block tracking-wider leading-relaxed text-left'>cantidad de items:</p>
                    <p className='inline-block tracking-wider leading-relaxed text-right'>{totalCount}</p>
                  </div>

                  <div className='d-block'>
                    <p className='inline-block tracking-wider leading-relaxed text-left'>gastos de envío:</p>
                    <p className='inline-block tracking-wider leading-relaxed text-right'>¡envío gratis!</p>
                  </div>

                  <div className='d-block'>
                    <p className='inline-block tracking-wider leading-relaxed text-left font-semibold'>TOTAL:</p>
                    <p className='inline-block tracking-wider leading-relaxed text-right font-semibold'>$ {totalPrice}</p>
                  </div>

                  <div className='item-count-aditional-buttons mt-3'>
                    <button className='btn-block' onClick={handlerBuy}>
                      <i className='fa fa-check-circle text-white mr-1'></i>
                      Finalizar Compra
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='col-span-1'></div>
        </div>
      </>
    )
  }
}

export default Cart