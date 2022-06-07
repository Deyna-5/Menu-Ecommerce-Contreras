import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getAllProducts as getProducts, getProductsByCategory } from '../data/Firebase'

const ItemListLanding = () => {
  const [products, setProducts] = useState([]);
  const categoryId = "Cactus"

  useEffect(() => {
    if(categoryId === undefined){
      getProducts().then( getProductsPromise => {
        setProducts(getProductsPromise)
      });
    }
    else{
      getProductsByCategory(categoryId).then( getProductsPromise => {
        setProducts(getProductsPromise)
      });
    }
  }, [categoryId])

  return (
    <>
      <div className="text-center mb-10">
        <h1 className='font-bold text-4xl tracking-wide font-serif text-slate-700'>
          NUESTRAS PLANTAS
        </h1>
      </div>

      <div className="grid grid-cols-12 mb-20">
        <div className='col-span-1'></div>

        <div className='col-span-10'>
          <ItemList productsList={products}></ItemList>
        </div>

        <div className='col-span-1'></div>
      </div>  
    </>
  )
}

export default ItemListLanding