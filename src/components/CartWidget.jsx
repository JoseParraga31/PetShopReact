import React from 'react'
import carrito from "../assets/multimedia/images/carrito.png"
import "../assets/css/CartWidget.css";
function CartWidget() {
  return (
    <div>
        <div className="CarritoStyle">
            <a href=""><img src={carrito} alt="carrito de compras" className='CarritoIconStyle'/></a>
            <div>3</div>
        </div>
    </div>
  )
}

export default CartWidget