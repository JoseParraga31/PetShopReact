import React from 'react'

export default function ItemCards({nombre, descripcion, img, precio, id}) {
  return (
    <div>
        <img src={img} className="card-img-top img_card" alt="#"></img>
    <div className="card-body">
    <h6  className="card-title">{nombre}</h6>
    <p  className="font-text">{descripcion}</p>
    <p>Precio:{precio}$</p>
    <a  className="btn btn-primary" id="agregar${Producto.id}">Agregar al carrito</a>
    </div>
    </div>
  )
}
