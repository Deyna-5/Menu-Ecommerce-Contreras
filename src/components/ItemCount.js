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
      <div className='float-left'>
        <div className='block'>
          <div className='inline mr-3' id='item-count-btn-group'>
            <button onClick={ addCount }>+</button>
            <div>{count}</div>
            <button onClick={ subtractCount }>-</button>
          </div>

          <p className='inline font-light tracking-wider leading-relaxed'>¡Últimas {stock} unidades!</p>
        </div>

        <div className='block mt-5' id='item-count-aditiona-buttons'>
          <button className='mr-3' onClick={ restoreCount }>Restaurar</button>
          <button onClick={handleAdd}>Agregar al carrito <i className="fa fa-shopping-cart"></i></button>
        </div>
      </div>
      
    </>
  )
}

export default ItemCount