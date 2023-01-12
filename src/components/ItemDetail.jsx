import React from 'react'
import { ItemCount } from '../components/ItemCount'
import '../assets/css/itemDetail.css'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContex"
import { Link } from 'react-router-dom';

export default function ItemDetail({Item}) {

  const [finalizarCompra, setfinalizarCompra] = useState(false)
  
  const [cantidad, setCantidad] = useState(0)

  const { AddToCar, cart } = useContext(CartContext)
 
  const HandleAddToCart = (cantidad) =>{
    AddToCar(Item,cantidad)
    setCantidad(cantidad)
    setfinalizarCompra(!finalizarCompra)
  }
 
  return (
    <div>
        <h3 className='Titulo--itemDetail'>{Item.nombre}</h3>
        <section className="Container">
            <div className="col-12">
                <img className='img--itemDetail' src={Item.img} alt={Item.nombre} />
            </div>
            
            <div className="col-12 ">
                <p className='descripcion--itemDetail'>{Item.descripcion}</p>
                <p className='Stock--ItemDetail'>Stock: {Item.stock}</p>
                <p className='precio--ItemDetail'>Precio: {Item.precio}$</p>
                
                {
            cantidad > 0 ?
              <Link to="/Carrito"> <button className='itemCount--buttonCart'>Finalizar Compra</button></Link>
              :
              <ItemCount stock={Item.stock} HandleAddToCart={HandleAddToCart} />
          }            
            </div>
        </section>
    </div>
  )
}
