import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {

  const [count, setcount] = useState(initial);

  const addCount = () => {
    if(count >= stock){
      setcount(stock)
    }else{
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
      </div>

      
    </>
  )
}

export default ItemCount