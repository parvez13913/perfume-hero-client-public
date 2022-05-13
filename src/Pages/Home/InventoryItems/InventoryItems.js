import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import UseInventoryItems from '../../../hook/UseInventoryItems';
import Inventory from '../Inventory/Inventory';
import './InventoryItem.css';

const InventoryItems = () => {
    const [inventoryItems] = UseInventoryItems();
    const loadedItem = inventoryItems.slice(0, 6);
    const navigate = useNavigate();
    const handelManageInventory = () => {
        navigate('/manage');
    }
    return (
        <div className='container'>
            <h1 className='text-center my-3 text-dark'>Our Inventory</h1>
            <div className='row g-4'>
                {
                    loadedItem.map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    />)
                }
            </div>
            <div className='d-flex justify-content-center'>
                <Button onClick={handelManageInventory} className='manage-button'>Manage Inventory</Button>
            </div>
        </div >
    );
};

export default InventoryItems;