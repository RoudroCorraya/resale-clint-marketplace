import React, { useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';

const CategoryDetails = ({category}) => {
    const {_id ,model, productImg, Location, ResalePrice, OrginalPrice, used, PostedDate, SellerName, SellerEmail} = category;
    console.log('bookinmodal cheaking', category);
    const [modal, setModal] = useState(false);

    return (
       
        <div className="card w-96 bg-base-100 shadow-xl my-4">
        <figure><img src={productImg} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">Model: {model}</h2>
            <p>Location: {Location}</p>
            <p>Resale Price: <strong>BDT {ResalePrice}</strong></p>
            <p>Orginal Price: BDT {OrginalPrice}</p>
            <p>Yesrs of Use: {used}</p>
            <p>Posted Date: {PostedDate}</p>
            <p>Seller Name: {SellerName}</p>
            <div className="card-actions justify-end">
                
                <label onClick={()=>setModal(true)} htmlFor="my_modal_6" className="btn btn-warning">Book Now</label>
            </div>
        </div>
        {modal &&
            <BookingModal category={category} setModal={setModal}></BookingModal>
        }
    </div>
    );
};

export default CategoryDetails;