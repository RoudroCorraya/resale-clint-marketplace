import React from 'react';

const WishListDeleteModal = ({wishListDeleteinfo, closeModal, deletaitationWishList}) => {
    const {model, productID} = wishListDeleteinfo;
    return (
        <div>
            <input type="checkbox" id="wishListDelete" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{model}</h3>
                    <p className="py-4">Do you want to delate : {productID}</p>
                    <div className="modal-action">
                    <label onClick={()=>deletaitationWishList(wishListDeleteinfo)} htmlFor="wishListDelete" className="btn btn-error">Delete</label>
                        <label onClick={closeModal} htmlFor="wishListDelete" className="btn">Close!</label>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishListDeleteModal;