import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import { getAllProducts as getProducts, getProductsByCategory } from '../data/Firebase'
import Spinner from './Spinner'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  useEffect(() => {
    setTimeout(() => {
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
    }, 500);
  }, [categoryId])

  return (
    <>
      {products.length == 0 ? 
        <Spinner></Spinner>
      :
        <div className='grid grid-cols-12'>
          <div className='col-span-1'></div>

          <div className='col-span-10 mt-5 pt-10' id='item-list-container'>
            <div className='text-center'>
              <h1 className='font-bold text-4xl tracking-wide font-serif text-slate-700'>{categoryId}</h1>
            </div>

            <ItemList productsList={products}></ItemList>
          </div>

          <div className='col-span-1'></div>
        </div>
      }
    </>
  )
}

export default ItemListContainer