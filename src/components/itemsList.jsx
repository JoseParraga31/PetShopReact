import React from 'react'
import ItemCards from './ItemCards';
import '../assets/css/itemList.css'

export default function ItemsList({ items }) {

  return (
   

    
    <div className='ContainerProductos container'>

      {items.map(i => <ItemCards key={i.id} {...i} items={items} />)}
    </div>

   
  )
}


