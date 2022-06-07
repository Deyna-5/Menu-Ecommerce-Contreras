import React from 'react'
import Header from './Header';
import ItemListLanding from './ItemListLanding';
import ProductsCategory from './ProductsCategory';

const Landing = () => {
  return (
    <>
      <Header word="Plantar"></Header>
      <ProductsCategory></ProductsCategory>
      <ItemListLanding></ItemListLanding>
    </>
  )
}

export default Landing