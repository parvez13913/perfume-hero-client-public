import React from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import './Additems.css';

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        toast('Your Inventory Has Been Added');
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => console.log(result))
    };
    return (
        <div className='w-50 mx-auto bg-light my-5 p-3 rounded shadow-lg'>
            <h1 className='text-center'>Add Inventory</h1>
            <form className='d-flex flex-column my-4' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='submit-Button rounded' value='Add Inventory' type='submit' />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddItems;