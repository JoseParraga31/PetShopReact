import React from 'react'
import carrito from "../assets/multimedia/images/carrito.png"
import "../assets/css/CartWidget.css";
function CartWidget() {
  return (
    <div>
    <a href=""><img src={carrito} alt="carrito de compras" className='CarritoStyle'/></a>
    </div>
  )
}

export default CartWidget