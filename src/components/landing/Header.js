import React from 'react'
import imageLanding from '../../assets/images/imageLanding.png'

const Header = (props) => {
  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-1 header-default-color'></div>

        <div className='col-span-7 px-32 header-default-color landing-principal-text'>
          <div className='text-left my-10'>
            <h1 className='font-bold text-6xl tracking-wide font-serif text-slate-700'>
              Sientete Libre De <span className='special-font-color'>{props.word}</span> Nuevos Sueños
            </h1>
          </div>
          
          <div className='mt-10'>
            <p className='leading-8 font-normal text-left text-slate-600 text-lg tracking-wider'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elementum tortor. 
              Vestibulum tristique, felis ut auctor ultrices, tortor nunc commodo lorem, id ullamcorper massa tortor ac leo. 
            </p>
          </div>

          <div className='item-count-aditional-buttons my-10'>
            <button className='font-light'>Saber Más <i className='ml-3 fas fa-long-arrow-alt-right text-white'></i> </button>
          </div>
        </div>

        <div className='col-span-3 div-header-color'>
          <img className='img-landing' src={imageLanding}></img>
        </div>

        <div className='col-span-1 header-default-color'></div>
      </div>
    </>
  )
}

export default Header