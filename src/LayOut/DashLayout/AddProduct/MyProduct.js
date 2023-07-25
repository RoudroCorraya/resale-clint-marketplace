import React, { useContext, useEffect, useState } from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyproductDetails from './MyproductDetails';
import DeleteMyproduct from './DeleteMyproduct';
import { toast } from 'react-hot-toast';

const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const myproducts = useLoaderData();
  
    
    
    // console.log('myproduct', myproducts);
    return (
        <div className='mx-4'>
        you have Total : {myproducts.length} products 
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Model</th>
                        <th>Seller Info</th>
                        <th>Resale Price</th>
                        <th> Action Cart</th>
                    </tr>
                </thead>
                <tbody>
                   
                    {
                        myproducts.map((myproduct, i) => <MyproductDetails myproduct={myproduct} i={i} ></MyproductDetails>)
                    }
                </tbody>
            </table>
        </div>
        

    </div>
    );
};

export default MyProduct;