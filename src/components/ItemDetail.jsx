import React from 'react'
import { ItemCount } from '../components/ItemCount'
import '../assets/css/itemDetail.css'
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContex"
import { Link } from 'react-router-dom';

export default function ItemDetail({Item}) {

  const [finalizarCompra, setfinalizarCompra] = useState(false)

  const { addToCard, cart } = useContext(CartContext)
 
  const HandleAddToCart = () =>{
    addToCard(Item)
    setfinalizarCompra(!finalizarCompra)
  }
  console.log(cart);
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
                <ItemCount stock={Item.stock} />

                  {!finalizarCompra ? 
                  <button className='itemCount--buttonCart' onClick={ HandleAddToCart }>Add to Cart</button>
                  :  
                  <Link to="/Carrito"> <button className='itemCount--buttonCart'>Finalizar Compra</button></Link>
                  }
            </div>
        </section>
    </div>
  )
}
