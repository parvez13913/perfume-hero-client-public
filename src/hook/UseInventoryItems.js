import { useEffect, useState } from "react";

const UseInventoryItems = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        fetch('https://damp-basin-67790.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setInventoryItems(data));
    }, []);

    return [inventoryItems, setInventoryItems];
}


export default UseInventoryItems;