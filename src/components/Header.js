import React from 'react'
import imageLanding from '../assets/images/imageLanding.png'

const Header = (props) => {
  return (
    <>
      <div className="grid grid-cols-12">

        <div className='col-span-1 header-default-color'></div>

        <div className='col-span-7 px-32 header-default-color landing-principal-text'>
          <div className='text-left my-10'>
            <h1 className='font-bold text-6xl tracking-wide font-serif text-slate-700'>
              Sientete Libre De <span style={{color: "#76935D"}}>{props.word}</span> Nuevos Sueños
            </h1>
          </div>
          
          <div className='mt-10'>
            <p className='leading-8 font-normal text-left text-slate-600 text-lg tracking-wider'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec elementum tortor. Vestibulum tristique, felis ut auctor ultrices, tortor nunc commodo lorem, id ullamcorper massa tortor ac leo. 
            </p>
          </div>

          <div>
            <button style={{backgroundColor: "#688F4E", border: "1px solid #688F4E"}} className="my-10 btn px-8 font-light">Saber más <i className='ml-3 fas fa-long-arrow-alt-right' style={{color: "white"}}></i> </button>
          </div>
        </div>

        <div className='col-span-3 div-header-color'>
          <img className="img-landing" src={imageLanding}></img>
        </div>

        <div className='col-span-1 header-default-color'></div>

      </div>
    </>
  )
}

export default Header