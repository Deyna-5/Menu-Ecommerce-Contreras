import React from 'react'
import { Link } from 'react-router-dom'
import allProductsImage from '../assets/images/all-products-image.png'
import justPlantsImage from '../assets/images/plants-category-image.png'
import justPottery from '../assets/images/pottery-category-image.png'

const ProductsCategory = () => {
  return (
    <>
      <div className="text-center mt-30 mb-20">
        <h1 className='font-bold text-4xl tracking-wide font-serif text-slate-700'>
          COMPRA POR CATEGORÍA
        </h1>
      </div>
      
      <div className="grid grid-cols-12">
        <div className='col-span-1'></div>

        <div className='col-span-10'>
          <div className="grid grid-rows-4  grid-flow-col gap-4">
            <div className="row-span-4 all-products-section">
              <Link to="/todo">
                <div>
                  <h2 className='font-bold text-4xl tracking-wide font-serif text-slate-700'>
                    TODOS LOS PRODUCTOS
                  </h2>
                  <img src={allProductsImage} id="all-products-image" className='float-right'></img>
                </div>
              </Link>
            </div>

            <div className="row-span-2 just-pottery-section">
              <Link to="/categoria/Cactus">
                <div>
                  <h2 className='font-bold text-4xl tracking-wide font-serif text-slate-700'>
                    MACETAS
                  </h2>
                  <img src={justPottery} id="just-pottery-image" className='float-right'></img>
                </div>
              </Link>
            </div>

            <div className="row-span-2 just-plants-section">
              <Link to="/categoria/Macetas">
                <div>
                  <h2 className='font-bold text-4xl tracking-wide font-serif text-slate-700'>
                    PLANTAS
                  </h2>
                  <img src={justPlantsImage} id="just-plants-image" className='float-right'></img>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className='col-span-1'></div>
      </div>
    </>
  )
}

export default ProductsCategory