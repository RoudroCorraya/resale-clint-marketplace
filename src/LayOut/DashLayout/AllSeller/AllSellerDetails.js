import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Link, json } from 'react-router-dom';

const AllSellerDetails = ({ seller, i, setDeleteSeller }) => {
    const { name, email, _id, varify } = seller;
    
    const handleVerify = (email, _id) => {
        fetch(`http://localhost:5000/sellerVerify/${email}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    userverify(_id);   
                    console.log(data);
                    toast.success('verifyed successfully');
                }
            })
    }
    const userverify = (_id) =>{
        console.log('userId',_id);
        fetch(`http://localhost:5000/userVerify/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(seller)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    
                    console.log(data);
                    
                    
                }
            })
    }
    
    
    return (
        <tr>
            <th>{i + 1}</th>

            <td className='text-xs'>{name}<br />

            </td>
            <td className='text-xs'>{email}</td>

            <td>

                <label onClick={() => setDeleteSeller(seller)} htmlFor="Delete" className="btn btn-xs mx-2">Delete</label>
                {!varify &&
                   
                       <label onClick={() => handleVerify(email, _id)} className="btn btn-xs mx-2">Verify</label>

                }
                {
                    varify &&
                    <label className="btn btn-xs bg-green-700 mx-2">Verified</label> 
                }




            </td>
        </tr>
    );
};

export default AllSellerDetails;