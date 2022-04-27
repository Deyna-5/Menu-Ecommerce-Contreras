import React, { useEffect, useState } from 'react'
import { mangasData } from '../data/mangasData'
import Item from './Item';

const ItemList = () => {

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
      <div className="grid grid-cols-3 gap-3 my-10">
        {mangas.map( m => <Item key={m.id} manga={m}></Item> )}
      </div>
      
    </>
  )
}

export default ItemList