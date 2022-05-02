import React from 'react'
import Item from './Item';

const ItemList = (props) => {

  return (
    <>
      <div className="grid grid-cols-3 gap-3 my-10">
        {props.mangasList.map( m => <Item key={m.id} manga={m}></Item> )}
      </div>
    </>
  )
}

export default ItemList