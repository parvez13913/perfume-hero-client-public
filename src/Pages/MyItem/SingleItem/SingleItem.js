import React from 'react';
import { toast } from 'react-toastify';
import deletePhoto from '../../../images/delete.png';

const SingleItem = ({ singleItem, myItem, setMyItem }) => {
    const { picture, quantity, name, supplierName, _id } = singleItem;

    const handelDeleteButton = id => {
        const proceed = window.confirm("Do you want to Delete?");
        if (proceed) {
            const url = `http://localhost:5000/myInventory/${_id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myItem?.filter(item => item._id !== id);
                    setMyItem(remaining);
                    toast.error("DELETE");
                })
        }
    }

    return (
        <div className='container my-5'>
            <div className='d-flex item-center justify-content-around border my-2 py-2 rounded shadow-lg manage-inventory'>
                <div>
                    <img className='inventory-img' src={picture} alt="" />
                </div>
                <div className="margin-top">
                    <h5>{name}</h5>
                </div>
                <div className="margin-top">
                    <h5>{supplierName}</h5>
                </div>
                <div className="margin-top">
                    <h5>{quantity}</h5>
                </div>
                <div className="mt-3">
                    <button onClick={() => handelDeleteButton(_id)} className='border-0 p-2 rounded-pill'>
                        <img className='delete-btn' src={deletePhoto} alt="deletePhoto" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;