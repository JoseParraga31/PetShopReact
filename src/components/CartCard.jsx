import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext} from "react"
import { CartContext } from "../context/CartContex";



function CartCard ({nombre, descripcion, img, precio, id, cantidad}) {

    const { deleteProductById } = useContext(CartContext)
  
  const precioTotal = cantidad * precio
  return (
    <div className="col-3">
      <Card
        style={{
          width: "14rem",
          backgroundColor: "#ff6961",
          borderRadius: "0.5em",
        }}
      >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>Precio unidad: {precio}$</Card.Text>
          <Card.Text>Precio Total: {precioTotal}$</Card.Text>
          <Card.Text>cantidad: {cantidad} uni</Card.Text>
          <Button onClick={() => deleteProductById(id)}>Eliminar del carrito</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CartCard;
