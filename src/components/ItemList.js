import React from 'react'
import Item from './Item';

const ItemList = (props) => {

  return (
    <>
      <div className="grid grid-cols-3 gap-3 my-10">
        {props.productsList.map( p => <Item key={p.id} product={p}></Item> )}
      </div>
    </>
  )
}

export default ItemList