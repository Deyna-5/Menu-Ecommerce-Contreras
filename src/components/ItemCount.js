import React, { useState } from 'react'

const ItemCount = ({stock, initial, handlerAdd}) => {

  const [count, setcount] = useState(initial);

  const addCount = () => {
    if(count < stock){
      setcount(count + 1);
    }
  };

  const subtractCount = () => {
    if(count <= 0){
      setcount(0)
    }else{
      setcount(count - 1);
    }
  };

  const restoreCount = () => {
    setcount(initial)
  };

  const handleAdd = () => { 
    handlerAdd(count)
  }

  return (
    <>
      <div className='text-center my-3'>
        <h2 className='text-xl antialiased font-light tracking-wide'>Cantidad</h2>
        <h3 className='text-2xl antialiased font-semibold'>{count}</h3>

        <div className="btn-group my-2">
          <button onClick={ addCount } className="btn bg-emerald-600 border-emerald-700">+</button>
          <button onClick={ restoreCount } className="btn bg-emerald-600 border-emerald-700">Restaurar</button>
          <button onClick={ subtractCount } className="btn bg-emerald-600 border-emerald-700">-</button>
        </div>

        <button className="btn card-widget-background text-white" onClick={handleAdd}>
          Agregar al carrito

          <i className="fa fa-shopping-cart"></i>
        </button>
      </div>

      
    </>
  )
}

export default ItemCount