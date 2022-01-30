import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Package.css";

const Package = ({packages}) => {
    const{Name, image, description, price, _id} = packages
    return (
        <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <Card.Text>
            {Name}
          </Card.Text>
          <Card.Text>
            {description}
          </Card.Text>

          <Card.Text>
            <p>Package:$ {price}</p>
          </Card.Text>
          <Link to={`/services/${_id}`}> <button className="btn btn-info">Order</button></Link>
        </Card.Body>
      </Card>
     
     
    );
};

export default Package;



