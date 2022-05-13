import React from 'react';
import { toast } from 'react-toastify';
import deletePhoto from '../../images/delete.png';
import './InventoryItem.css';

const InventoryItem = ({ inventoryItem, inventoryItems, setInventoryItems }) => {
    const handelDeleteButton = id => {
        const proceed = window.confirm("Do you want to Delete?");
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventoryItems.filter(inventoryItem => inventoryItem._id !== id);
                    setInventoryItems(remaining);
                    toast.error("DELETE");
                })
        }
    }
    return (
        <div className='container'>
            <div className='d-flex item-center justify-content-around border my-2 py-2 rounded shadow-lg manage-inventory'>
                <div>
                    <img className='inventory-img' src={inventoryItem?.picture} alt="" />
                </div>
                <div className="margin-top">
                    <h5>{inventoryItem.name}</h5>
                </div>
                <div className="margin-top">
                    <h5>{inventoryItem.supplierName}</h5>
                </div>
                <div className="margin-top">
                    <h5>{inventoryItem.quantity}</h5>
                </div>
                <div className="mt-3">
                    <button onClick={() => handelDeleteButton(inventoryItem._id)} className='border-0 p-2 rounded-pill'>
                        <img className='delete-btn' src={deletePhoto} alt="deletePhoto" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;