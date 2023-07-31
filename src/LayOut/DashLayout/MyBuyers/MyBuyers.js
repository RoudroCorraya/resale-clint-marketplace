import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import MybuyerDetalis from './MybuyerDetalis';
import MybuyerDelteModal from './MybuyerDelteModal';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Contexts/AuthProvider';

const MyBuyers = () => {
    // const myBuyer = useLoaderData();
    // const {data:myBuyer = [], refetch} = useQuery({
    //     queryKey: ['myBuyer'],
    //     queryFn: ()=> fetch(`https://resale-server-market.vercel.app/dashboard/mybuyerfind/${SellerEmail}`)
    //     .then(res => res.json())
    // })
    const navigate = useLocation();
    const {user} = useContext(AuthContext);
    const [myBuyer, setMyBuyer] = useState([]);
    const token = localStorage.getItem('accessToken');
    useEffect(()=>{
        if(!user?.email || !token){
            return;
        }
        fetch(`https://resale-server-market.vercel.app/dashboard/mybuyerfind/${user?.email}`,{
            headers: {
                autorization: `bearer ${token}`,
                
            }
        })
        .then(res => res.json())
        .then(data => {
            // getToken(data.SellerEmail);
            setMyBuyer(data);
        })
    },[user?.email, token]);
   
    const [deleteMybuyer, setdeleteMybuyer] = useState(null);
    const closeModal = () =>{
        setdeleteMybuyer(null);
    }
   const deletaitation = (mybuyer) =>{
    fetch(`https://resale-server-market.vercel.app/mybuyer/${mybuyer._id}`, {
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
            navigate('/dashboard');
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