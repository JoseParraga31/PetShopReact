import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../assets/css/itemCards.css"
import { Link } from 'react-router-dom';

function ItemCards({nombre, descripcion, img, precio, id,}) {
  
  return (
    <div className='col-3'>
      <Card style={{ width: '14rem',
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
          <Link to={`/item/${id}`}>
          <Button variant="primary">ver Mas</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemCards;