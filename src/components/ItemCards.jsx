import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../assets/css/itemCards.css"

function ItemCards({nombre, descripcion, img, precio, id}) {
  return (
    <Card >
      <Card.Img variant="top" src={img} />
      <Card.Body className='carta1'>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
          {descripcion}
        </Card.Text>
        <Card.Text>
            {precio}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ItemCards;