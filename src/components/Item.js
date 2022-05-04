import React from 'react'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const Item = (props) => {

  return (
    <>
      <div className="border-solid border-slate-300 card card-side bg-base-100 shadow-xl px-10" style={{width: "50% !important"}}>
        <figure><img style={{height: "12rem", width: "9rem"}} src={props.manga.img} alt={props.manga.title} /></figure>
        <div className="card-body text-center">
          <h2 className="card-title ml-16">{props.manga.title}</h2>

          <div>
            <strong className="inline">Autor: </strong>
            <p className="inline">{props.manga.autor}</p>
          </div>

          <div>
            <strong className="inline">Año de publicación: </strong>
            <p className="inline">{props.manga.year}</p>
          </div>

          <div>
            <ItemCount stock={15} initial={0} />
          </div>

          <div className='float-right'>
          <a><Link to={`/producto/${props.manga.id}`}>Ver más</Link></a>
          </div>

        </div>
      </div>
    </>
  )

}

export default Item