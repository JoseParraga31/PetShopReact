import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

import  Navbar  from '../components/NavBar'
import  Footer  from '../components/Footer'
import Loader from '../components/Loader'
import { getFirestore, doc, getDoc} from "firebase/firestore";
export default function ItemDetailContainer() {
const {id} = useParams();
console.log(id);
const [item, setItem] = useState({});

 const [loading, setLoading] = useState(true)
 
 
 
const getItemById = async (id) => {
  console.log(id);
  const db = getFirestore();
  const docRef = doc(db, "item", id);
  const results = await getDoc(docRef);

  setItem(
    {
      id: results.id,
    ...results.data(),
    });
  };
  
useEffect(() => {
  getItemById(id)
    setLoading(false)
}, [id])



// useEffect(() => {
//   getProducts().then((prods) => {
//     const FindProd = prods.find(prod => prod.id === parseInt(id))
//     setItem(FindProd)
    
//     setTimeout(() => {
//       setLoading(false)
//     }, 2000 )
    
//     return()=>setItem({});
//   });

// }, [id]);

  return(
      <div>    
        <Navbar></Navbar>
        {loading ? <Loader>|</Loader> : <ItemDetail Item={item}></ItemDetail>}
        <Footer></Footer>
      </div>
    )
  }


    
