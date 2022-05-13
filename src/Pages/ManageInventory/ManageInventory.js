import React from 'react';
import UseInventoryItems from '../../hook/UseInventoryItems';
import InventoryItem from './InventoryItem';

const ManageInventory = () => {
    const [inventoryItems, setInventoryItems] = UseInventoryItems();
    return (
        <div>
            <h1 className='my-3 text-center'>Manage Inventory</h1>
            <div>
                {
                    inventoryItems.map(inventoryItem => <InventoryItem
                        key={inventoryItem._id}
                        inventoryItem={inventoryItem}
                        inventoryItems={inventoryItems}
                        setInventoryItems={setInventoryItems}
                    />)
                }
            </div>
        </div>
    );
};

export default ManageInventory;