import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContex";
import { useContext, useState } from "react";
import CartCard from "./CartCard";
import "../assets/css/carrito.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function Carrito() {
  const { cart, TortalPrecioCarrito, emptyCart, deleteProductById } =
    useContext(CartContext);

  const [vistaCarrito, SetVistaCarrito] = useState(cart);

  const vaciarCarrito = () => {
    SetVistaCarrito([], emptyCart());
  };

  const TotalAPagar = TortalPrecioCarrito()
  const sendOrder = () => {
    const user = {nombre: "jose", tel: 1123445678, mail: "jose@gmail.com"}
    const order ={
      buyer: user,
      items: cart,
      total: TotalAPagar,

    }
    seveOrder(order)
    console.log(order);
  }
  const seveOrder = async ( order ) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const { id } = await addDoc(orderCollection , order)
    console.log("nueva order:", id);
 
  }
  
  return (
    <div>
      <NavBar></NavBar>
      <h1 className="row tituloCarrito"> Tus Productos </h1>
      <div className="container CarritoContainer">
        {cart.length === 0 ? (
          <Link className="links"  to={"/"}>
           <button className="btncomprar"><p>Ir a Comprar</p></button> 
          </Link>
        ) : (
          vistaCarrito.map((prod) => {
            return (
              <CartCard
                key={prod.id}
                {...prod}
                deleteProductById={deleteProductById}
              ></CartCard>
            );
          })
        )}
      </div>
      
      <div className="row barraBotonera d-flex">
        <div className="PrecioFinal">
          Precio Final: <span>{TortalPrecioCarrito()}$</span>
        </div>
        <Button onClick={() => sendOrder()}> Finalizar Compra</Button>
        <Button onClick={() => vaciarCarrito()}>Vacias Carrito</Button>
      </div>
     
      <Footer></Footer>
    </div>
  );
}
