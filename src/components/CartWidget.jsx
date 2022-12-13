import React from 'react'
import carrito from "../assets/multimedia/images/carrito.png"
import "../assets/css/CartWidget.css";
import { Link } from 'react-router-dom';
function CartWidget() {
  return (
    <div>
        <div className="CarritoStyle">
            <Link to={'Carrito'}><img src={carrito} alt="carrito de compras" className='CarritoIconStyle'/></Link>
            <div>3</div>
        </div>
    </div>
  )
}

export default CartWidget