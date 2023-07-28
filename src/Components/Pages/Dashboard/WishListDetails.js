import React from 'react';
import { Link } from 'react-router-dom';

const WishListDetails = ({ w, i, setWishlistDelete }) => {
    const { SellerEmail, model, productImg, buyerEmail, Location, wishCategory } = w;
    return (
        <tr>
            <th>{i + 1}</th>
            <td className='flex'>
                <div className="avatar">
                    <div className="w-10 mask mask-squircle">
                        <img src={productImg} alt='' />
                    </div>
                    
                </div>
                <div className='my-auto mx-2'><span className=''>{model}</span></div>
            </td>
            <td>
                Seller Email: {SellerEmail}<br/>
                Location: {Location}
            </td>
            <td>
                <Link to={`/categories/${wishCategory}`}><button className='btn btn-warning'>Go to Purchase</button></Link>
                
                <label onClick={()=>setWishlistDelete(w)} htmlFor="wishListDelete" className="btn btn-xs bg-red-600 mx-2">x</label>
                
                </td>
        </tr>
    );
};

export default WishListDetails;