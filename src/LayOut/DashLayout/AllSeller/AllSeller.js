import React, { useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import AllSellerDetails from './AllSellerDetails';
import ConfirmationModal from '../../../Components/Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const AllSeller = () => {

   const navigate = useLocation();
    const allseller = useLoaderData();
    console.log('allseller',allseller);
    const [deleteSeller, setDeleteSeller] = useState(null);
    const closeModal = () =>{
        setDeleteSeller(null);
    }
   const deletaitation = (selelr) =>{
    fetch(`http://localhost:5000/sellers/${selelr._id}`, {
    method: 'DELETE',
    headers: {
        'content-type' : 'application/json'
    }
    })
    .then(res => res.json())
    .then(data => {
        console.log('delete data',data);
        if(data.deletedCount > 0 ){
            toast.success(`${selelr.name} deleted Successfully`);
            navigate('/dashboard/sellers');
        }
    })
   }
    return (
        <div className='mx-4'>
            Totale seller : {allseller.length}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Seller Info</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                           allseller.map((seller, i) => <AllSellerDetails key={seller._id} seller={seller} i={i}setDeleteSeller={setDeleteSeller}></AllSellerDetails>)
                        }

                        

                    </tbody>
                </table>
                       
            </div>
            {deleteSeller &&
                        <ConfirmationModal deleteSeller={deleteSeller} closeModal={closeModal} deletaitation={deletaitation}></ConfirmationModal>

                        }

        </div>
    );
};

export default AllSeller;