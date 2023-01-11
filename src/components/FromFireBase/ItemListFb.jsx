import React from 'react'
import { useState, useeffect } from "react"
import { getDoc, getFirestore, doc} from "firebase/firestore"


function ItemListFb() {

    const [Item, setItem] = useState({})

    useeffect(()=>{
    
        getItemData()

    }, [])

    const getItemData =()=>{
        const db = getFirestore()
        const docRef = doc(db, "items", "1FWk8nowDsup7rXKpE90" )
        getDoc( docRef ).then( snapshot =>{
            setItem( { id: snapshot.id, ...snapshot.data() } )


        })
    }
  return (
    <div>ItemListFb</div>
  )
}

export default ItemListFb