import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mangasData } from '../data/mangasData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const { productId } = useParams()
  const [manga, setManga] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setManga(mangasData.find(m => m.id == productId))
    }, 2000)
  }, [productId])

  return (
    <>
      <ItemDetail manga={manga}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer