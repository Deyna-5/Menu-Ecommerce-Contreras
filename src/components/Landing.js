import React from 'react'
import Footer from './Footer';
import Header from './Header';
import ItemListLanding from './ItemListLanding';
import ProductsCategory from './ProductsCategory';

const Landing = () => {
  return (
    <>
      <Header word="Plantar"></Header>
      <ProductsCategory></ProductsCategory>
      <ItemListLanding></ItemListLanding>
      <Footer></Footer>
    </>
  )
}

export default Landing