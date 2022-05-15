import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css'
import SingleItem from './SingleItem/SingleItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItem, setMyItem] = useState([]);

    useEffect(() => {
        const email = user?.email;

        const getMyItem = async () => {
            const url = `http://localhost:5000/myInventory?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setMyItem(data);
        }

        getMyItem();
    }, [myItem, user]);

    return (
        <div>
            <h1 className='text-center my-5'>My Item</h1>
            {
                myItem.map(singleItem => <SingleItem
                    key={singleItem._id}
                    singleItem={singleItem}
                />)
            }
        </div>
    );
};

export default MyItem;