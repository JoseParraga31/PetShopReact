import React from "react";
import { useEffect, useState } from "react";
import "../assets/css/ItemListContainer.css";
import ItemsList from "./itemsList";
import "../assets/css/ItemListContainer.css";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getDocs, getFirestore, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    const db = getFirestore();
    const collectionRef = collection(db, "item");
    const snapShot = await getDocs(collectionRef);
    const itemsAux = snapShot.docs.map((d) => ({ id: d.id, ...d.data() }));
    setItems(itemsAux);
    console.log('====================================');
    console.log(itemsAux);
    console.log('====================================');
  };
  const getItemsCategory = async (idCategory) => {
    const db = getFirestore();
    const collectionRef = collection(db, "item");
    const queryCat = query(collectionRef, where("categoria","==", idCategory ) )
    
    const results = await getDocs(queryCat);
    let dataProductos = results.docs.map((doc) => {
      return {
      id: doc.id,
      ...doc.data(),
      };
    });
    setItems(dataProductos)
   
   
  }

  useEffect(() => {
    if (idCategory) {
      getItemsCategory(idCategory);
    } else {
      getItems();
    }
    setLoading(false);
  }, [idCategory]);

  return (
    <div className="ItemListContainer">
      {loading ? <Loader>|</Loader> : <ItemsList items={items} />}
    </div>
  );
}
