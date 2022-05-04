import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { mangasData } from '../data/mangasData'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  const [mangas, setMangas] = useState([]);
  const { categoryId } = useParams()

  const getMangas = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(categoryId !== undefined){
          const arrayfiltred = mangasData.filter((manga) => {
            return manga.category === categoryId
          })
          resolve( arrayfiltred )
        }else{
          resolve( mangasData )
        }
      }, 2000)
    });
  }

  useEffect(() => {
    getMangas(categoryId).then( getMangasPromise => {
      setMangas(getMangasPromise)
    });
  }, [categoryId])

  return (
    <>
      <div className="text-center mt-10">
        <h1 className="text-5xl font-mono font-semibold text-emerald-600">{props.greeting}</h1>
      </div>

      <h1>Listado Mangas</h1>

      <ItemList mangasList={mangas}></ItemList>
    </>
  )
}

export default ItemListContainer