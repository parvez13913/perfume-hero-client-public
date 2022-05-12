import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const navigate = useNavigate();

    const handelUpdateButton = id => {
        navigate(`/inventory/${id}`)
    }

    const { _id, picture, name, supplierName, description, quantity, price } = inventory;
    return (
        <div className='d-grid col-sm-12 col-md-6 col-lg-4 mb-5'>
            <Card className='card-container shadow-lg'>
                <Card.Img className='card-img' src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='supplier-title'>
                        Supplier : {supplierName}
                    </Card.Text>
                    <Card.Text className='ms-2'>
                        Quantity : {quantity}
                    </Card.Text>
                    <Card.Text>
                        {price}
                    </Card.Text>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button onClick={() => handelUpdateButton(_id)} className='btn-width' variant="primary">Stock Update</Button>
                </Card.Body>
            </Card>
        </div >
    );
};

export default Inventory;