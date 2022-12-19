import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import {getProducts} from '../data/Data'
import  Navbar  from '../components/NavBar'
import  Footer  from '../components/Footer'
import Loader from '../components/Loader'

export default function ItemDetailContainer() {
const {id} = useParams();

const [item, setItem] = useState({});

 const [loading, setLoading] = useState(true)

useEffect(() => {
  getProducts().then((prods) => {
    const FindProd = prods.find(prod => prod.id === parseInt(id))
    setItem(FindProd)
    setTimeout(() => {
      setLoading(false)
    }, 2000 )
    console.log(FindProd);
    
    return()=>setItem({});
  });

}, [id]);

  return(
      <div>    
        <Navbar></Navbar>
        {loading ? <Loader>|</Loader> : <ItemDetail Item={item}></ItemDetail>}
        <Footer></Footer>
      </div>
    )
  }


    
