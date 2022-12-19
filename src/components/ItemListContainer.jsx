import React from 'react';
import {getProducts} from '../data/Data';
import { useEffect, useState } from 'react';
import "../assets/css/ItemListContainer.css";
import ItemsList from './itemsList';
import '../assets/css/ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';

export default function ItemListContainer() {
const {idCategory} = useParams();
// const [loading, setLoading] = useState(true)
console.log(idCategory);
  const [items, setItems] = useState([]);


  useEffect(() => {
    if (idCategory) {
      getProducts().then((prod) => {
        const prodFilter = prod.filter(prod => prod.categoria === idCategory);
        setItems(prodFilter)
      });
    
    }else{
      getProducts().then((prod) => {
        setItems(prod)
      });
    }

    return()=>setItems([]);
  },[idCategory]);
  

  return (
    <div className='ItemListContainer'>
      {/* {loading ? <Loader>|</Loader> : <ItemsList items={items} />} */}
      <ItemsList items={items} />
      
    </div>
  )
}
