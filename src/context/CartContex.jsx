import { createContext, useState, } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  const addToCard = (product) =>{
    if(cart.length === 0){
      setCart([{
        ...product,
      }])
    } else{
      const findedProduct = cart.find(item => item.id === parseInt(product.id))
      if(!findedProduct){
        setCart([
          ...cart,
          {
            ...product
          }
        ])
      } else{
        const filteredProduct = cart.filter(item => item.id !== parseInt(product.id) )
        
        setCart([
          ...filteredProduct,
          {
            ...findedProduct,
            cantidad: findedProduct.cantidad +1
          }
        ])
      }
    }
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
    setCart(newCart)
  }



  return(
    <CartContext.Provider value={{
      cart,
      addToCard, 
      TortalProductosCarrito,
      TortalPrecioCarrito,
      emptyCart,
      deleteProductById 

      
    }}>
      {children}
    </CartContext.Provider>

  )
}