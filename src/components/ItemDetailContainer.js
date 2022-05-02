import React, { useEffect, useState } from 'react'
import { mangasData } from '../data/mangasData'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const [manga, setManga] = useState([])

  useEffect(() => {
    getManga();
  }, [])

  const getManga = () => {
    const getMangaPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(mangasData)
      }, 2000)
    })
    getMangaPromise.then(result => {
      setManga(result[Math.round(Math.random() * (5 - 0))])
    })
  }

  return (
    <>
      <ItemDetail manga={manga}></ItemDetail>
    </>
  )
}

export default ItemDetailContainer