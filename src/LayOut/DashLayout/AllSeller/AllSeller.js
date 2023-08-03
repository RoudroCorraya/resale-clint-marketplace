import React, { useState } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import AllSellerDetails from './AllSellerDetails';
import ConfirmationModal from '../../../Components/Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllSeller = () => {

   const navigate = useNavigate();
   
    // const allseller = useLoaderData();
    const {data:allseller = [], refetch} = useQuery({
        queryKey: ['allseller'],
        queryFn: ()=> fetch('http://localhost:5000/sellers')
        .then(res => res.json())

    })
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
            refetch();
            navigate('/dashboard/sellers');
           
        }
    })
   }
    return (
        <div className='mx-4'>
            Totale seller : {allseller.length}
            <div className="overflow-x-auto">
                <table className="table sm:table-xs md:table-md lg:table-lg">
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