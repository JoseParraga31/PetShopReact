import React from 'react';

import { useEffect, useState } from 'react';
import "../assets/css/ItemListContainer.css";
import ItemsList from './itemsList';
import '../assets/css/ItemListContainer.css';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { getDocs, getFirestore, collection} from "firebase/firestore"

export default function ItemListContainer() {
const {idCategory} = useParams();
const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([]);


  const getItems = async () =>{

    const db = getFirestore()
    const collectionRef = collection( db, "items", )
    const snapShot = await getDocs( collectionRef )
    console.log( snapShot.docs.map( d => ({id: d.id, ...d.data()})))

}
console.log('====================================');
console.log(items);
console.log('====================================');
  useEffect(() => {
    getItems()
    if (idCategory) {
      getItems((prod) => {
        const prodFilter = prod.filter(prod => prod.categoria === idCategory);
        setItems(prodFilter)

        setTimeout(() => {
          setLoading(false)
        }, 2000)

      });
    
    }else{
      getItems((prod) => {
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
