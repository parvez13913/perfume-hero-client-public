import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';

const InventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setInventoryItems(data));
    }, [])
    return (
        <div className='container'>
            <h1 className='text-center my-3 text-dark'>Our Inventory</h1>
            <div className='row g-4'>
                {
                    inventoryItems.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    />)
                }
            </div>
        </div>
    );
};

export default InventoryItems;