import React, { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../Contexts/AuthProvider';
import WishListDetails from './WishListDetails';
import WishListDeleteModal from './WishListDeleteModal';
import { toast } from 'react-hot-toast';

const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishListDelete, setWishlistDelete] = useState(null);
    const { data: wishList = [], refetch, isLoading } = useQuery({
        queryKey: ['wishList'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/dashboard/wishlist/${user?.email}`);
            const data = await res.json();
            
            return data;
        }
    })
    if (isLoading) {
        return <p>Loading.....</p>
    }
    const closeModal = () => {
        setWishlistDelete(null);
    }
    const deletaitationWishList = (data) => {
        fetch(`http://localhost:5000/wishlist/${data?.productID}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('delete data', data);
                if (data.deletedCount > 0) {
                    toast.success(`${data.model} deleted Successfully`);
                    refetch();
                    // navigate('/dashboard/buyers');
                }
            })
    }

    return (
        <div>
            Total wishlist : {wishList.length}
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Product Info</th>
                        <th>Seller info</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>


                    {
                        wishList.map((w, i) => <WishListDetails w={w} i={i} setWishlistDelete={setWishlistDelete}></WishListDetails>)
                    }

                </tbody>
            </table>
            {wishListDelete &&
                <WishListDeleteModal wishListDeleteinfo={wishListDelete} closeModal={closeModal} deletaitationWishList={deletaitationWishList}></WishListDeleteModal>

            }
        </div>
    );
};

export default WishList;