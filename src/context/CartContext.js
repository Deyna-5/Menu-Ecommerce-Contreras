import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);
const { Provider } = CartContext; 

export function CartContextProvider({children}){
  const [cart, setCart] = useState([]);

  // * Función para saber si el producto está en el carro
  const isInCart = (id) => { 
      return cart.some((i) => i.id === id)
    }

  // * Función para añadir al carro
  const addToCart = (item, count) => { 

    if(isInCart(item.id)){
      console.log('SI ESTÁ EN EL CARRO')

      const newCart = cart.map(cartItem => {
        if(cartItem.id === item.id){
          console.log('CANTIDAD =>', count)

          const copyItem = {...cartItem}
          console.log('CANTIDAD PRODUCTO ACTUAL =>', copyItem.count)

          copyItem.count += count
          console.log('CANTIDAD ACTUALIZADA =>', copyItem.count)

          return copyItem

        }else{
          return cartItem
        }
      })
      setCart(newCart)

    }else{
      console.log('NO ESTÁ EN EL CARRO')

      const cartCopy = [...cart];
      const newItem = {...item, count};

      cartCopy.push(newItem)
      setCart(cartCopy)
    }
  }

  // * Función para eliminar productos
  const removeFromCart = (itemId) => { 
    const copyCart = [...cart]
    const cartFiltered = copyCart.filter((item) => {
      return item.id != itemId
    })

    setCart(cartFiltered)
  }

  // * Función para limpiar el carrito
  const clearCart = () => { 
    setCart([])
  }

  console.log('CARRITO ACTUALMENTE =>', cart)

  return(
    <Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </Provider>
  )
}

export default useCartContext