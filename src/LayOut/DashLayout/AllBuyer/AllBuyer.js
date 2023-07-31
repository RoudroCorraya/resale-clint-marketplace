import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import AllBuyerDetails from './AllBuyerDetails';
import { toast } from 'react-hot-toast';
import BuyerConfirmModal from '../../../Components/Shared/ConfirmationModal/BuyerConfirmModal';
import { useQuery } from 'react-query';
import axios from 'axios';


const AllBuyer = () => {
    // const allBuyer = useLoaderData();
    // const {data:allBuyer = [], refetch} = useQuery({
    //     queryKey: ['allBuyer'],
    //     queryFn: () => fetch('http://localhost:5000/buyer')
    //     .then(res => res.json())
        
    // })

    const [deleteBuyer, setDeleteBuyer] = useState(null);
    const navigate = useLocation();
    const [allBuyer, setAllBuyer] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:5000/buyer')
        .then(data => {
            
            const loadedData = data.data;
            setAllBuyer(loadedData);
            console.log(loadedData);
            
        })
    },[])
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
            toast.success(`${deleteBuyer.name} deleted Successfully`);
            // refetch();
            // navigate(`/dashboard/`);
        }
    })
   }
    return (
        <div className='mx-4'>
       Total Buyer: {allBuyer.length}
        <div className="overflow-x-auto">
            <table className="table sm:table-xs md:table-md lg:table-lg">
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