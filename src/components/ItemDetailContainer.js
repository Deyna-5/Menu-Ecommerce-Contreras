import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { productsData } from '../data/productsData'
import ItemDetail from './ItemDetail'
import { getProductById } from '../data/Firebase'

const ItemDetailContainer = () => {

  const { productId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    // setTimeout(() => {
    //   setProduct(productsData.find(p => p.id == productId))
    // }, 2000)

    getProductById(productId).then(getProductPromise => {
      setProduct(getProductPromise)
    });
  }, [productId])

  return (
    <>
      <ItemDetail product={product}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer