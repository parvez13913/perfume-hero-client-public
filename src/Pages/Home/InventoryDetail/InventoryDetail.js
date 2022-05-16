import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './InventoryDetail.css';
import UseInventoryDetail from '../../../hook/UseInventoryDetail/UseInventoryDetail';


const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [InventoryDetail, setInventoryDetail] = UseInventoryDetail(inventoryId);

    const handelDeliveredButton = () => {
        const { quantity, _id, ...rest } = InventoryDetail;
        const updatedInventory = {
            quantity: quantity - 1, ...rest
        }

        if (updatedInventory.quantity < 0) {
            return toast.error("Stock Out");
        }
        else {
            const proceed = window.confirm(`Please Confirm To Deliver a ${InventoryDetail.name}`);
            if (proceed) {
                (async function () {
                    console.log(updatedInventory);
                    const { data } = await axios.put(`https://damp-basin-67790.herokuapp.com/inventory/${_id}`, updatedInventory)
                    console.log(data);
                })();
                setInventoryDetail(updatedInventory);
                toast.success('Successfully Delivered');
            }
        }
    }

    const handelUpdateButton = event => {
        event.preventDefault();
        const restock = parseInt(event.target.quantity.value);
        const { quantity, _id, ...rest } = InventoryDetail;
        const updatedInventory = {
            quantity: parseInt(quantity) + restock, ...rest
        };
        const proceed = window.confirm("Do you want to restock this inventory");
        if (proceed) {
            if (!restock >= 1) {
                return toast.error("Enter a valid number");
            }
            const url = `https://damp-basin-67790.herokuapp.com/inventory/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updatedInventory)
            })
                .then(res => res.json())
                .then(data => {
                    setInventoryDetail(updatedInventory);
                    toast.success("Restock Successfully");
                    event.target.reset();
                })

        }
    }

    return (
        <div>
            <h1 className='text-center my-3'>DEtail Information For : {InventoryDetail?.name}</h1>
            <div>
                <div className="card my-3 w-50 container shadow-lg">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={InventoryDetail?.picture} className="img-fluid card-image w-75 mx-0" alt="inventoryImg" />
                            <form onSubmit={handelUpdateButton}>
                                <input placeholder='Quantity' className='m-3 w-50' type="number" min={0} name="quantity" id="quantity" />
                                <input className='mt-3 bg-primary border-0 p-2 text-white rounded' type="submit" value="Update" />
                            </form>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{InventoryDetail?.name}</h2>
                                <h4 className="card-title">Quantity: {InventoryDetail?.quantity}</h4>
                                <h2 className="card-title">supplier: {InventoryDetail?.supplierName}</h2>
                                <h5 className="card-title">Price: {InventoryDetail?.price}</h5>
                                <button onClick={handelDeliveredButton} className='btn btn-primary'>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-item-center py-3'>
                <Link to='/additems' className='my-3 mx-auto px-4 py-2 text-white rounded text-decoration-none'>
                    <Button className='bg-primary px-4 py-2'>Add Inventory</Button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;