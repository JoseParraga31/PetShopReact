import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContex";
import { useContext, useState } from "react";
import CartCard from "./CartCard";
import "../assets/css/carrito.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Carrito() {
  const { cart, TortalPrecioCarrito, emptyCart, deleteProductById } =
    useContext(CartContext);

  const [vistaCarrito, SetVistaCarrito] = useState(cart);

  const vaciarCarrito = () => {
    SetVistaCarrito([], emptyCart());
  };

  return (
    <div>
      <NavBar></NavBar>
      <h1 className="row tituloCarrito"> Tus Productos </h1>
      <div className="container CarritoContainer">
        {cart.length === 0 ? (
          <Link to={"/"}>
            <h1>Ir a Comprar</h1>
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
        <Button> Finalizar Compra</Button>
        <Button onClick={() => vaciarCarrito()}>Vacias Carrito</Button>
      </div>
      <Footer></Footer>
    </div>
  );
}
