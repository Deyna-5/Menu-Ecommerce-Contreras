import React from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';

const CardWidget = () => {
  const {totalCount, totalPrice} = useCartContext()

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex="0" className="btn btn-ghost btn-circle card-widget-background">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" style={{color: "white"}} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">{totalCount}</span>
          </div>
        </label>

        <div tabIndex="0" className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
          <div className="card-body">
            <span className="font-bold text-lg">{totalCount} Productos</span>
            <span className="text-info">Total: ${totalPrice}</span>
            <div className="card-actions">
              <button style={{backgroundColor: "#688F4E", border: "1px solid #688F4E"}} className="btn px-8 font-light"><Link to="/cart">Ver carrito</Link></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardWidget