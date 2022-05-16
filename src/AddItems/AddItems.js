import React from 'react';
import { useForm } from "react-hook-form";
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import './Additems.css';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handelManageButton = () => {
        navigate('/manage');
    }
    const onSubmit = data => {
        toast('Your Inventory Has Been Added');
        const url = `https://damp-basin-67790.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result));


        axios.post("https://damp-basin-67790.herokuapp.com/myInventory", data)
            .then(res => console.log(res));
    };

    return (
        <div className='w-50 mx-auto bg-light my-5 p-3 rounded shadow-lg'>
            <h1 className='text-center'>Add Inventory</h1>
            <form className='d-flex flex-column my-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' value={user?.displayName} readOnly {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' min={0} placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
                <input className='mb-2' readOnly value={user?.email} placeholder='Email' type="email" {...register("email")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                <input className='mb-2' min={0} placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='submit-Button rounded' value='Add Inventory' type='submit' />
            </form>

            <div className='text-center my-5'>
                <button className='border-o btn bg-primary text-white' onClick={handelManageButton}>Go To Manage Inventory</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default AddItems;