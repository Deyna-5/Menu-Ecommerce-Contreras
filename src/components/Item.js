import React from 'react'
import { Link } from 'react-router-dom'

const Item = (props) => {

  return (
    <>
      <div className="border-solid border-slate-300 card card-side bg-base-100 shadow-xl px-10" style={{width: "50% !important"}}>
        <figure><img style={{height: "12rem", width: "9rem"}} src={props.product.img} alt={props.product.title} /></figure>
        <div className="card-body text-center">
          <h2 className="card-title ml-16">{props.product.title}</h2>

          <div>
            <strong className="inline">Precio: </strong>
            <p className="inline">{props.product.price}</p>
          </div>

          <div className='float-right'>
          <a><Link to={`/producto/${props.product.id}`}>Ver más</Link></a>
          </div>

        </div>
      </div>
    </>
  )

}

export default Item