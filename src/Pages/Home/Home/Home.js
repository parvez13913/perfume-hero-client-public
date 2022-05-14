import React from 'react';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurPartners from '../OurPartners/OurPartners';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <OurPartners />
        </div>
    );
};

export default Home;