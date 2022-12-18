import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../assets/css/itemCards.css"

function ItemCards({nombre, descripcion, img, precio, id}) {
  return (
    <div className='col-3' >
      <Card style={{ width: '12rem',
      backgroundColor: '#ff6961',
      borderRadius: '0.5em',
      }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {descripcion}
          </Card.Text>
          <Card.Text>
          Precio: {precio}$
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCards;