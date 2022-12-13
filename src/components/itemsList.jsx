import React from 'react'
import ItemCards from './ItemCards';

export default function ItemsList(props) {
let items = props
  return (
    <div>
      {items.map(i => <ItemCards key={i.id} {...i} />)}

    </div>
  )
}

