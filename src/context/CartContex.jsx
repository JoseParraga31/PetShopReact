import { createContext, useState, } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  const AddToCar = (productToAdd, cantidad) => {
    // creamos un nuevo objeto con los datos que recibimos por parámetros. Haciendo spread del producto.
      const newObj = {
        ...productToAdd,
        cantidad
      }
    // hacer una condicional, si el nuevo objeto está en el carrito
      if(isInCart(newObj.id)){
    // vamos a hacer un map y sumar las cantidades, así no duplicamos
          cart.map(el => {
            if(el.id === newObj.id)  {
              el.cantidad+= newObj.cantidad
            }
    //retornamos 
            return(el)
            })
        }
    // si es un producto que no está en el carrito, lo va a agregar. 
    else {
          setCart([...cart , newObj])
        }
    }
    const isInCart = (id) => {
      return cart.some(el => el.id === id)
    }




  const TortalProductosCarrito = () =>{
    return(cart.reduce((acc,product) => acc + product.cantidad, 0))
    
  }
  const TortalPrecioCarrito = () =>{
    return(cart.reduce((acc,product) => acc + product.cantidad * product.precio, 0))
    
  }
  const emptyCart = () =>{
    setCart([])
  }
  const deleteProductById = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart([...newCart]);
  }




  return(
    <CartContext.Provider value={{
      cart, 
      TortalProductosCarrito,
      TortalPrecioCarrito,
      emptyCart,
      deleteProductById,
      AddToCar,  
    }}>
      {children}
    </CartContext.Provider>

  )
}