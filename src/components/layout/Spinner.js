import React from 'react'

const Spinner = () => {
  return (
    <>
      <div id='spiner-container' className='grid grid-cols-12 place-content-center'>
        <div className='cell col-span-12'>
          <div className='pl pl-fade'></div>
          <div className='pl-name'>CARGANDO</div>
        </div>
      </div>
    </>
  )
}

export default Spinner