import React from 'react'
import carrito from "../assets/multimedia/images/carrito.png"
import "../assets/css/CartWidget.css";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContex";
import { useContext } from "react"

function CartWidget() {
  const { TortalProductosCarrito } = useContext(CartContext)


  return (
    <div>
        <div className="CarritoStyle links">
            <Link className="links" to={'Carrito'}><img src={carrito} alt="carrito de compras" className='CarritoIconStyle links'/></Link>
            <span>{TortalProductosCarrito()}</span>
            
        </div>
    </div>
  )
} 
export default CartWidget