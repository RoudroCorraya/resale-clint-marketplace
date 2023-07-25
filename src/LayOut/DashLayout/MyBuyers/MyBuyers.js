import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MybuyerDetalis from './MybuyerDetalis';
import MybuyerDelteModal from './MybuyerDelteModal';
import { toast } from 'react-hot-toast';

const MyBuyers = () => {
    const myBuyer = useLoaderData();
    const [deleteMybuyer, setdeleteMybuyer] = useState(null);
    const closeModal = () =>{
        setdeleteMybuyer(null);
    }
   const deletaitation = (mybuyer) =>{
    fetch(`http://localhost:5000/mybuyer/${mybuyer._id}`, {
    method: 'DELETE',
    headers: {
        'content-type' : 'application/json'
    }
    })
    .then(res => res.json())
    .then(data => {
        console.log('delete data',data);
        if(data.deletedCount > 0 ){
            toast.success(`${mybuyer.buyer} deleted Successfully`);
            // navigate('/dashboard/buyers');
        }
    })
   }
    return (
        
           
           
      
        <div className="overflow-x-auto">
             My total Buyers {myBuyer.length}
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Buyer Info</th>
                        <th>Action</th>
                        
                    </tr>
                </thead>
                <tbody>
                   {
                    myBuyer.map((buyer, i) => <MybuyerDetalis key={buyer._id} buyer={buyer} i={i} setDeleteBuyer={setdeleteMybuyer}></MybuyerDetalis>)
                   }

                    {/* <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr> */}

                </tbody>
            </table>
        {deleteMybuyer &&
        <MybuyerDelteModal deleteMybuyer={deleteMybuyer} closeModal={closeModal} deletaitation={deletaitation}></MybuyerDelteModal>

        }
        </div>
    );
};

export default MyBuyers;