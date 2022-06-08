import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-12 pt-10 pb-20" id="footer">
        <div className='col-span-1'></div>

        <div className='col-span-4'>
          <h2 className='font-bold font-serif normal-case text-2xl plant-shop-logo'>PlantShop.</h2>

          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-5'>PlantShop te ofrece la mejor alternativa para encontrar plantas para todo tipo de clientes. Disfruta junto amigos y familiares</p> 
        </div>

        <div className='col-span-2'>
          <h2 className='font-normal normal-case text-2xl plant-shop-logo tracking-wider'>Servicios</h2>

          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-5'>Precio Productos</p>
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-1'>Ayuda & Soporte</p>
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-1'>FAQ</p>
        </div>

        <div className='col-span-2'>
          <h2 className='font-normal normal-case text-2xl plant-shop-logo tracking-wider'>Productos</h2>
        
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-5'>Sala de estar</p>
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-1'>Comedor</p>
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-1'>Oficina</p>
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-1'>Exteriores</p>
        </div>

        <div className='col-span-2'>
          <h2 className='font-normal normal-case text-2xl plant-shop-logo tracking-wider'>Contacto</h2>

          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-5'>Av. Matta 19987</p>
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-1'>Av. Mackenna 1923</p>
          <p className='font-light text-lg text-left tracking-wider leading-relaxed mt-1'>plantshop@example.com</p>
        </div>

        <div className='col-span-1'></div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='col-span-1'></div>

        <div className='col-span-8'>
          <small>Terms and Conditions</small>
        </div>

        <div className='col-span-2'>
          <small>©PlantShop | All rigth reserved</small>
        </div>

        <div className='col-span-1'></div>
      </div>
    </>
  )
}

export default Footer
