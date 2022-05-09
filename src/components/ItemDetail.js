import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {

  const [thereAreCount, setThereAreCount] = useState(false);

  const handlerAdd = (count) => { 
    console.log(`Agregaste Al Carrito ${count} productos`)
    setThereAreCount(true)
  }

  return (
    <>
      <div className="border-solid border-slate-300 card card-side bg-base-100 shadow-xl px-10" style={{width: "50% !important"}}>
        <figure><img style={{height: "12rem", width: "9rem"}} src={product.img} alt={product.title} /></figure>
        <div className="card-body text-center">
          <h2 className="card-title ml-16">{product.title}</h2>

          <div>
            <strong className="inline">Precio: </strong>
            <p className="inline">{product.price}</p>
          </div>

          <div>
            {thereAreCount ?
              <button className='btn card-widget-background'><Link to="/cart">Ver Carrito</Link></button>
            : 
              <ItemCount handlerAdd={handlerAdd} stock={15} initial={0} />
            }
            
          </div>

        </div>
      </div>
    </>
  )
}

export default ItemDetail