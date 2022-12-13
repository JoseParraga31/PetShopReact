import React from 'react'
import ItemCards from './ItemCards';

export default function ItemsList({ items }) {

  return (
    <div>
      {items.map(i => <ItemCards key={i.id} {...i} />)}

    </div>
  )
}


