import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getProductById } from '../data/Firebase'
import Spinner from './Spinner'

const ItemDetailContainer = () => {

  const { productId } = useParams()
  const [product, setProduct] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getProductById(productId).then(getProductPromise => {
        setProduct(getProductPromise)
      });
    }, 1000);
  }, [productId])

  return (
    <>
      {product.length == 0 ? 
        <Spinner></Spinner>
      :
        <ItemDetail product={product}></ItemDetail>
      }
    </>
  )
}

export default ItemDetailContainer