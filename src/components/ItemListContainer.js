import React from 'react'

const ItemListContainer = (props) => {
  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-5xl font-mono font-semibold text-emerald-600">{props.greeting}</h1>
      </div>
    </>
  )
}

export default ItemListContainer