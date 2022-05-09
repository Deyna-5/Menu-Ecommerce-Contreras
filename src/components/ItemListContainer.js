import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productsData } from '../data/productsData'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  const getProducts = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(categoryId !== undefined){
          const arrayfiltred = productsData.filter((product) => {
            return product.category === categoryId
          })
          resolve( arrayfiltred )
        }else{
          resolve( productsData )
        }
      }, 2000)
    });
  }

  useEffect(() => {
    getProducts(categoryId).then( getProductsPromise => {
      setProducts(getProductsPromise)
    });
  }, [categoryId])

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-5xl font-mono font-semibold text-emerald-600">{props.greeting}</h1>
      </div>

      <ItemList productsList={products}></ItemList>
    </>
  )
}

export default ItemListContainer