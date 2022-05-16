import React from 'react'

const CartItem = ({productCart, removeFromCart}) => {
  return (
    <>
      <div className='col-span-12'>
        <div key={productCart.id} className="border-solid border-slate-300 card card-side bg-base-100 shadow-xl px-10" style={{width: "50% !important"}}>
          <figure><img style={{height: "12rem", width: "9rem"}} src={productCart.img} alt={productCart.title} /></figure>
          <div className="card-body text-center">
          <h2 className="card-title ml-16">{productCart.title}</h2>
        
            <div>
              <strong className="inline">Precio: </strong>
              <p className="inline">$ {productCart.price}</p>
            </div>
        
            <div>
              <strong className="inline">Cantidad:</strong>
              <p className="inline">{productCart.count}</p>
            </div>

          <div>
            <strong className="inline">Total:</strong>
            <p className="inline">$ {productCart.count * productCart.price}</p>
          </div> 

          <div className='float-right'>
            <button className='btn px-8 font-light bg-rose-800 border-rose-800 text-white' onClick={() => removeFromCart(productCart)}>
              <i className='	fas fa-trash-alt text-white mr-1'></i>
              Borrar
            </button>
          </div>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default CartItem