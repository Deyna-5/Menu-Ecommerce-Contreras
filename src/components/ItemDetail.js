import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import useCartContext from '../context/CartContext';
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {

  const [thereAreCount, setThereAreCount] = useState(false);

  const { addToCart } = useCartContext();

  const handlerAdd = (count) => { 
    setThereAreCount(true);
    addToCart(product, count)
  };

  return (
    <>
      <div className='grid grid-cols-12'>
        <div className='col-span-1'></div>

        <div className='col-span-10 mt-5' id="show-product">
          <div className='d-block mt-5'>
            <a className="text-slate-800 font-semibold tracking-wider leading-relaxed"><Link to={'/'}>Inicio - </Link></a>
            <a className="text-slate-800 font-semibold tracking-wider leading-relaxed"><Link to="/todo">Productos - </Link></a>
            <p className='inline  special-font-color font-semibold tracking-wider leading-relaxed'>{product.title}</p>
          </div>

          <div className='grid grid-cols-10'>
            <div className='col-span-5 px-20 py-5'>
              <figure><img src={product.img} alt={product.title} /></figure>
            </div>

            <div className='col-span-5 py-10'>
              <small className='font-mono tracking-wider leading-relaxed'>Categoria: {product.category}</small>
              <h2 className='text-3xl  tracking-wide leading-relaxed special-font-color'>{product.title}</h2>

              <p className='text-bold text-1xl text-slate-600 my-2 tracking-wider leading-relaxed'>$ {product.price}</p>

              <p className='font-mono tracking-wider leading-relaxed my-2'>DESCRIPCIÓN</p>

              <p className='text-justify tracking-wider leading-relaxed font-light text-sm mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium nunc tortor, eu laoreet odio tincidunt at. 
                Pellentesque sit amet mi faucibus, volutpat orci quis, volutpat justo. Nulla facilisi. Aenean et tincidunt quam. 
                Mauris non mi nisi. Suspendisse pulvinar erat molestie tristique commodo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Proin id augue orci. Nulla a ultricies mi. Proin ut lectus eu leo posuere auctor. In facilisis feugiat nisi eu tristique. Phasellus commodo posuere ante vitae dictum.
              </p>

              <div>
                {thereAreCount ?
                  <button className='btn card-widget-background'><Link to="/cart">Ver Carrito</Link></button>
                : 
                  <ItemCount handlerAdd={handlerAdd} stock={15} initial={0} />
                }
                
              </div>
            </div>
          </div>

        </div>

        <div className='col-span-1'></div>
      </div>
    </>
  )
}

export default ItemDetail