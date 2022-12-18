import React from 'react'
import {getProducts} from '../data/Data'
import { useEffect, useState } from 'react'
import "../assets/css/ItemListContainer.css"
import ItemsList from './itemsList';
import '../assets/css/ItemListContainer.css'

export default function ItemListContainer() {

  const [items, setItems] = useState([]);


  useEffect(() => {
    getProducts().then((prod) => {
      setItems(prod);
    });

  }, []);
  console.log(items);

  return (
    <div className='ItemListContainer'>
      <ItemsList items={items} />
    </div>
  )
}
