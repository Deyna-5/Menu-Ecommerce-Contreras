import React from 'react'

const CartItem = ({productCart, removeFromCart}) => {
  return (
    <>
      <tr>
        <td className='text-left cart-image'>
          <div className='grid grid-cols-2'>
            <div className='col-span-1'>
              <figure className='inline'><img src={productCart.img} alt={productCart.title} /></figure>
            </div>

            <div className='col-span-1 pt-10'>
              <p className='font-normal tracking-wider leading-relaxed block'>{productCart.title}</p>
              <small className='font-mono tracking-wider leading-relaxed block special-font-color'>Categoria: {productCart.category}</small>
            </div>
          </div>
        </td>
        <td className='text-center'>
          <p className='font-normal tracking-wider leading-relaxed align-top'>$ {productCart.price}</p>
        </td>
        <td className='text-center'>
          <p className='font-normal tracking-wider leading-relaxed align-top'>{productCart.count}</p>
        </td>
        <td className='text-center'>
          <p className='font-normal tracking-wider leading-relaxed align-top'>
            $ {productCart.count * productCart.price}
          </p>
        </td>
        <td className='text-center'>
          <button className='btn px-8 font-bold bg-transparent text-gray-400 border-none' onClick={() => removeFromCart(productCart)}>
            <i className='fas fa-trash-alt mr-1'></i> borrar
          </button>
        </td>
      </tr>
    </>
  )
}

export default CartItem