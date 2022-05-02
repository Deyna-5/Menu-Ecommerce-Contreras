import React, { useEffect, useState } from 'react'
import { mangasData } from '../data/mangasData'
import ItemList from './ItemList'

const ItemListContainer = (props) => {

  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    getMangas();
  }, [])

  const getMangas = () => {

    const getMangasPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve( mangasData )
      }, 2000)
    })
    getMangasPromise.then(result => {
      setMangas( result )
    });
  }

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