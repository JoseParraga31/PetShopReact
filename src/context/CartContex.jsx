import { createContext, useState, } from "react";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
  
  const [cart, setCart] = useState([])

  const addToCar = (productToAdd, cantidad) => {

    const newObj = {
      ...productToAdd,
      cantidad
    }
    console.log('====================================');
    console.log( newObj);
    console.log('====================================');
    const islnCart = cart.some((prod) => prod.id === productToAdd)
    console.log(islnCart);
    if(islnCart){
      cart.map(el=> {
        if(el.id === newObj.id)  {
          el.cantidad += newObj.cantidad
          return(el)
        }else{
          setCart([...cart , newObj])
        }
    })

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
    const newCart = cart.filter(item => item.id != id)
    setCart([...newCart]);
  }




  return(
    <CartContext.Provider value={{
      cart, 
      TortalProductosCarrito,
      TortalPrecioCarrito,
      emptyCart,
      deleteProductById,
      addToCar

      
    }}>
      {children}
    </CartContext.Provider>

  )
}}