import React, { useContext, useEffect, useState } from 'react';
import { useActionData, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import MyproductDetails from './MyproductDetails';
import DeleteMyproduct from './DeleteMyproductModal';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import DeleteMyproductModal from './DeleteMyproductModal';

const MyProduct = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [productDelete, setmyProductDelete] = useState(null);
    // const myproducts = useLoaderData();
   const {data: myproducts =[], isLoading, refetch} = useQuery({
    queryKey: ['myproducts'],
    queryFn: async ()=>{
        const res = await fetch(`http://localhost:5000/dashboard/categories/${user?.email}`);
        const data = res.json();
        return data;
    }
   });
   if (isLoading) {
    return <p>Loading.....</p>
}
const closeModal = () => {
    setmyProductDelete(null);
}
const deletaitationProduct = (data) => {
    fetch(`http://localhost:5000/myproduct/${data._id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log('inside my product data', data);
            if (data.deletedCount > 0) {
                toast.success(`${data?.model} deleted Successfully`);
                refetch();
                navigate('/dashboard');
            }
        })
}
    
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
                        myproducts.map((myproduct, i) => <MyproductDetails myproduct={myproduct} i={i} setmyProductDelete={setmyProductDelete}></MyproductDetails>)
                    }
                </tbody>
            </table>
        </div>
        {productDelete &&
            <DeleteMyproductModal productDeleteinfo={productDelete} closeModal={closeModal} deletaitationProduct={deletaitationProduct}></DeleteMyproductModal>
        }

    </div>
    );
};

export default MyProduct;