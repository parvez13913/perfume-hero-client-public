import { useEffect, useState } from 'react';
const UseInventoryDetail = inventoryId => {
    const [InventoryDetail, setInventoryDetail] = useState();

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${inventoryId
            }`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryDetail(data));
    }, [inventoryId]);

    return [InventoryDetail, setInventoryDetail]
}

export default UseInventoryDetail;