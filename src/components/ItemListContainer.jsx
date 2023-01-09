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
const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);


  useEffect(() => {
    if (idCategory) {
      getProducts().then((prod) => {
        const prodFilter = prod.filter(prod => prod.categoria === idCategory);
        setItems(prodFilter)

        setTimeout(() => {
          setLoading(false)
        }, 2000)

      });
    
    }else{
      getProducts().then((prod) => {
        setItems(prod)
        setTimeout(() => {
          setLoading(false)
        }, 2000 )
      });
    }

    return()=>setItems([]);
  },[idCategory]);
  

  return (
    <div className='ItemListContainer'>
      {loading ? <Loader>|</Loader> : <ItemsList items={items} />}
     
      
    </div>
  )
}
