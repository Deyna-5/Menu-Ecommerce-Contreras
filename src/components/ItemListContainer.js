import React from 'react'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-5xl font-mono font-semibold text-emerald-600">{props.greeting}</h1>
      </div>

      <h1>Listado Mangas</h1>

      <ItemList></ItemList>
    </>
  )
}

export default ItemListContainer