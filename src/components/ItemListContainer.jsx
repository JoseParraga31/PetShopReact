import React from 'react'
import getProducts from '../data/Data'
import { useEffect, useState } from 'react'
import "../assets/css/ItemListContainer.css"
import ItemsList from './itemsList';


export default function ItemListContainer() {

  const [items, setItems] = useState([]);
useEffect(() => {
  getProducts().then(res => {
    console.log(res);
    setItems(res)
  }).catch(err =>{
    console.log(err);
  })
}, [])

console.log(items);

  return (
    <div>
        <ItemsList items={items}></ItemsList>
    </div>
  )
}
