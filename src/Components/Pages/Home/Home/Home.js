import React, { useContext, useState } from 'react';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';
import OffersDetails from '../Offers/OffersDetails';

import Advertice from '../Advertise/Advertice';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import AdvertiseManage from '../Advertise/AdvertiseManage';
const Home = () => {
    const { advertise } = useContext(AuthContext);


    return (
        <div>
            <Banner></Banner>
            <ProductCategory></ProductCategory>
            

            <OffersDetails></OffersDetails>
            <AdvertiseManage></AdvertiseManage>
           
                
            
        </div>
    );
};

export default Home;