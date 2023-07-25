import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import AllBuyerDetails from './AllBuyerDetails';
import { toast } from 'react-hot-toast';
import BuyerConfirmModal from '../../../Components/Shared/ConfirmationModal/BuyerConfirmModal';

const AllBuyer = () => {
    const allBuyer = useLoaderData();
    const [deleteBuyer, setDeleteBuyer] = useState(null);
    const navigate = useLocation();
    const closeModal = () =>{
        setDeleteBuyer(null);
    }
   const deletaitation = (buyer) =>{
    fetch(`http://localhost:5000/buyer/${buyer._id}`, {
    method: 'DELETE',
    headers: {
        'content-type' : 'application/json'
    }
    })
    .then(res => res.json())
    .then(data => {
        console.log('delete data',data);
        if(data.deletedCount > 0 ){
            toast.success(`${buyer.name} deleted Successfully`);
            // navigate('/dashboard/buyers');
        }
    })
   }
    return (
        <div className='mx-4'>
       Total Buyer: {allBuyer.length}
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Buyer Info</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                    allBuyer.map((buyer, i) => <AllBuyerDetails key={buyer._id} buyer={buyer} i={i} setDeleteBuyer={setDeleteBuyer}></AllBuyerDetails>)
                   }

                    {/* <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr> */}

                </tbody>
            </table>
        </div>
                    {deleteBuyer &&
                    <BuyerConfirmModal deleteBuyer={deleteBuyer} closeModal={closeModal} deletaitation={deletaitation}></BuyerConfirmModal>

                    }
    </div>
    );
};

export default AllBuyer;