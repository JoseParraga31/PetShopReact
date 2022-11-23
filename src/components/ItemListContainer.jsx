import React from 'react'
import "../assets/css/ItemListContainer.css"

export default function ItemListContainer(props) {
  return (
    <div>
        <div className="ItemListContainer">{props.text}</div>
    </div>
  )
}
