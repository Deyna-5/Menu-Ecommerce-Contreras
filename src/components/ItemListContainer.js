import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { productsData } from '../data/productsData'
import ItemList from './ItemList'
import { getAllProducts as getProducts, getProductsByCategory, sendDataToFirebase } from '../data/Firebase'

const ItemListContainer = () => {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams()

  // const getProducts = (categoryId) => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       if(categoryId !== undefined){
  //         const arrayfiltred = productsData.filter((product) => {
  //           return product.category === categoryId
  //         })
  //         resolve( arrayfiltred )
  //       }else{
  //         resolve( productsData )
  //       }
  //     }, 2000)
  //   });
  // }

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
      <div className='grid grid-cols-12'>
        <div className='col-span-1'></div>

        <div className='col-span-10 mt-5 pt-10' id='item-list-container'>
          <div className="text-center">
            <h1 className="font-bold text-4xl tracking-wide font-serif text-slate-700">{categoryId}</h1>
          </div>

          <ItemList productsList={products}></ItemList>
        </div>

        <div className='col-span-1'></div>
      </div>

      {/* <button onClick={sendDataToFirebase}>Send data</button> */}
    </>
  )
}

export default ItemListContainer