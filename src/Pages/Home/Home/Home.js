import React from 'react';
import Banner from '../Banner/Banner';
import HistoryOfPerfume from '../HistoryOfPerfume/HistoryOfPerfume';
import InventoryItems from '../InventoryItems/InventoryItems';
import OurPartners from '../OurPartners/OurPartners';

const Home = () => {
    return (
        <div>
            <Banner />
            <InventoryItems />
            <HistoryOfPerfume />
            <OurPartners />
        </div>
    );
};

export default Home;