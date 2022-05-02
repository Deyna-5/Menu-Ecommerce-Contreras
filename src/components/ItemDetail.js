import React from 'react'

const ItemDetail = ({manga}) => {
  return (
    <>
      <div className="border-solid border-slate-300 card card-side bg-base-100 shadow-xl px-10" style={{width: "50% !important"}}>
        <figure><img style={{height: "12rem", width: "9rem"}} src={manga.img} alt={manga.title} /></figure>
        <div className="card-body text-center">
          <h2 className="card-title ml-16">{manga.title}</h2>

          <div>
            <strong className="inline">Autor: </strong>
            <p className="inline">{manga.autor}</p>
          </div>

          <div>
            <strong className="inline">Año de publicación: </strong>
            <p className="inline">{manga.year}</p>
          </div>

          <div>
            <ItemCount stock={15} initial={0} />
          </div>

        </div>
      </div>
    </>
  )
}

export default ItemDetail