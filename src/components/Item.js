import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

  return (
    <>
      <div>
        <div className="grid grid-cols-4 gap-3 card-style my-2">
          <div className='col-span-4 flex justify-center'>
            <figure><img className='item-image' src={props.product.img} alt={props.product.title} /></figure>
          </div>

          <div className='col-span-4'>

            <div className='d-block text-center mt-5 mb-2'>
              <h3 className="font-bold text-1xl tracking-wide font-serif text-slate-700">{props.product.title}</h3>
            </div>

            <div className='text-center mb-5'>
              <small className="inline special-font-color mr-4">Precio: </small>
              <p className="font-bold text-lg tracking-wide text-slate-700 special-font-color inline">${props.product.price}</p>
            </div>

            <div className='text-right mr-5'>
              <a className='special-font-color'><Link to={`/producto/${props.product.id}`}>Ver más...</Link></a>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )

}

export default Item