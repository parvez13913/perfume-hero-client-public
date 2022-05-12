import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import UseInventoryDetail from '../../../hook/UseInventoryDetail/UseInventoryDetail';


const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [InventoryDetail] = UseInventoryDetail(inventoryId);

    const handelDeliveredButton = () => {
        const quantity = InventoryDetail.quantity;
        const delivered = quantity - 1;
        console.log(delivered);
    }

    return (
        <div>
            <h1 className='text-center my-3'>DEtail Information For : {InventoryDetail?.name}</h1>
            <div>
                <div className="card my-3 w-50 container">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={InventoryDetail?.picture} className="img-fluid rounded-start" alt="inventoryImg" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">{InventoryDetail?.name}</h2>
                                <h2 className="card-title">Quantity: {InventoryDetail?.quantity}</h2>
                                <h2 className="card-title">supplier: {InventoryDetail?.supplierName}</h2>
                                <h2 className="card-title">Price: {InventoryDetail?.price}</h2>
                                <button onClick={handelDeliveredButton} className='btn btn-primary'>Delivered</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-item-center py-3'>
                <Link to='/checkout' className='my-3 mx-auto px-4 py-2 text-white rounded text-decoration-none'>
                    <Button className='bg-primary px-4 py-2'>Check Out</Button>
                </Link>
            </div>
        </div>
    );
};

export default InventoryDetail;