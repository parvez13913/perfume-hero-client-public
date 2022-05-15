import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseInventoryItems from '../../hook/UseInventoryItems';
import InventoryItem from './InventoryItem';

const ManageInventory = () => {
    const [inventoryItems, setInventoryItems] = UseInventoryItems();
    const navigate = useNavigate()
    const handelAddItemButton = () => {
        navigate('/additems');
    }
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

            <div className='text-center my-5'>
                <button className='border-o btn bg-primary text-white' onClick={handelAddItemButton}>Go To AddItem</button>
            </div>
        </div>
    );
};

export default ManageInventory;