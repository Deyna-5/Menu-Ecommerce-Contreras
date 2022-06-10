import { createContext, useContext, useState } from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext; 

export function CartContextProvider({children}){

  const [cart, setCart] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // * Función para saber si el producto está en el carro
  const isInCart = (id) => { 
      return cart.some((i) => i.id === id)
    }

  // * Función para añadir al carro
  const addToCart = (item, count) => { 
    if(isInCart(item.id)){
      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id){
          const copyItem = {...cartItem}
          copyItem.count += count
          return copyItem
        }else{
          return cartItem
        }
      });
      setCart(newCart)
  
    }else{
      const cartCopy = [...cart];
      const newItem = {...item, count};

      cartCopy.push(newItem)
      setCart(cartCopy)
    }
    setTotalCount(totalCount + count)
    setTotalPrice(totalPrice + (item.price * count))
  }

  // * Función para eliminar productos
  const removeFromCart = (recivedItem) => { 
    const copyCart = [...cart]
    const cartFiltered = copyCart.filter((item) => {
      return item.id != recivedItem.id
    })

    setCart(cartFiltered)
    setTotalCount(totalCount - recivedItem.count)
    setTotalPrice(totalPrice - (recivedItem.price * recivedItem.count))
  }

  // * Función para limpiar el carrito
  const clearCart = () => { 
    setCart([])
    setTotalCount(0)
    setTotalPrice(0)
  }

  return(
    <Provider value={{cart, addToCart, removeFromCart, clearCart, totalCount, totalPrice}}>
      {children}
    </Provider>
  )
}

export default useCartContext