import React from 'react'
import { ItemCount } from '../components/ItemCount'
import '../assets/css/itemDetail.css'

export default function ItemDetail({Item}) {
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
            </div>
        </section>
    </div>
  )
}
